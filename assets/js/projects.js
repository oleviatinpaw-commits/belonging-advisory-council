/* Renders the Projects & Impact page from data.js with task-force filtering. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = Object.fromEntries(MEMBERS.map((m) => [m.id, m]));

  const grid = document.getElementById("projects-grid");
  const filters = document.getElementById("project-filters");
  const countEl = document.getElementById("project-count");

  function statusClass(s) {
    return "status-pill status-" + s.toLowerCase().replace(/\s+/g, "-");
  }

  function teamHTML(ids) {
    return `<div class="team">
      <div class="team-avatars">${ids.map((id) => {
        const m = byId[id]; if (!m) return "";
        return `<a class="team-avatar" href="members.html#${esc(id)}" title="${esc(m.name)}">${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}">` : esc(m.initials)}</a>`;
      }).join("")}</div>
      <span class="team-names">${ids.map((id) => byId[id] ? `<a href="members.html#${esc(id)}">${esc(byId[id].name)}</a>` : "").filter(Boolean).join(", ")}</span>
    </div>`;
  }

  function cardHTML(p) {
    const tf = TASK_FORCES[p.taskForce];
    return `
      <article class="proj-card" id="${esc(p.id)}" data-tf="${esc(p.taskForce)}">
        <div class="proj-thumb">
          <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
            <rect x="4" y="8" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M12 30 L20 22 L26 27 L36 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 36 V42 M16 42 H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>${p.deck ? "View presentation" : "Presentation coming soon"}</span>
          ${p.sample ? `<span class="sample-badge">Sample</span>` : ""}
        </div>
        <div class="proj-body">
          <div class="proj-topline">
            <span class="member-tag">${esc(tf.short)}</span>
            <span class="${statusClass(p.status)}">${esc(p.status)}</span>
          </div>
          <h3>${esc(p.title)}</h3>
          <div class="proj-term">${esc(p.term)}</div>
          <p>${esc(p.summary)}</p>
          ${p.impact ? `<div class="proj-impact">${esc(p.impact)}</div>` : ""}
          ${teamHTML(p.team)}
          ${p.deck ? `<a class="btn btn-secondary proj-deck" href="${esc(p.deck)}" target="_blank" rel="noopener">Open presentation &rarr;</a>` : ""}
        </div>
      </article>`;
  }

  /* Order: In progress, Planned, Completed — most current work first */
  const order = { "In progress": 0, "Planned": 1, "Completed": 2 };
  const sorted = [...PROJECTS].sort((a, b) => order[a.status] - order[b.status]);
  grid.innerHTML = sorted.map(cardHTML).join("");

  /* Filters */
  const chips = [["all", "All projects"], ...Object.entries(TASK_FORCES).map(([k, v]) => [k, v.short])];
  filters.innerHTML = chips.map(([k, label]) =>
    `<button class="chip${k === "all" ? " active" : ""}" data-tf="${k}">${esc(label)}</button>`).join("");

  function applyFilter(tf) {
    let n = 0;
    grid.querySelectorAll(".proj-card").forEach((card) => {
      const show = tf === "all" || card.dataset.tf === tf;
      card.hidden = !show;
      if (show) n++;
    });
    filters.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.tf === tf));
    countEl.textContent = `${n} project${n === 1 ? "" : "s"}`;
  }

  filters.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) applyFilter(chip.dataset.tf);
  });

  applyFilter("all");

  /* Deep link: projects.html#project-id highlights that card */
  const hash = location.hash.replace("#", "");
  if (hash) {
    const target = document.getElementById(hash);
    if (target) {
      target.classList.add("proj-card--highlight");
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
    }
  }
})();
