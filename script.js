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
