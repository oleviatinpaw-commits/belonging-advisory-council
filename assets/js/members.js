/* Renders the Members page from data.js and powers the profile modal. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const byId = Object.fromEntries(MEMBERS.map((m) => [m.id, m]));
  const projectsFor = (id) => PROJECTS.filter((p) => p.team.includes(id));

  /* ---------- Cards ---------- */

  function avatarHTML(m, size) {
    const cls = size === "lg" ? "avatar avatar-lg" : "avatar";
    if (m.photo) return `<img class="${cls}" src="${esc(m.photo)}" alt="${esc(m.name)}">`;
    return `<div class="${cls}" aria-hidden="true">${esc(m.initials)}</div>`;
  }

  function cardHTML(m) {
    const tf = TASK_FORCES[m.taskForce];
    const count = projectsFor(m.id).length;
    return `
      <button class="member-card${m.leader ? " member-card--leader" : ""}" data-id="${esc(m.id)}" aria-haspopup="dialog">
        ${m.leader ? `<span class="badge-leader">Task Force Leader</span>` : ""}
        ${avatarHTML(m)}
        <div class="member-name">${esc(m.name)}</div>
        <div class="member-meta">${esc(m.major)} &middot; Class of ${m.year}</div>
        <span class="member-tag">${esc(tf.short)}</span>
        <span class="member-more">${count} project${count === 1 ? "" : "s"} &middot; View profile &rarr;</span>
      </button>`;
  }

  const leadersGrid = document.getElementById("leaders-grid");
  const membersGrid = document.getElementById("members-grid");
  leadersGrid.innerHTML = MEMBERS.filter((m) => m.leader).map(cardHTML).join("");
  membersGrid.innerHTML = MEMBERS.filter((m) => !m.leader).map(cardHTML).join("");

  /* ---------- Modal ---------- */

  const backdrop = document.getElementById("member-modal");
  const panel = backdrop.querySelector(".modal");
  let lastFocus = null;

  function statusClass(s) {
    return "status-pill status-" + s.toLowerCase().replace(/\s+/g, "-");
  }

  function openModal(id) {
    const m = byId[id];
    if (!m) return;
    const tf = TASK_FORCES[m.taskForce];
    const projects = projectsFor(id);

    panel.innerHTML = `
      <button class="modal-close" aria-label="Close profile">&times;</button>
      <div class="modal-header">
        ${avatarHTML(m, "lg")}
        <div>
          ${m.leader ? `<span class="badge-leader">Task Force Leader</span>` : ""}
          <h2 id="modal-title">${esc(m.name)}</h2>
          <div class="member-meta">${esc(m.major)} &middot; Class of ${m.year}</div>
          <div class="modal-role">${esc(m.role)}</div>
        </div>
      </div>
      <p class="modal-bio">${esc(m.bio)}</p>
      ${m.placeholder ? `<p class="modal-placeholder">Placeholder bio &mdash; pending member review.</p>` : ""}
      <h3 class="modal-section">Projects <span class="modal-count">${projects.length}</span></h3>
      ${projects.length ? `<ul class="proj-list">${projects.map((p) => `
        <li>
          <a href="projects.html#${esc(p.id)}">
            <span class="proj-list-title">${esc(p.title)}</span>
            <span class="proj-list-meta">${esc(TASK_FORCES[p.taskForce].short)} &middot; ${esc(p.term)}</span>
          </a>
          <span class="${statusClass(p.status)}">${esc(p.status)}</span>
        </li>`).join("")}</ul>`
        : `<p class="member-meta">No projects listed yet.</p>`}
      <a class="btn btn-secondary modal-all" href="projects.html">See all projects &rarr;</a>`;

    lastFocus = document.activeElement;
    backdrop.hidden = false;
    document.body.classList.add("modal-open");
    panel.querySelector(".modal-close").focus();
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.classList.remove("modal-open");
    if (history.replaceState) history.replaceState(null, "", location.pathname);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".member-card");
    if (card) { openModal(card.dataset.id); return; }
    if (e.target.closest(".modal-close") || e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  /* Deep link: members.html#member-id opens that profile */
  const hash = location.hash.replace("#", "");
  if (hash && byId[hash]) openModal(hash);
})();
