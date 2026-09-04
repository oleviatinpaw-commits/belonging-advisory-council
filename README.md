# Belonging Advisory Council — Website

An independent, student-run companion site for the Belonging Advisory Council (BAC) at the Robert H. Smith School of Business, University of Maryland. Built as static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html            Home page
about.html            Mission statement + the 4 task forces
members.html          Task force leaders + members (clickable profiles)
projects.html         Projects & Impact portfolio, filterable by task force
get-involved.html     How to join, application link, contact

assets/js/data.js     >>> ALL member and project content lives here <<<
assets/js/members.js  Renders the members page + profile modal from data.js
assets/js/projects.js Renders the projects page from data.js
assets/js/main.js     Mobile nav toggle
assets/css/style.css  Shared styling
assets/img/           Put member headshots, logos, or project images here
```

## Editing content

**Members and projects** are both defined in one file: `assets/js/data.js`. Edit it in any text editor. The Members page and the Projects page both read from it, so a change shows up everywhere.

Each member looks like this:

```js
{
  id: "calebta-badu",            // unique, no spaces — used in links
  name: "Calebta Badu",
  initials: "CB",
  major: "Accounting",
  year: 2028,
  taskForce: "engage",           // intl | engage | alumni | career
  leader: true,                  // true = shows in "Task Force Leaders" section
  role: "Lead, Student Engagement & Resources Task Force",
  bio: "One short paragraph...",
  photo: null,                   // or "assets/img/calebta.jpg"
  placeholder: true              // remove (or set false) once the bio is real
},
```

- **Add a member**: copy a block, paste it in the list, change every field.
- **Promote someone to leader**: set `leader: true` and update `role`.
- **Add a headshot**: drop the image in `assets/img/` and set `photo: "assets/img/filename.jpg"`.
- **Remove a member**: delete their block (and remove their `id` from any project `team` lists).

Each project looks like this:

```js
{
  id: "belonging-resource-hub",
  title: "Belonging Resource Hub",
  taskForce: "engage",
  term: "Spring 2026",
  status: "In progress",         // "Completed" | "In progress" | "Planned"
  summary: "What the project is...",
  impact: "60+ resources catalogued",   // short headline number; or ""
  team: ["calebta-badu", "lauren-tran"], // member ids — builds each member's project list
  deck: null,                    // or a URL to a presentation
  sample: true                   // remove once this is a real project
},
```

A member's "Projects" list in their profile is built automatically from the `team` arrays, so keep those accurate.

**Everything else** (mission text, task force descriptions, the impact numbers on the Projects page) is plain HTML — open the `.html` file and change the text directly.

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
