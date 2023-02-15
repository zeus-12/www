export const TECHSTACK_COLOUR_MAPPING = {
  React: "blue",
  NextJS: "orange",
  MongoDB: "green",
  NodeJS: "red",
  Express: "yellow",
  PostgreSQL: "pink",
  "React Native": "cyan",
};

const TECH_STACK = {
  REACT: "React",
  NEXTJS: "NextJS",
  MONGODB: "MongoDB",
  NODEJS: "NodeJS",
  EXPRESS: "Express",
  POSTGRESQL: "PostgreSQL",
  REACT_NATIVE: "React Native",
  MYSQL: "MySQL",
  PRISMA: "Prisma",
  SHEETS_API: "Sheets API",
};

export const PROJECTS_DATA = [
  {
    title: "Mentora",
    description:
      "The All-in-one Academics app for students of the campus, where they could ask doubts, upload notes, apply for a study-buddy, along with a detailed course page scraped from the Institute Department Websites.",
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.MONGODB],
    githubLink: "https://github.com/zeus-12/mentora",
    deployedLink: "https://mentora.cf",
    imageSrc: "/projects/mentora.png",
    isFeatured: true,
  },
  {
    title: "Ping",
    description:
      "Security app for IITM allowing users to send their location to their contacts in case of an emergency. Enabling the security to track the user's location, access and record nearby cameras.",
    techStack: [
      TECH_STACK.NEXTJS,
      TECH_STACK.EXPRESS,
      TECH_STACK.MONGODB,
      TECH_STACK.REACT_NATIVE,
    ],
    githubLink: "",
    deployedLink: "",
    imageSrc: "/projects/ping.png",
    isFeatured: true,
  },
  {
    title: "Coursepanel",
    description: "Landing page for a startup we built.",
    techStack: [TECH_STACK.NEXTJS],
    githubLink: "",
    deployedLink: "https://coursepanel.in",
    imageSrc: "/projects/coursepanel.png",
    isFeatured: false,
  },
  {
    title: "FMHY",
    description:
      "A full-stack website for a popular reddit community, FMHY built using. Built a service which periodically scrapes and cleans the data from their GitHub page.",
    techStack: [
      TECH_STACK.REACT,
      TECH_STACK.MYSQL,
      TECH_STACK.PRISMA,
      TECH_STACK.MONGODB,
      TECH_STACK.EXPRESS,
    ],
    githubLink: "https://github.com/zeus-12/fmhy-ui",
    deployedLink: "https://www.fmhy.ml",
    imageSrc: "/projects/fmhy.png",
    isFeatured: false,
  },
  {
    title: "JMT Shaastra",
    description:
      "Developed a website for Junior Make-A-Thon event, part of Shaastra IITM from scratch, enabling for the smooth registration of over 3000 students from all over the country.",
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.SHEETS_API],
    githubLink: "https://github.com/zeus-12/jmt-shaastra-22",
    deployedLink: "https://jmt23.vercel.app/",
    imageSrc: "/projects/jmt.png",
    isFeatured: false,
  },
  {
    title: "Comportal",
    description:
      "Complaint portal app which could potentially replace the current institute complaint portal",
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.MONGODB],
    githubLink: "https://github.com/zeus-12/comportal",
    deployedLink: "https://comportal.vercel.app",
    imageSrc: "/projects/comportal.png",
    isFeatured: false,
  },
  {
    title: "Grievance Portal",
    description:
      "Grievance portal for an MP serving Idukki Constituency, benefiting 12 Lakhs+ citizens with their needs.",
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.EXPRESS, TECH_STACK.POSTGRESQL],
    deployedLink: "https://deankuriakose.in",
    imageSrc: "/projects/mpportal.png",
    isFeatured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS_DATA.filter(
  (project) => project.isFeatured
);
