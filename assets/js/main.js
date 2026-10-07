document.addEventListener("DOMContentLoaded", () => {
  // ---------- Mobile nav ----------
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // ---------- Hide broken avatar photos so initials show ----------
  document.querySelectorAll(".avatar img").forEach((img) => {
    const hide = () => { img.style.display = "none"; };
    img.addEventListener("error", hide);
    // If it already failed before this script ran:
    if (img.complete && img.naturalWidth === 0) hide();
  });

  // ---------- Member modal ----------
  const modal = document.getElementById("member-modal");
  if (!modal) return;

  const elName = document.getElementById("modal-name");
  const elTf = document.getElementById("modal-tf");
  const elBio = document.getElementById("modal-bio");
  const elInitials = document.getElementById("modal-initials");
  const elImg = document.getElementById("modal-img");

  elImg.addEventListener("error", () => { elImg.style.display = "none"; });

  function openModal(card) {
    const d = card.dataset;
    elName.textContent = d.name || "";
    elTf.textContent = d.tf || "";
    elBio.textContent = d.bio && d.bio.trim()
      ? d.bio
      : "A full profile for this member is coming soon.";
    elInitials.textContent = d.initials || "";

    const photoSrc = card.querySelector(".avatar img")?.getAttribute("src") || "";
    if (photoSrc) {
      elImg.style.display = "";
      elImg.src = photoSrc;
      elImg.alt = d.name || "";
    } else {
      elImg.style.display = "none";
      elImg.removeAttribute("src");
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".member-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card));
  });

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
});
