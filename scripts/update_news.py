"""Refresh news.json from the Commissioner Karachi and Government of Sindh websites.

Runs on a schedule in GitHub Actions (.github/workflows/update-news.yml).
Only headlines, dates, images and links are taken; every card links back to the
original article on the source website.

Safety: if a website cannot be reached, or no news items are found (for example
because the site changed its layout), the previous items for that source are kept.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
NEWS_FILE = ROOT / "news.json"
HEADERS = {"User-Agent": "Mozilla/5.0 (DC Central Karachi website news updater)"}
MAX_ITEMS = 12

CK_HOME = "https://commissionerkarachi.gos.pk/"
CK_GALLERY = "https://commissionerkarachi.gos.pk/media-gallery"
SINDH_HOME = "https://www.sindh.gov.pk/"

MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December"
DATE_RE = re.compile(rf"\b(?:{MONTHS})\s+\d{{1,2}},\s+\d{{4}}\b|\b\d{{1,2}}\s+(?:{MONTHS})\s+\d{{4}}\b")


def fetch(url):
    response = requests.get(url, headers=HEADERS, timeout=40)
    response.raise_for_status()
    return BeautifulSoup(response.text, "html.parser")


def clean(text):
    return re.sub(r"\s+", " ", text or "").strip().rstrip(",").strip()


def img_src(img, base):
    src = img.get("src") or img.get("data-src") or ""
    return urljoin(base, src) if src else ""


def card_for(node, must_match=None, max_up=7):
    """Walk up from a node to the smallest ancestor that looks like a news card."""
    current = node
    for _ in range(max_up):
        if current.parent is None:
            break
        current = current.parent
        text = clean(current.get_text(" "))
        if must_match is None or must_match.search(text):
            if len(text) > 25:
                return current
    return None


def heading_in(card):
    for tag in card.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "strong", "b"]):
        text = clean(tag.get_text(" "))
        if len(text) > 15 and not DATE_RE.fullmatch(text):
            return text
    for tag in card.find_all(["p", "a", "span", "div"]):
        text = clean(tag.get_text(" "))
        if len(text) > 25 and not DATE_RE.fullmatch(text):
            return text
    return ""


def scrape_commissioner():
    items, seen = [], set()
    for page in (CK_HOME, CK_GALLERY):
        try:
            soup = fetch(page)
        except Exception as error:  # noqa: BLE001
            print(f"Commissioner Karachi: could not read {page}: {error}")
            continue
        for img in soup.find_all("img"):
            src = img_src(img, page)
            if "/storage/media-gallery/" not in src:
                continue
            card = card_for(img, DATE_RE) or card_for(img)
            if card is None:
                continue
            title = heading_in(card) or clean(img.get("alt"))
            found = DATE_RE.search(clean(card.get_text(" ")))
            when = found.group(0) if found else ""
            key = (title.lower(), when)
            if not title or key in seen:
                continue
            seen.add(key)
            items.append({"title": title, "date": when, "image": src, "link": CK_GALLERY})
            if len(items) >= MAX_ITEMS:
                return items
        if items:
            break
    return items


def scrape_sindh():
    try:
        soup = fetch(SINDH_HOME)
    except Exception as error:  # noqa: BLE001
        print(f"Government of Sindh: could not read the website: {error}")
        return []
    with_image, without_image, seen = [], [], set()
    for link in soup.find_all("a", href=True):
        url = urljoin(SINDH_HOME, link["href"]).split("#")[0]
        if not re.search(r"/news/[^/?]+/?$", url) or url in seen:
            continue
        card = card_for(link) or link
        title = clean(link.get("title")) or clean(link.get_text(" "))
        if len(title) < 15 or title.lower() in {"read more", "view details", "more"}:
            title = heading_in(card)
        if len(title) < 15:
            continue
        seen.add(url)
        image = ""
        for img in card.find_all("img"):
            src = img_src(img, SINDH_HOME)
            if "/storage/news/" in src and not src.rstrip("/").endswith("/storage"):
                image = src
                break
        found = DATE_RE.search(clean(card.get_text(" ")))
        entry = {"title": title, "date": found.group(0) if found else "", "image": image, "link": url}
        (with_image if image else without_image).append(entry)
    return (with_image + without_image)[:MAX_ITEMS]


def main():
    data = json.loads(NEWS_FILE.read_text(encoding="utf-8"))
    changed = False
    for key, scraper in (("commissioner", scrape_commissioner), ("sindh", scrape_sindh)):
        new_items = scraper()
        print(f"{key}: found {len(new_items)} items")
        if not new_items:
            print(f"{key}: keeping the previous items")
            continue
        if new_items != data[key]["items"]:
            data[key]["items"] = new_items
            changed = True
    if changed:
        data["updated"] = date.today().isoformat()
        NEWS_FILE.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print("news.json updated")
    else:
        print("No changes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
