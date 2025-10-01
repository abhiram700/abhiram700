(function () {
  "use strict";

  function applyStoredThemePreference() {
    try {
      var storedTheme = localStorage.getItem("theme-preference");
      if (storedTheme === "light" || storedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", storedTheme);
      }
    } catch (error) {}
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    var nextTheme = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme-preference", nextTheme);
    } catch (error) {}
    var icon = document.querySelector("#theme-toggle .theme-toggle__icon");
    if (icon) icon.textContent = nextTheme === "light" ? "🌙" : "☀️";
  }

  function renderProjects(projects) {
    var container = document.getElementById("projects-list");
    if (!container) return;
    if (!Array.isArray(projects)) {
      container.innerHTML = "<p>Could not load projects.</p>";
      return;
    }
    container.innerHTML = projects
      .map(function (p) {
        var techTags = Array.isArray(p.tech)
          ? p.tech.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("")
          : "";
        var links = ['<div class="links">'];
        if (p.link) links.push('<a href="' + p.link + '" target="_blank" rel="noopener noreferrer">Live</a>');
        if (p.repo) links.push('<a href="' + p.repo + '" target="_blank" rel="noopener noreferrer">Code</a>');
        links.push('</div>');
        return [
          '<article class="card" tabindex="0">',
          '<h3>' + (p.title || "Untitled Project") + '</h3>',
          '<p>' + (p.description || "") + '</p>',
          '<div class="tags">' + techTags + '</div>',
          links.join(""),
          '</article>'
        ].join("");
      })
      .join("");
  }

  function renderExperience(experiences) {
    var container = document.getElementById("experience-list");
    if (!container) return;
    if (!Array.isArray(experiences)) {
      container.innerHTML = "<p>Could not load experience.</p>";
      return;
    }
    container.innerHTML = experiences
      .map(function (e) {
        var timeframe = [e.start, e.end || "Present"].filter(Boolean).join(" — ");
        var bullets = Array.isArray(e.highlights)
          ? '<ul>' + e.highlights.map(function (h) { return '<li>' + h + '</li>'; }).join("") + '</ul>'
          : "";
        return [
          '<article class="item">',
          '<h3>' + (e.role || "Role") + ' · ' + (e.company || "Company") + '</h3>',
          '<p class="meta">' + timeframe + '</p>',
          '<p>' + (e.summary || "") + '</p>',
          bullets,
          '</article>'
        ].join("");
      })
      .join("");
  }

  function loadData() {
    // Ensure running from a server, not file:// to satisfy fetch
    var isFileProtocol = location.protocol === "file:";
    if (isFileProtocol) {
      console.warn("For local preview, serve via a local web server (not file://)");
    }

    fetch("./data/projects.json")
      .then(function (r) { return r.json(); })
      .then(renderProjects)
      .catch(function () { renderProjects([]); });

    fetch("./data/experience.json")
      .then(function (r) { return r.json(); })
      .then(renderExperience)
      .catch(function () { renderExperience([]); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStoredThemePreference();
    var toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) toggleButton.addEventListener("click", toggleTheme);
    loadData();
  });
})();

