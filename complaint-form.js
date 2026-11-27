(function () {
  const API = (window.DC_COMPLAINT_API || "").replace(/\/$/, "");
  const CATS = window.DC_COMPLAINT_CATS || [];
  const SUBS = window.DC_COMPLAINT_SUBDIVISIONS || ["Gulberg", "Liaquatabad", "Nazimabad", "New Karachi", "North Nazimabad", "Not sure"];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const OFFLINE = `<div class="cf-offline"><i class="bi bi-info-circle"></i><div><strong>Online submission opens soon.</strong> Until then, please register your complaint by phone on <a href="tel:02199260049">(021) 99260049</a>, the Commissioner's Control Room on <a href="tel:1299">1299</a>, or in person at the Complaint Cell, DC Office, Sector 15-A/1, Buffer Zone.</div></div>`;

  function classify(text) {
    const t = " " + text.toLowerCase() + " "; let best = null, bestScore = 0;
    for (const c of CATS) { let s = 0; for (const w of c.kw) { const k = w.toLowerCase(); if (!k) continue; const n = t.split(k).length - 1; if (n) s += n * (k.length > 6 ? 2 : 1); } if (s > bestScore) { best = c; bestScore = s; } }
    return bestScore >= 2 && best && best.key !== "other" ? best : null;
  }
  function ucOptions(sub) {
    const town = (window.DC_DIR?.towns || []).find((t) => t.name === sub);
    return `<option value="">${town ? "Choose your UC (optional)" : "—"}</option>` + (town ? town.ucs.map((u) => `<option>UC-${u[0]} ${esc(u[1])}</option>`).join("") : "");
  }

  window.complaintFormSection = function () {
    return `<section class="section" id="complaint-form"><div class="container"><div class="section-heading"><span class="section-kicker">Register Online</span><h2>Submit Your Complaint</h2><p>Fill in the form below. You will get a reference number straight away, and the Complaint Cell will contact you. Fields marked * are required.</p></div>
    <form class="cf" novalidate>
      <div class="cf-step"><h3><span>1</span> What is the complaint about? *</h3>
        <div class="cf-cats">${CATS.map((c) => `<label class="cf-cat"><input type="radio" name="category" value="${c.key}"><span><i class="bi ${c.icon}"></i>${esc(c.label)}</span></label>`).join("")}</div>
        <div class="cf-err" data-err="category"></div></div>
      <div class="cf-step"><h3><span>2</span> Describe the problem</h3>
        <div class="row g-3"><div class="col-12"><label class="form-label">Subject</label><input class="form-control" name="title" maxlength="160" placeholder="e.g. Garbage not collected for a week"></div>
        <div class="col-12"><label class="form-label">Details *</label><textarea class="form-control" name="description" rows="5" maxlength="5000" placeholder="What is the problem, where exactly, since when, and who is involved? You can write in English or Urdu."></textarea><div class="cf-suggest" hidden></div><div class="cf-err" data-err="description"></div></div>
        <div class="col-md-6"><label class="form-label">Sub-division *</label><select class="form-select" name="subdivision"><option value="">Choose…</option>${SUBS.map((s) => `<option>${s}</option>`).join("")}</select><div class="cf-err" data-err="subdivision"></div></div>
        <div class="col-md-6"><label class="form-label">Union Committee</label><select class="form-select" name="uc"><option value="">—</option></select></div>
        <div class="col-12"><label class="form-label">Location / address *</label><input class="form-control" name="address" maxlength="300" placeholder="Street, block, sector and a nearby landmark"><div class="cf-err" data-err="address"></div></div>
        <div class="col-12"><label class="form-label">Photos or documents (up to 3, 5 MB each)</label><input class="form-control" type="file" name="photos[]" accept="image/jpeg,image/png,image/webp,application/pdf" multiple><div class="cf-err" data-err="photos"></div></div></div></div>
      <div class="cf-step"><h3><span>3</span> Your details</h3>
        <div class="row g-3"><div class="col-md-6"><label class="form-label">Full name *</label><input class="form-control" name="name" maxlength="120" autocomplete="name"><div class="cf-err" data-err="name"></div></div>
        <div class="col-md-6"><label class="form-label">Mobile number *</label><input class="form-control" name="phone" inputmode="tel" maxlength="14" placeholder="03XXXXXXXXX" autocomplete="tel"><div class="cf-err" data-err="phone"></div></div>
        <div class="col-md-6"><label class="form-label">Email</label><input class="form-control" type="email" name="email" maxlength="190" placeholder="To receive updates by email" autocomplete="email"><div class="cf-err" data-err="email"></div></div>
        <div class="col-md-6"><label class="form-label">CNIC</label><input class="form-control" name="cnic" maxlength="15" placeholder="42101-1234567-1"><div class="cf-err" data-err="cnic"></div></div>
        <div class="col-12"><label class="form-label d-block">How should we contact you?</label>${[["call", "Phone call"], ["whatsapp", "WhatsApp"], ["sms", "SMS"], ["email", "Email"]].map(([v, l], i) => `<label class="cf-pill"><input type="radio" name="contact_pref" value="${v}"${i ? "" : " checked"}> ${l}</label>`).join("")}</div>
        <div class="col-12"><label class="cf-consent"><input type="checkbox" name="consent" value="1"> I confirm the information is true. I understand that false complaints may lead to action under the law, and that my details will be shared only with the office handling the complaint.</label><div class="cf-err" data-err="consent"></div></div></div></div>
      <input type="text" name="website" tabindex="-1" autocomplete="off" class="cf-hp" aria-hidden="true">
      <div class="cf-msg"></div>
      <button class="btn btn-primary-gradient btn-lg" type="submit"><i class="bi bi-send"></i> Submit Complaint</button>
    </form></div></section>`;
  };

  window.trackFormSection = function () {
    return `<section class="section" id="track-online"><div class="container"><div class="section-heading"><span class="section-kicker">Track Online</span><h2>Check Your Complaint Status</h2><p>Enter the reference number you received (for example DCC-26-00012) and the mobile number you gave.</p></div>
    <div class="row justify-content-center"><div class="col-lg-8"><form class="cf tf" novalidate><div class="row g-3 align-items-end"><div class="col-md-5"><label class="form-label">Reference number</label><input class="form-control" name="ref" placeholder="DCC-26-00012"></div><div class="col-md-4"><label class="form-label">Mobile number</label><input class="form-control" name="phone" inputmode="tel" placeholder="03XXXXXXXXX"></div><div class="col-md-3"><button class="btn btn-primary-gradient w-100" type="submit"><i class="bi bi-search"></i> Track</button></div></div><div class="cf-msg"></div><div class="tf-result"></div></form></div></div></div></section>`;
  };

  const fmt = (d) => { const x = new Date(String(d).replace(" ", "T")); return isNaN(x) ? d : x.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }); };

  function initComplaint(form) {
    const sub = form.subdivision, uc = form.uc, desc = form.description, sug = form.querySelector(".cf-suggest"), msg = form.querySelector(".cf-msg");
    sub.addEventListener("change", () => (uc.innerHTML = ucOptions(sub.value)));
    const clearErr = (e) => { const n = (e.target.name || "").replace("[]", ""); const el = form.querySelector(`[data-err="${n === "photos" ? "photos" : n}"]`); if (el) el.textContent = ""; if (!form.querySelector(".cf-err:not(:empty)")) msg.innerHTML = ""; };
    form.addEventListener("input", clearErr); form.addEventListener("change", clearErr);
    const suggest = () => {
      const c = classify((form.title.value || "") + " " + desc.value); const chosen = form.querySelector('input[name="category"]:checked');
      if (c && (!chosen || chosen.value !== c.key)) { sug.hidden = false; sug.innerHTML = `<i class="bi bi-lightbulb"></i> This sounds like <strong>${esc(c.label)}</strong>. <button type="button" class="btn btn-sm btn-outline-primary">Use this category</button>`; sug.querySelector("button").onclick = () => { form.querySelector(`input[name="category"][value="${c.key}"]`).checked = true; sug.hidden = true; }; }
      else sug.hidden = true;
    };
    desc.addEventListener("input", suggest); form.title.addEventListener("input", suggest); form.addEventListener("change", (e) => e.target.name === "category" && suggest());
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); form.querySelectorAll(".cf-err").forEach((x) => (x.textContent = "")); msg.innerHTML = "";
      if (!API) { msg.innerHTML = OFFLINE; return; }
      const btn = form.querySelector('button[type="submit"]'); btn.disabled = true; btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Sending…';
      try {
        const r = await fetch(API + "/api/submit.php", { method: "POST", body: new FormData(form) }); const j = await r.json();
        if (j.ok) {
          form.outerHTML = `<div class="cf-done"><i class="bi bi-check-circle-fill"></i><h3>Complaint registered</h3><p>Your reference number is</p><div class="cf-ref">${esc(j.ref)}</div><p>Category: <strong>${esc(j.category)}</strong><br>It will be routed to: ${esc(j.office)}</p><p>Please note your reference number. The Complaint Cell aims to respond within 48 working hours${form.email.value ? ", and a copy has been sent to your email" : ""}.</p><a class="btn btn-outline-primary" href="track-complaint.html?ref=${encodeURIComponent(j.ref)}">Track this complaint</a></div>`;
          document.getElementById("complaint-form").scrollIntoView({ behavior: "smooth" }); return;
        }
        if (j.errors) { for (const [k, v] of Object.entries(j.errors)) { const el = form.querySelector(`[data-err="${k}"]`); if (el) el.textContent = v; } msg.innerHTML = '<div class="cf-alert">Please correct the highlighted fields.</div>'; form.querySelector(".cf-err:not(:empty)")?.closest(".cf-step")?.scrollIntoView({ behavior: "smooth" }); }
        else msg.innerHTML = `<div class="cf-alert">${esc(j.error || "Something went wrong.")}</div>`;
      } catch (err) { msg.innerHTML = '<div class="cf-alert">Could not reach the complaint system. Please try again, or call (021) 99260049.</div>'; }
      btn.disabled = false; btn.innerHTML = '<i class="bi bi-send"></i> Submit Complaint';
    });
  }

  function initTrack(form) {
    const msg = form.querySelector(".cf-msg"), out = form.querySelector(".tf-result");
    const pre = new URLSearchParams(location.search).get("ref"); if (pre) form.ref.value = pre;
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); msg.innerHTML = ""; out.innerHTML = "";
      if (!API) { msg.innerHTML = OFFLINE.replace("Online submission", "Online tracking").replace("register your complaint", "follow up"); return; }
      try {
        const r = await fetch(`${API}/api/track.php?ref=${encodeURIComponent(form.ref.value.trim())}&phone=${encodeURIComponent(form.phone.value.trim())}`); const j = await r.json();
        if (!j.ok) { msg.innerHTML = `<div class="cf-alert">${esc(j.error)}</div>`; return; }
        out.innerHTML = `<div class="tf-card"><div class="tf-head"><div><span>Reference</span><strong>${esc(j.ref)}</strong></div><span class="tf-status tf-${esc(j.status_key)}">${esc(j.status)}</span></div><dl><dt>Category</dt><dd>${esc(j.category)}</dd><dt>Sub-division</dt><dd>${esc(j.subdivision)}</dd><dt>Handled by</dt><dd>${esc(j.office)}</dd><dt>Registered</dt><dd>${esc(fmt(j.submitted))}</dd><dt>Last update</dt><dd>${esc(fmt(j.updated))}</dd></dl><h4>Updates</h4><ul class="tf-updates">${j.updates.map((u) => `<li><span>${esc(fmt(u.date))}</span>${esc(u.text)}</li>`).join("")}</ul></div>`;
      } catch (err) { msg.innerHTML = '<div class="cf-alert">Could not reach the complaint system. Please try again later.</div>'; }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { document.querySelectorAll("form.cf:not(.tf)").forEach(initComplaint); document.querySelectorAll("form.tf").forEach(initTrack); }, 0);
  });
})();
