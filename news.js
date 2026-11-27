/* Shows news from news.json (refreshed automatically from the Commissioner Karachi
   and Government of Sindh websites) on the News page and the home page. */
(function () {
  function esc(text) {
    return String(text || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function card(item, source, colClass) {
    const year = (item.date.match(/\d{4}/) || [""])[0];
    const image = item.image
      ? `<img src="${esc(item.image)}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'bi bi-newspaper'}))">`
      : `<i class="bi bi-newspaper"></i>`;
    return `<div class="${colClass} news-entry" data-title="${esc(item.title.toLowerCase())}" data-category="${esc(source)}" data-year="${year}">
      <article class="news-card h-100"><div class="news-img placeholder-image">${image}</div>
      <div><span class="section-kicker">${esc(source)}</span>${item.date ? `<time>${esc(item.date)}</time>` : ""}
      <h3>${esc(item.title)}</h3><a href="${esc(item.link)}" target="_blank" rel="noopener">Read on ${esc(source)} <i class="bi bi-box-arrow-up-right"></i></a></div></article></div>`;
  }

  function fill(id, items, source, colClass) {
    const box = document.getElementById(id);
    if (!box) return;
    box.innerHTML = items.length
      ? items.map((item) => card(item, source, colClass)).join("")
      : `<p class="text-center text-muted">News will appear here shortly.</p>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("ckNews") && !document.getElementById("sindhNews") && !document.getElementById("homeNews")) return;
    fetch("news.json", { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const ck = data.commissioner.items || [];
        const sindh = data.sindh.items || [];
        fill("ckNews", ck, data.commissioner.source, "col-md-6 col-lg-4");
        fill("sindhNews", sindh, data.sindh.source, "col-md-6 col-lg-4");
        const home = ck.slice(0, 2).map((i) => [i, data.commissioner.source]).concat(sindh.slice(0, 1).map((i) => [i, data.sindh.source]));
        const homeBox = document.getElementById("homeNews");
        if (homeBox) homeBox.innerHTML = home.map(([i, s]) => card(i, s, "col-md-4")).join("");
        const stamp = document.getElementById("newsUpdated");
        if (stamp && data.updated) stamp.textContent = `Last updated: ${new Date(data.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`;
      })
      .catch(function () {
        ["ckNews", "sindhNews", "homeNews"].forEach(function (id) {
          const box = document.getElementById(id);
          if (box) box.innerHTML = `<p class="text-center text-muted">News could not be loaded. Please refresh the page.</p>`;
        });
      });
  });
})();
