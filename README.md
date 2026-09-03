# Belonging Advisory Council — Website

An independent, student-run companion site for the Belonging Advisory Council (BAC) at the Robert H. Smith School of Business, University of Maryland. Built as static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html          Home page
about.html           Mission statement + the 4 task forces
members.html         2025-26 member roster
get-involved.html    How to join, application link, contact
assets/css/style.css Shared styling
assets/js/main.js    Mobile nav toggle
assets/img/          Put member headshots or a logo here
```

## Editing content

Every page is plain HTML — open any `.html` file in a text editor and change the text directly.

**To update the member list** (`members.html`): each member is one block that looks like this —

```html
<div class="member-card">
  <div class="avatar">CB</div>
  <div class="member-name">Calebta Badu</div>
  <div class="member-meta">Accounting &middot; Class of 2028</div>
</div>
```

Copy/paste a block to add a member, edit the initials/name/major/year to update one, or delete a block to remove one.

**To add a real photo** instead of the initials circle: drop the image in `assets/img/`, then replace `<div class="avatar">CB</div>` with `<img src="assets/img/yourfile.jpg" alt="Name" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">`.

## Previewing locally

No server needed — just double-click `index.html` to open it in a browser. Or, for a local server:

```bash
cd belonging-advisory-council
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Hosting on GitHub Pages

See the step-by-step walkthrough provided separately, or follow the short version:

1. Create a free account at [github.com/join](https://github.com/join).
2. Create a new repository (e.g. `belonging-advisory-council`), public, no README/gitignore/license.
3. From this folder: `git remote add origin <your-repo-url>` then `git push -u origin main`.
4. In the repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `/(root)`**.
5. Your site goes live at `https://<your-username>.github.io/belonging-advisory-council/`.
