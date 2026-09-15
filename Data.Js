/* ===========================================================
   Belonging Advisory Council — site data
   -----------------------------------------------------------
   This is the ONE place to edit members and projects.
   members.html and projects.html both render from this file.

   MEMBERS
     id        unique slug, used in links (members.html#id)
     initials  fallback shown if photo is missing
     major     e.g. "Finance & Information Systems"
     year      graduation year, as a number
     taskForce one of: intl | engage | alumni | career
               leave "" until they're assigned — the page handles it
     leader    true = shown in the "Task Force Leaders" section
     role      e.g. "Member, Alumni Engagement Task Force"
     why       one or two sentences from their LinkedIn About /
               headline, in their own voice. Leave "" if none.
     bio       leave "" and it's built for you as
               "<First> is a <major> major. <why>"
               Write one yourself to override that.
     photo     "assets/img/members/filename.jpg" or null
     placeholder  true = shows "pending member review" on the profile

   Anything left blank renders as [needs update] on the live page.
   That's deliberate — it makes the gaps visible instead of hiding them.

   PROJECTS
     id        unique slug, used in links (projects.html#id)
     status    "Completed" | "In progress" | "Planned"
     team      array of member ids — this is how a member's
               "Projects" list is built, so keep it accurate
     deck      optional URL to a presentation; null shows a placeholder
     sample    true = shows a small "Sample" badge (remove when real)
   =========================================================== */

const NEEDS_UPDATE = "[needs update]";

const TASK_FORCES = {
  intl:   { short: "International Student", name: "International Student Task Force" },
  engage: { short: "Engagement & Resources", name: "Student Engagement & Resources Task Force" },
  alumni: { short: "Alumni Engagement",      name: "Alumni Engagement Task Force" },
  career: { short: "Career Recruitment",     name: "Career Recruitment Task Force" }
};

/* A safe home for members who haven't been assigned a task force yet.
   Defined with enumerable:false so it does NOT show up as a filter chip
   on the Projects page, which builds its chips from Object.entries of
   this object. It exists only to stop the Members page from crashing
   when taskForce is blank. */
Object.defineProperty(TASK_FORCES, "unassigned", {
  value: { short: "Task force TBD", name: "Task force not yet assigned" },
  enumerable: false
});

const MEMBERS = [
  {
    id: "donovan-wayman",
    name: "Donovan Wayman",
    initials: "DW",
    major: "",
    year: 2027,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/donavon.jpeg",
    placeholder: true
  },
  {
    id: "rachael-chavez",
    name: "Rachael Chavez",
    initials: "RC",
    major: "",
    year: 2029,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/rachael.jpeg",
    placeholder: true
  },
  {
    id: "matheus-cali",
    name: "Matheus Cali",
    initials: "MC",
    major: "",
    year: 2029,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/matheus.jpeg",
    placeholder: true
  },
  {
    id: "gabrielle-annan",
    name: "Gabrielle Annan",
    initials: "GA",
    major: "",
    year: 2028,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/gabrielle.jpeg",
    placeholder: true
  },
  {
    id: "arielle-francis",
    name: "Arielle Francis",
    initials: "AF",
    major: "",
    year: 2028,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/arielle.jpeg",
    placeholder: true
  },
  {
    id: "javier-coleman",
    name: "Javier Coleman",
    initials: "JC",
    major: "",
    year: 2027,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/javi.jpeg",
    placeholder: true
  },
  {
    id: "yume-tanaka",
    name: "Yume Tanaka",
    initials: "YT",
    major: "",
    year: 2027,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/yume.jpeg",
    placeholder: true
  },
  {
    id: "ibhade-akhabue",
    name: "Ibhade Akhabue",
    initials: "IA",
    major: "",
    year: 2027,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/ibhade.jpeg",
    placeholder: true
  },
  {
    /* Carried over from the previous roster, where she was listed as
       "Kairy Barrios" — Marketing, Engagement & Resources. Confirm both
       are still current before treating them as verified. */
    id: "kairy-castro-barrios",
    name: "Kairy Castro-Barrios",
    initials: "KC",
    major: "Marketing",
    year: 2027,
    taskForce: "engage",
    leader: false,
    role: "Member, Student Engagement & Resources Task Force",
    why: "",
    bio: "",
    photo: "assets/img/members/kairy.png",
    placeholder: true
  },
  {
    id: "martha-onyilokwu",
    name: "Martha Onyilokwu",
    initials: "MO",
    major: "",
    year: 2028,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/mathao.png",
    placeholder: true
  },
  {
    id: "dylan-barnes",
    name: "Dylan Barnes",
    initials: "DB",
    major: "",
    year: 2027,
    taskForce: "",
    leader: false,
    role: "",
    why: "",
    bio: "",
    photo: "assets/img/members/dylanbarnes.jpeg",
    placeholder: true
  }
];

/* -----------------------------------------------------------
   Fills in the blanks above so the page never breaks on a
   missing field. Don't edit unless you want to change the
   sentence pattern itself.
   ----------------------------------------------------------- */
MEMBERS.forEach((m) => {
  if (!m.taskForce || !TASK_FORCES[m.taskForce]) m.taskForce = "unassigned";
  if (!m.major) m.major = NEEDS_UPDATE;
  if (!m.role) m.role = NEEDS_UPDATE;
  if (!m.bio) {
    const first = m.name.split(" ")[0];
    m.bio = `${first} is a ${m.major} major. ${m.why || NEEDS_UPDATE}`;
  }
});

const PROJECTS = [
  /* Sample content, kept from the original build so the Projects page
     has something to render. The `team` arrays are empty because the
     members they referenced are no longer on the council — add real
     member ids as real projects get assigned. */

  // ---------- International Student ----------
  {
    id: "international-experience-survey",
    title: "International Student Experience Survey",
    taskForce: "intl",
    term: "Fall 2025",
    status: "Completed",
    summary: "A school-wide survey of international undergraduates on onboarding, advising, and community life. Findings were compiled into a report and shared with the Office of Undergraduate Programs.",
    impact: "180+ responses · 6 recommendations delivered",
    team: [],
    deck: null,
    sample: true
  },
  {
    id: "global-smith-welcome",
    title: "Global Smith Welcome Week",
    taskForce: "intl",
    term: "Spring 2026",
    status: "In progress",
    summary: "A peer-pairing and orientation program that connects incoming international students with returning students during their first weeks at Smith.",
    impact: "Pilot cohort of 40 students",
    team: [],
    deck: null,
    sample: true
  },

  // ---------- Engagement & Resources ----------
  {
    id: "cultural-heritage-spotlight",
    title: "Cultural Heritage Spotlight Series",
    taskForce: "engage",
    term: "Fall 2025",
    status: "Completed",
    summary: "A monthly feature highlighting students, student organizations, and cultural moments across the Smith community on building screens and council social channels.",
    impact: "8 features published · 12 organizations featured",
    team: [],
    deck: null,
    sample: true
  },
  {
    id: "belonging-resource-hub",
    title: "Belonging Resource Hub",
    taskForce: "engage",
    term: "Spring 2026",
    status: "In progress",
    summary: "A single, searchable directory of affinity organizations, scholarships, and campus support offices relevant to Smith students — so no one has to hunt across a dozen sites.",
    impact: "60+ resources catalogued",
    team: [],
    deck: null,
    sample: true
  },

  // ---------- Alumni Engagement ----------
  {
    id: "alumni-stories-wall",
    title: "Smith Alumni Stories Wall",
    taskForce: "alumni",
    term: "Fall 2025",
    status: "Completed",
    summary: "A physical and digital display in Van Munching Hall featuring the career paths of diverse Smith alumni, in their own words.",
    impact: "15 alumni profiled",
    team: [],
    deck: null,
    sample: true
  },
  {
    id: "alumni-mentor-circles",
    title: "Alumni Mentor Circles",
    taskForce: "alumni",
    term: "Spring 2026",
    status: "In progress",
    summary: "Small-group mentoring cohorts that pair four to five students with a Smith alum for a semester of structured conversations about career and life after graduation.",
    impact: "6 circles · 28 students matched",
    team: [],
    deck: null,
    sample: true
  },

  // ---------- Career Recruitment ----------
  {
    id: "fellowship-info-sessions",
    title: "Fellowship & Pipeline Info Sessions",
    taskForce: "career",
    term: "Fall 2025",
    status: "Completed",
    summary: "A series of sessions demystifying diversity fellowships and early-insight programs — what they are, who qualifies, and how to apply on time.",
    impact: "3 sessions · 120 attendees",
    team: [],
    deck: null,
    sample: true
  },
  {
    id: "recruiting-readiness-bootcamp",
    title: "Recruiting Readiness Bootcamp",
    taskForce: "career",
    term: "Fall 2026",
    status: "Planned",
    summary: "A two-week intensive covering resume review, case practice, and mock interviews, designed for students preparing for competitive internship recruiting for the first time.",
    impact: "Target: 50 participants",
    team: [],
    deck: null,
    sample: true
  }
];
