(function () {
  "use strict";

  var C = window.CONTENT;
  var TRACK_LABELS = { build: "Build", assure: "Assure", lead: "Lead" };

  // Small DOM helper: el("p", { class: "x" }, "text" | Node | [children])
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    [].concat(children == null ? [] : children).forEach(function (c) {
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function renderExperience() {
    var list = document.getElementById("experience-list");
    C.experience.forEach(function (job) {
      var tags = el("ul", { class: "tags", "aria-label": "Pillars" }, job.tracks.map(function (t) {
        return el("li", { class: "tag", "data-track": t }, TRACK_LABELS[t]);
      }));
      var org = el("p", { class: "job-org" }, job.org);
      if (job.orgNote) org.appendChild(el("span", { class: "job-org-note" }, " · " + job.orgNote));

      list.appendChild(el("li", { class: "job", "data-tracks": job.tracks.join(" ") }, [
        el("div", { class: "job-head" }, [
          el("div", {}, [el("h3", { class: "job-role" }, job.role), org]),
          el("p", { class: "job-dates" }, job.dates + " · " + job.location)
        ]),
        tags,
        el("ul", { class: "job-points" }, job.highlights.map(function (h) { return el("li", {}, h); }))
      ]));
    });
  }

  function renderCases() {
    var wrap = document.getElementById("case-list");
    C.caseStudies.forEach(function (cs) {
      var body = el("dl", { class: "par" }, [
        el("dt", {}, "Problem"), el("dd", {}, cs.problem),
        el("dt", {}, "Action"), el("dd", {}, cs.action),
        el("dt", {}, "Result"), el("dd", {}, cs.result)
      ]);
      var inner = el("div", { class: "case-body" }, [body]);
      if (cs.link) inner.appendChild(el("a", { class: "case-link", href: cs.link.href, rel: "noopener" }, cs.link.label + " →"));

      wrap.appendChild(el("details", { class: "case" }, [
        el("summary", {}, [
          el("span", { class: "case-metric" }, cs.metric),
          el("span", { class: "case-title" }, cs.title),
          el("span", { class: "case-context" }, cs.context)
        ]),
        inner
      ]));
    });
  }

  function renderResearch() {
    var r = C.research;
    var wrap = document.getElementById("research-card");
    var email = "suliman.a.othman@gmail.com";
    var subject = encodeURIComponent(r.requestSubject);
    var body = encodeURIComponent("Hi Suliman,\n\nI'd like to read your MBA research paper.\n\nName:\nOrganization:\nPurpose:\n");
    var mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    // mailto: does nothing on devices without a configured mail app, so offer webmail and copy as fallbacks.
    var gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + subject + "&body=" + body;
    var outlook = "https://outlook.live.com/mail/0/deeplink/compose?to=" + email + "&subject=" + subject + "&body=" + body;

    function block(heading, body) {
      return el("div", { class: "research-block" }, [el("h4", {}, heading), body]);
    }
    function list(items) {
      return el("ul", {}, items.map(function (i) { return el("li", {}, i); }));
    }

    wrap.appendChild(el("p", { class: "research-eyebrow" }, r.eyebrow));
    wrap.appendChild(el("h3", { class: "research-title" }, r.title));
    wrap.appendChild(el("p", { class: "research-meta" }, r.supervisor + " · " + r.motivation));
    wrap.appendChild(el("ul", { class: "research-stats" }, r.stats.map(function (s) {
      return el("li", {}, [el("span", { class: "stat-value" }, s.value), el("span", { class: "stat-label" }, s.label)]);
    })));
    wrap.appendChild(el("div", { class: "research-grid" }, [
      block("Question", el("p", {}, r.question)),
      block("Method", el("p", {}, r.method)),
      block("Findings", list(r.findings)),
      block("Recommendations", list(r.recommendations))
    ]));
    wrap.appendChild(el("p", { class: "research-takeaway" }, r.takeaway));
    var requestBtn = el("a", { class: "btn btn-solid", href: mailto }, "Request the full paper");
    var copyBtn = el("button", { type: "button", class: "btn btn-ghost" }, "Copy email address");
    var status = el("span", { class: "copy-status", role: "status" });
    var fallback = el("div", { class: "request-fallback", id: "request-fallback" }, [
      el("p", {}, "No email app opened? Send the request another way:"),
      el("div", { class: "request-options" }, [
        el("a", { class: "btn btn-ghost", href: gmail, target: "_blank", rel: "noopener" }, "Open in Gmail"),
        el("a", { class: "btn btn-ghost", href: outlook, target: "_blank", rel: "noopener" }, "Open in Outlook"),
        copyBtn,
        status
      ])
    ]);
    fallback.hidden = true;

    requestBtn.addEventListener("click", function () { fallback.hidden = false; });
    copyBtn.addEventListener("click", function () {
      function done() { status.textContent = "Copied ✓"; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { status.textContent = email; });
      } else {
        status.textContent = email;
      }
    });

    wrap.appendChild(el("div", { class: "research-request" }, [
      requestBtn,
      el("p", { class: "muted" }, "The full 42-page paper is shared on request.")
    ]));
    wrap.appendChild(fallback);
  }

  function renderSkills() {
    var wrap = document.getElementById("skill-list");
    C.skills.forEach(function (g) {
      wrap.appendChild(el("div", { class: "skill-group", "data-track": g.track }, [
        el("h3", {}, g.group),
        el("ul", { class: "skill-items" }, g.items.map(function (s) { return el("li", {}, s); }))
      ]));
    });

    var certs = document.getElementById("cert-list");
    C.certifications.forEach(function (c) { certs.appendChild(el("li", {}, c.name)); });

    var edu = document.getElementById("edu-list");
    C.education.forEach(function (e) {
      var item = el("li", {}, [
        el("strong", {}, e.degree),
        el("span", { class: "muted" }, e.school + " · " + e.dates)
      ]);
      if (e.link) item.appendChild(el("a", { class: "edu-link", href: e.link.href }, e.link.label + " →"));
      edu.appendChild(item);
    });

    var langs = document.getElementById("lang-list");
    C.languages.forEach(function (l) { langs.appendChild(el("li", {}, l)); });
  }

  function setupFilters() {
    var chips = document.querySelectorAll(".filters .chip");
    var jobs = document.querySelectorAll("#experience-list .job");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        jobs.forEach(function (j) {
          j.hidden = f !== "all" && j.getAttribute("data-tracks").split(" ").indexOf(f) === -1;
        });
      });
    });
  }

  function setupTheme() {
    var root = document.documentElement;
    var btn = document.querySelector(".theme-toggle");
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    function isDark() {
      var t = root.getAttribute("data-theme");
      return t ? t === "dark" : mq.matches;
    }
    function sync() { btn.setAttribute("aria-pressed", String(isDark())); }
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
    mq.addEventListener && mq.addEventListener("change", sync);
    sync();
  }

  function setupNavHighlight() {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll(".nav-list a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !links[e.target.id]) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        links[e.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }

  // Print every case study and every job, regardless of on-screen state.
  function setupPrint() {
    var opened = [];
    window.addEventListener("beforeprint", function () {
      document.querySelectorAll("details.case:not([open])").forEach(function (d) { d.open = true; opened.push(d); });
    });
    window.addEventListener("afterprint", function () {
      opened.forEach(function (d) { d.open = false; });
      opened = [];
    });
  }

  renderExperience();
  renderCases();
  renderResearch();
  renderSkills();
  setupFilters();
  setupTheme();
  setupNavHighlight();
  setupPrint();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
