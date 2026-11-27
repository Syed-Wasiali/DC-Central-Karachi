document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".floating-gov-logo")) {
    const badge = document.createElement("a");
    badge.className = "floating-gov-logo";
    badge.href = "https://www.sindh.gov.pk/";
    badge.target = "_blank";
    badge.rel = "noopener";
    badge.setAttribute("aria-label", "Government of Sindh website");
    badge.innerHTML = '<img src="images/sindh-govt-logo.png" alt="Government of Sindh logo">';
    document.body.appendChild(badge);
  }

  if (window.AOS) {
    AOS.init({
      duration: 750,
      once: true,
      offset: 80
    });
  }

  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("welcomeClose");
  const continueBtn = document.getElementById("continueBtn");
  const dontShowAgain = document.getElementById("dontShowAgain");

  function closeWelcome() {
    if (dontShowAgain.checked) {
      localStorage.setItem("dcPortalWelcomeHidden", "true");
    }
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modal && closeBtn && continueBtn && dontShowAgain) {
    if (localStorage.getItem("dcPortalWelcomeHidden") !== "true") {
      setTimeout(function () {
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
      }, 450);
    }

    closeBtn.addEventListener("click", closeWelcome);
    continueBtn.addEventListener("click", closeWelcome);
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeWelcome();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const dropdownItems = document.querySelectorAll(".sticky-nav .nav-item.dropdown");
  const desktopQuery = window.matchMedia("(min-width: 1200px)");

  function alignDropdown(menu) {
    if (!menu || !desktopQuery.matches) {
      return;
    }

    menu.removeAttribute("data-align");
    const rect = menu.getBoundingClientRect();
    const margin = 12;

    if (rect.left < margin) {
      menu.setAttribute("data-align", "left");
    } else if (rect.right > window.innerWidth - margin) {
      menu.setAttribute("data-align", "right");
    }
  }

  dropdownItems.forEach(function (item) {
    const toggle = item.querySelector("[data-bs-toggle='dropdown']");
    const menu = item.querySelector(".dropdown-menu");
    const dropdown = toggle && window.bootstrap ? bootstrap.Dropdown.getOrCreateInstance(toggle) : null;

    item.addEventListener("mouseenter", function () {
      if (!desktopQuery.matches || !dropdown) return;
      dropdown.show();
      requestAnimationFrame(function () {
        alignDropdown(menu);
      });
    });

    item.addEventListener("mouseleave", function () {
      if (!desktopQuery.matches || !dropdown) return;
      dropdown.hide();
      if (menu) menu.removeAttribute("data-align");
    });

    if (toggle) {
      toggle.addEventListener("shown.bs.dropdown", function () {
        alignDropdown(menu);
      });
    }
  });

  window.addEventListener("resize", function () {
    document.querySelectorAll(".sticky-nav .dropdown-menu.show").forEach(alignDropdown);
  });

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("show", window.scrollY > 520);
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const counters = document.querySelectorAll("[data-counter]");
  const counterObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.counter);
      const duration = 1200;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        element.textContent = Math.floor(progress * target).toString();
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = element.dataset.display || target.toString();
        }
      }

      requestAnimationFrame(update);
      observer.unobserve(element);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });
});

/* Photo lightbox and gallery filters */
document.addEventListener("click", function (event) {
  const filter = event.target.closest(".dc-photo-filters button");
  if (filter) {
    const wrap = filter.parentElement;
    wrap.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b === filter));
    const grid = wrap.nextElementSibling;
    grid.querySelectorAll(".dc-photo").forEach((tile) => {
      tile.classList.toggle("d-none", filter.dataset.filter !== "all" && tile.dataset.cat !== filter.dataset.filter);
    });
    return;
  }
  const tile = event.target.closest(".dc-photo");
  if (tile) {
    const tiles = [...tile.parentElement.querySelectorAll(".dc-photo:not(.d-none)")];
    let index = tiles.indexOf(tile);
    const box = document.createElement("div");
    box.className = "dc-lightbox";
    box.innerHTML = '<button class="dc-lb-close" aria-label="Close">&times;</button><button class="dc-lb-prev" aria-label="Previous">&#8249;</button><figure><img alt=""><figcaption></figcaption></figure><button class="dc-lb-next" aria-label="Next">&#8250;</button>';
    const show = () => { const img = tiles[index].querySelector("img"); box.querySelector("img").src = img.src; box.querySelector("img").alt = img.alt; box.querySelector("figcaption").textContent = img.alt; };
    show();
    document.body.appendChild(box);
    const close = () => { box.remove(); document.removeEventListener("keydown", keys); };
    const keys = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") { index = (index + 1) % tiles.length; show(); } if (e.key === "ArrowLeft") { index = (index - 1 + tiles.length) % tiles.length; show(); } };
    document.addEventListener("keydown", keys);
    box.addEventListener("click", (e) => {
      if (e.target.closest(".dc-lb-next")) { index = (index + 1) % tiles.length; show(); }
      else if (e.target.closest(".dc-lb-prev")) { index = (index - 1 + tiles.length) % tiles.length; show(); }
      else if (e.target === box || e.target.closest(".dc-lb-close")) close();
    });
  }
});

// Site-wide search and "coming soon" notices
(function () {
  const toast = (msg) => { const t = document.createElement("div"); t.className = "dc-toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); };
  document.addEventListener("submit", (e) => {
    const form = e.target.closest(".header-search");
    if (!form) return;
    e.preventDefault();
    const q = (form.querySelector("input").value || "").trim();
    location.href = "search.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".lang-soon")) { toast("Urdu and Sindhi versions of the website are coming soon."); return; }
    if (e.target.closest(".social-soon")) { toast("This account is coming soon. Follow us on Facebook for now."); return; }
    const btn = e.target.closest('.top-link[aria-label="Search"]');
    if (btn) { const inp = document.querySelector(".header-search input"); if (inp && inp.offsetParent) inp.focus(); else location.href = "search.html"; }
  });
})();

// Balance card grids: pick a column count that avoids lonely last rows (e.g. 3 + 3 instead of 4 + 2) and centre any short last row.
(function () {
  function bestCols(n, max) {
    if (n <= max) return max;
    if (n % max === 0) return max;
    var alt = max - 1;
    if (max >= 4 && n % alt === 0) return alt;
    if (max >= 4 && (n % alt) / alt > (n % max) / max) return alt;
    return max;
  }
  function balance() {
    if (window.innerWidth < 992) return;
    document.querySelectorAll(".card-grid, .service-grid, .download-grid").forEach(function (g) {
      if (g.dataset.balanced) return;
      var items = Array.prototype.filter.call(g.children, function (c) { return c.offsetParent !== null || c.style.display !== "none"; });
      var max = getComputedStyle(g).gridTemplateColumns.split(" ").length;
      var n = items.length; if (n < 2 || max < 2) return;
      var cols = Math.min(bestCols(n, max), n);
      g.dataset.balanced = "1"; g.classList.add("balanced-grid"); g.style.setProperty("--cols", cols);
    });
    document.querySelectorAll(".row").forEach(function (r) {
      if (r.dataset.balanced) return;
      var items = Array.prototype.filter.call(r.children, function (c) { return /\bcol-/.test(c.className) && c.querySelector("article, .card, .org-card, .dept-card, .initiative-card, .price-card, .content-card, a > article"); });
      if (items.length < 2 || items.length !== r.children.length) return;
      var span = 12;
      ["xl", "lg"].some(function (bp) { var m = items[0].className.match(new RegExp("col-" + bp + "-(\\d+)")); if (m) { span = +m[1]; return true; } return false; });
      if (span === 12) { var m = items[0].className.match(/col-md-(\d+)/); if (m) span = +m[1]; }
      var max = Math.round(12 / span); if (max < 2 || 12 % span) return;
      var n = items.length, cols = bestCols(n, max);
      if (12 % cols) cols = max;
      items.forEach(function (c) {
        c.className = c.className.replace(/\bcol-(lg|xl)-\d+\b/g, "").replace(/\s+/g, " ").trim() + " col-lg-" + (12 / cols);
        if (!/col-md-/.test(c.className) && cols > 1) c.className += " col-md-6";
      });
      r.classList.add("justify-content-center"); r.dataset.balanced = "1";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(balance, 0); }); else setTimeout(balance, 0);
  window.addEventListener("load", balance);
  window.DC_balanceGrids = balance;
})();

// Live Karachi time, weather and map in the top bar and footer
(function () {
  var TZ = "Asia/Karachi";
  var WX = { 0: ["Clear", "bi-sun"], 1: ["Mainly clear", "bi-sun"], 2: ["Partly cloudy", "bi-cloud-sun"], 3: ["Cloudy", "bi-clouds"], 45: ["Fog", "bi-cloud-fog"], 48: ["Fog", "bi-cloud-fog"], 51: ["Drizzle", "bi-cloud-drizzle"], 53: ["Drizzle", "bi-cloud-drizzle"], 55: ["Drizzle", "bi-cloud-drizzle"], 61: ["Light rain", "bi-cloud-rain"], 63: ["Rain", "bi-cloud-rain"], 65: ["Heavy rain", "bi-cloud-rain-heavy"], 80: ["Showers", "bi-cloud-rain"], 81: ["Showers", "bi-cloud-rain"], 82: ["Heavy showers", "bi-cloud-rain-heavy"], 95: ["Thunderstorm", "bi-cloud-lightning-rain"], 96: ["Thunderstorm", "bi-cloud-lightning-rain"], 99: ["Thunderstorm", "bi-cloud-lightning-rain"] };
  function timeStr() { return new Date().toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: true }); }
  function dateStr() { return new Date().toLocaleDateString("en-GB", { timeZone: TZ, weekday: "long", day: "numeric", month: "long", year: "numeric" }); }
  function tick() { document.querySelectorAll("[data-live-time]").forEach(function (e) { e.textContent = timeStr(); }); document.querySelectorAll("[data-live-date]").forEach(function (e) { e.textContent = dateStr(); }); }
  function showWeather(w) {
    var c = WX[w.weather_code] || ["", "bi-cloud-sun"], t = Math.round(w.temperature_2m);
    document.querySelectorAll("[data-live-weather]").forEach(function (e) { e.innerHTML = '<i class="bi ' + c[1] + '"></i> Karachi ' + t + "°C"; e.title = c[0]; });
    document.querySelectorAll("[data-live-weather-full]").forEach(function (e) { e.innerHTML = '<i class="bi ' + c[1] + ' wx-icon"></i><div><strong>' + t + '°C</strong> <span>' + c[0] + '</span><small>Humidity ' + w.relative_humidity_2m + '% · Wind ' + Math.round(w.wind_speed_10m) + ' km/h</small></div>'; });
  }
  function loadWeather() {
    try { var c = JSON.parse(sessionStorage.getItem("dcWx") || "null"); if (c && Date.now() - c.at < 15 * 60 * 1000) return showWeather(c.w); } catch (e) {}
    fetch("https://api.open-meteo.com/v1/forecast?latitude=24.93&longitude=67.06&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia%2FKarachi")
      .then(function (r) { return r.json(); }).then(function (j) { if (!j.current) return; showWeather(j.current); try { sessionStorage.setItem("dcWx", JSON.stringify({ at: Date.now(), w: j.current })); } catch (e) {} }).catch(function () {});
  }
  function inject() {
    var bar = document.querySelector(".top-gov-bar");
    if (bar && !bar.querySelector("[data-live-time]")) {
      var clock = [].slice.call(bar.querySelectorAll("span")).find(function (s) { return /Mon-Fri/.test(s.textContent); });
      var html = '<span class="live-chip"><i class="bi bi-clock-history"></i> <span data-live-time></span> PKT</span><span class="live-chip" data-live-weather><i class="bi bi-cloud-sun"></i> Karachi</span>';
      if (clock) clock.insertAdjacentHTML("beforebegin", html); else bar.querySelector(".d-flex:last-child, .container-fluid") && bar.querySelector(".d-flex:last-child").insertAdjacentHTML("afterbegin", html);
    }
    var fb = document.querySelector(".site-footer .footer-bottom");
    if (fb && !document.querySelector(".footer-live")) {
      fb.insertAdjacentHTML("beforebegin", '<div class="footer-live"><div class="footer-live-info"><div class="fl-block"><span class="fl-label">Karachi time</span><strong class="fl-time" data-live-time></strong><span data-live-date></span></div><div class="fl-block"><span class="fl-label">Weather now</span><div class="fl-weather" data-live-weather-full><i class="bi bi-cloud-sun wx-icon"></i><div><strong>Karachi</strong></div></div></div><div class="fl-block"><span class="fl-label">DC Office</span><span>Sector 15-A/1, Buffer Zone, Karachi</span><span>Mon–Fri, 9:00 AM – 5:00 PM</span><a href="https://www.google.com/maps/dir/?api=1&destination=Deputy+Commissioner+Office+District+Central+Buffer+Zone+Karachi" target="_blank" rel="noopener"><i class="bi bi-sign-turn-right"></i> Get directions</a></div></div><div class="footer-map"><iframe src="https://www.google.com/maps?q=Deputy+Commissioner+Office+District+Central+Buffer+Zone+Karachi&z=13&output=embed" title="Map of the DC Office, District Central" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>');
    }
    tick(); loadWeather();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(inject, 0); }); else setTimeout(inject, 0);
  setInterval(tick, 15000);
})();

// Inner page banners: a real District Central photo for each type of page
(function () {
  var P = "images/gallery/";
  var groups = [
    [/^(citizen-services|domicile|prc|noc|arms-license|revenue-certificate|land-revenue|complaint-registration|track-complaint|downloads|public-assistance|price-list)$/, "dc-a1.jpg", "center 35%"],
    [/^(directory|academic-institutions|libraries|health|sports|parks|entertainment|emergency-safety|monsoon|markets-commerce|union-committees|uc-.*|personalities)$/, "gallery-10.jpg", "center 40%"],
    [/^(initiatives|news|residents-associations|blue-plaques|css-corner)$/, "dc-12.jpg", "center 40%"]
  ];
  function apply() {
    var bg = document.querySelector(".page-hero .hero-bg");
    if (!bg) return;
    var page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
    if (/^(branches|.*-branch|revenue|it-cell|complaint-cell|control-room|public-relations|benevolent-fund)$/.test(page)) return; // branch pages keep the plain green banner
    var pick = ["dc-09.jpg", "center 45%"];
    groups.some(function (g) { if (g[0].test(page)) { pick = [g[1], g[2]]; return true; } return false; });
    bg.classList.add("hero-photo");
    bg.style.backgroundImage = 'url("' + P + pick[0] + '")';
    bg.style.backgroundPosition = pick[1];
    var hero = bg.closest(".page-hero"); if (hero) hero.classList.add("has-photo");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(apply, 0); }); else setTimeout(apply, 0);
})();
