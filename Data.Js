/* =============================================================
   Belonging Advisory Council — member data
   2025–26 term

   HOW TO EDIT
   -----------
   Everything the Members page shows comes from the MEMBERS array
   below. You should never have to touch members.html.

   For each person, fill in:
     majors    – array of strings, e.g. ["Finance", "Information Systems"]
     taskForce – must match a task force name used on about.html
     role      – leave null for a general member; set to the lead title
                 (e.g. "Task Force Lead") to move them into the
                 "Task force leaders" grid at the top of the page
     why       – one or two sentences in their own voice, pulled from
                 their LinkedIn About section / headline. Leave as ""
                 if they don't have one — the page will then print
                 "[needs update]" so it's obvious what's still missing.

   Anything left empty renders as [needs update] on the live page.
   That's intentional: it makes the gaps visible instead of hiding them.
   ============================================================= */

const MEMBERS = [
  {
    id: "donovan-wayman",
    name: "Donovan Wayman",
    gradYear: "2027",
    photo: "assets/img/members/donovan-wayman.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "rachael-chavez",
    name: "Rachael Chavez",
    gradYear: "2029",
    photo: "assets/img/members/rachael-chavez.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "matheus-cali",
    name: "Matheus Cali",
    gradYear: "2029",
    photo: "assets/img/members/matheus-cali.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "gabrielle-annan",
    name: "Gabrielle Annan",
    gradYear: "2028",
    photo: "assets/img/members/gabrielle-annan.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "arielle-francis",
    name: "Arielle Francis",
    gradYear: "2028",
    photo: "assets/img/members/arielle-francis.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "javier-coleman",
    name: "Javier Coleman",
    gradYear: "2027",
    photo: "assets/img/members/javier-coleman.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "yume-tanaka",
    name: "Yume Tanaka",
    gradYear: "2027",
    photo: "assets/img/members/yume-tanaka.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "ibhade-akhabue",
    name: "Ibhade Akhabue",
    gradYear: "2027",
    photo: "assets/img/members/ibhade-akhabue.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "kairy-castro-barrios",
    name: "Kairy Castro-Barrios",
    gradYear: "2027",
    photo: "assets/img/members/kairy-castro-barrios.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "martha-onyilokwu",
    name: "Martha Onyilokwu",
    gradYear: "May 2028",
    photo: "assets/img/members/martha-onyilokwu.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  },
  {
    id: "dylan-barnes",
    name: "Dylan Barnes",
    gradYear: "2027",
    photo: "assets/img/members/dylan-barnes.jpg",
    majors: [],
    taskForce: "",
    role: null,
    why: ""
  }
];

/* -------------------------------------------------------------
   Derived fields — don't edit below unless you want to change
   the sentence pattern itself.
   ------------------------------------------------------------- */

const NEEDS_UPDATE = "[needs update]";

/* "Finance"                          -> "a Finance major"
   "Finance", "Information Systems"   -> "a Finance and Information Systems major"
   three or more                      -> Oxford-comma list                     */
function majorPhrase(majors) {
  if (!majors || majors.length === 0) return `a ${NEEDS_UPDATE} major`;
  if (majors.length === 1) return `a ${majors[0]} major`;
  if (majors.length === 2) return `a ${majors[0]} and ${majors[1]} major`;
  return `a ${majors.slice(0, -1).join(", ")}, and ${majors[majors.length - 1]} major`;
}

/* First name only, so the bio reads "Donovan is a ..." */
function firstName(name) {
  return name.split(" ")[0];
}

/* Builds: "Donovan is a Finance and Information Systems major. <why>" */
function composeBio(member) {
  const opener = `${firstName(member.name)} is ${majorPhrase(member.majors)}.`;
  const why = member.why && member.why.trim() ? member.why.trim() : NEEDS_UPDATE;
  return `${opener} ${why}`;
}

/* Attach the composed fields so members.js can read m.bio / m.taskForce
   without caring how they were built. */
MEMBERS.forEach(m => {
  m.bio = composeBio(m);
  m.taskForce = m.taskForce && m.taskForce.trim() ? m.taskForce : NEEDS_UPDATE;
  m.isLeader = Boolean(m.role);
});

/* Convenience splits for the two grids on members.html */
const LEADERS = MEMBERS.filter(m => m.isLeader);
const GENERAL_MEMBERS = MEMBERS.filter(m => !m.isLeader);
