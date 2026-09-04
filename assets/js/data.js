/* ===========================================================
   Belonging Advisory Council — site data
   -----------------------------------------------------------
   This is the ONE place to edit members and projects.
   members.html and projects.html both render from this file.

   MEMBERS
     id        unique slug, used in links (members.html#id)
     leader    true = shown in the "Task Force Leaders" section
     taskForce one of: intl | engage | alumni | career
     bio       short paragraph shown when the member is clicked
     photo     optional: "assets/img/filename.jpg" (falls back to initials)

   PROJECTS
     id        unique slug, used in links (projects.html#id)
     status    "Completed" | "In progress" | "Planned"
     team      array of member ids — this is how a member's
               "Projects" list is built, so keep it accurate
     deck      optional URL to a presentation; null shows a placeholder
     sample    true = shows a small "Sample" badge (remove when real)
   =========================================================== */

const TASK_FORCES = {
  intl:   { short: "International Student", name: "International Student Task Force" },
  engage: { short: "Engagement & Resources", name: "Student Engagement & Resources Task Force" },
  alumni: { short: "Alumni Engagement",      name: "Alumni Engagement Task Force" },
  career: { short: "Career Recruitment",     name: "Career Recruitment Task Force" }
};

const MEMBERS = [
  // ---------- Task Force Leaders ----------
  {
    id: "maraly-gonzalez",
    name: "Maraly Gonzalez",
    initials: "MG",
    major: "OMBA & International Business",
    year: 2027,
    taskForce: "intl",
    leader: true,
    role: "Lead, International Student Task Force",
    bio: "Maraly is a Class of 2027 student studying OMBA & International Business and leads the International Student Task Force. In that role, Maraly coordinates the task force's research on the international student experience and works with Smith staff to turn findings into concrete resources and programming.",
    photo: null,
    placeholder: true
  },
  {
    id: "calebta-badu",
    name: "Calebta Badu",
    initials: "CB",
    major: "Accounting",
    year: 2028,
    taskForce: "engage",
    leader: true,
    role: "Lead, Student Engagement & Resources Task Force",
    bio: "Calebta is a Class of 2028 Accounting student and leads the Student Engagement & Resources Task Force. Calebta oversees the council's cultural spotlight programming and is building a central directory of belonging resources for Smith students.",
    photo: null,
    placeholder: true
  },
  {
    id: "anne-egbe",
    name: "Anne Egbe",
    initials: "AE",
    major: "Finance & Information Systems",
    year: 2026,
    taskForce: "alumni",
    leader: true,
    role: "Lead, Alumni Engagement Task Force",
    bio: "Anne is a Class of 2026 student in Finance & Information Systems and leads the Alumni Engagement Task Force. Anne manages the council's relationships with Smith alumni and directs initiatives that connect diverse alumni with current students as mentors and role models.",
    photo: null,
    placeholder: true
  },
  {
    id: "jennifer-mbuton",
    name: "Jennifer Mbuton",
    initials: "JM",
    major: "Master's in Business Analytics",
    year: 2026,
    taskForce: "career",
    leader: true,
    role: "Co-Lead, Career Recruitment Task Force",
    bio: "Jennifer is a Class of 2026 Master's in Business Analytics student and co-leads the Career Recruitment Task Force. Jennifer focuses on identifying the barriers underrepresented students face in competitive recruiting and on communicating fellowship and early-insight opportunities across Smith.",
    photo: null,
    placeholder: true
  },
  {
    id: "julio-pakou",
    name: "Julio Pakou",
    initials: "JP",
    major: "M.S. in Supply Chain Management",
    year: 2026,
    taskForce: "career",
    leader: true,
    role: "Co-Lead, Career Recruitment Task Force",
    bio: "Julio is a Class of 2026 M.S. in Supply Chain Management student and co-leads the Career Recruitment Task Force. Julio develops the task force's preparation pipelines — workshops, mock interviews, and peer review — that help students compete for high-demand roles.",
    photo: null,
    placeholder: true
  },

  // ---------- Council Members ----------
  {
    id: "kairy-barrios",
    name: "Kairy Barrios",
    initials: "KB",
    major: "Marketing",
    year: 2027,
    taskForce: "engage",
    leader: false,
    role: "Member, Student Engagement & Resources Task Force",
    bio: "Kairy is a Class of 2027 Marketing student serving on the Student Engagement & Resources Task Force. Kairy contributes to the council's outreach and helps shape how the council's initiatives are communicated to the wider Smith community.",
    photo: null,
    placeholder: true
  },
  {
    id: "le-nair-koffa",
    name: "Le-Nair Koffa",
    initials: "LK",
    major: "Finance & Information Systems",
    year: 2027,
    taskForce: "intl",
    leader: false,
    role: "Member, International Student Task Force",
    bio: "Le-Nair is a Class of 2027 student in Finance & Information Systems serving on the International Student Task Force. Le-Nair supports the task force's data collection and helps analyze survey findings on the international student experience.",
    photo: null,
    placeholder: true
  },
  {
    id: "padmasini-krishnamoorthi",
    name: "Padmasini Krishnamoorthi",
    initials: "PK",
    major: "Finance & Information Systems",
    year: 2026,
    taskForce: "career",
    leader: false,
    role: "Member, Career Recruitment Task Force",
    bio: "Padmasini is a Class of 2026 student in Finance & Information Systems serving on the Career Recruitment Task Force. Padmasini helps organize recruiting-readiness programming and supports the task force's outreach to students exploring competitive career paths.",
    photo: null,
    placeholder: true
  },
  {
    id: "emely-martinez",
    name: "Emely Martinez",
    initials: "EM",
    major: "Accounting",
    year: 2027,
    taskForce: "alumni",
    leader: false,
    role: "Member, Alumni Engagement Task Force",
    bio: "Emely is a Class of 2027 Accounting student serving on the Alumni Engagement Task Force. Emely helps research and feature the stories of diverse Smith alumni and supports the task force's mentoring initiatives.",
    photo: null,
    placeholder: true
  },
  {
    id: "sean-smith",
    name: "Sean Smith",
    initials: "SS",
    major: "Management & Information Systems",
    year: 2026,
    taskForce: "alumni",
    leader: false,
    role: "Member, Alumni Engagement Task Force",
    bio: "Sean is a Class of 2026 student in Management & Information Systems serving on the Alumni Engagement Task Force. Sean coordinates logistics for alumni events and helps connect students with alumni mentors.",
    photo: null,
    placeholder: true
  },
  {
    id: "ababakar-sow",
    name: "Ababakar Sow",
    initials: "AS",
    major: "Accounting & Information Systems",
    year: 2026,
    taskForce: "intl",
    leader: false,
    role: "Member, International Student Task Force",
    bio: "Ababakar is a Class of 2026 student in Accounting & Information Systems serving on the International Student Task Force. Ababakar supports welcome programming for incoming international students and helps identify resource gaps.",
    photo: null,
    placeholder: true
  },
  {
    id: "lauren-tran",
    name: "Lauren Tran",
    initials: "LT",
    major: "Accounting",
    year: 2027,
    taskForce: "engage",
    leader: false,
    role: "Member, Student Engagement & Resources Task Force",
    bio: "Lauren is a Class of 2027 Accounting student serving on the Student Engagement & Resources Task Force. Lauren contributes to the council's cultural programming and helps maintain the belonging resource directory.",
    photo: null,
    placeholder: true
  }
];

const PROJECTS = [
  // ---------- International Student ----------
  {
    id: "international-experience-survey",
    title: "International Student Experience Survey",
    taskForce: "intl",
    term: "Fall 2025",
    status: "Completed",
    summary: "A school-wide survey of international undergraduates on onboarding, advising, and community life. Findings were compiled into a report and shared with the Office of Undergraduate Programs.",
    impact: "180+ responses · 6 recommendations delivered",
    team: ["maraly-gonzalez", "le-nair-koffa", "ababakar-sow"],
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
    team: ["maraly-gonzalez", "ababakar-sow"],
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
    team: ["calebta-badu", "kairy-barrios", "lauren-tran"],
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
    team: ["calebta-badu", "lauren-tran"],
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
    team: ["anne-egbe", "emely-martinez", "sean-smith"],
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
    team: ["anne-egbe", "sean-smith"],
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
    team: ["jennifer-mbuton", "julio-pakou", "padmasini-krishnamoorthi"],
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
    team: ["jennifer-mbuton", "julio-pakou", "padmasini-krishnamoorthi"],
    deck: null,
    sample: true
  }
];
