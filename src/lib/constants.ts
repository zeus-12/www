export const TECH_STACK: { [key: string]: techStack } = {
  REACT: { title: 'React', color: 'blue' },
  NEXTJS: { title: 'NextJS', color: 'orange' },
  MONGODB: { title: 'MongoDB', color: 'green' },
  NODEJS: { title: 'NodeJS', color: 'red' },
  EXPRESS: { title: 'Express', color: 'yellow' },
  POSTGRESQL: { title: 'PostgreSQL', color: 'pink' },
  EXPO: { title: 'Expo', color: 'violet' },
  REACT_NATIVE: { title: 'React Native', color: 'cyan' },
  MYSQL: { title: 'MySQL', color: 'pink' },
  PRISMA: { title: 'Prisma', color: 'green' },
  SHEETS_API: { title: 'Sheets API', color: 'blue' },
  FIREBASE: { title: 'Firebase', color: 'green' },
  CHAT_GPT: { title: 'Chat-GPT', color: 'blue' },
  PUSHER: { title: 'Pusher', color: 'violet' },
  REDIS: { title: 'Redis', color: 'red' },
};

interface techStack {
  title: string;
  color: string;
}

export const PROJECTS_DATA: {
  title: string;
  description: string;
  techStack: techStack[];
  githubLink?: string;
  deployedLink?: string;
  imageSrc: string;
  isFeatured: boolean;
  shortDescription: string;
}[] = [
  {
    title: 'FMHY',
    shortDescription: 'Wiki, Search, Guides for FMHY',
    description:
      'A full-stack website for a popular reddit community FMHY, including a comprehensive Wiki, Search and Guides. Built a service which periodically scrapes and cleans the data from their GitHub page.',
    techStack: [
      TECH_STACK.NEXTJS,
      TECH_STACK.PRISMA,
      TECH_STACK.EXPRESS,
      TECH_STACK.MYSQL,
    ],
    githubLink: 'https://github.com/zeus-12/fmhy',
    deployedLink: 'https://www.fmhy.net',
    imageSrc: '/projects/fmhy.png',
    isFeatured: true,
  },
  {
    title: 'Mentora',
    shortDescription:
      'A student-centered portal with features for asking questions, sharing notes, finding study buddies, and accessing detailed course information from Institute Department Websites.',
    description:
      'An Academic portal for students of the campus, where they could ask doubts, upload notes, apply for a study-buddy, along with a detailed course page scraped from the Institute Department Websites.',
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.MONGODB],
    githubLink: 'https://github.com/zeus-12/mentora',
    deployedLink: 'https://mentora.cf',
    imageSrc: '/projects/mentora.png',
    isFeatured: true,
  },
  {
    title: 'Everhealth',
    shortDescription:
      'A gamified mobile app featuring streaks, levels, an AI health feed, leaderboards, and dark mode.',
    description:
      'Mobile app that motivates patients to adhere to treatment plans and manage chronic conditions through the use of gamification techniques, with streak & level system, Health Feed AI doctor, leaderboards, and darkmode.',
    techStack: [
      TECH_STACK.REACT_NATIVE,
      TECH_STACK.FIREBASE,
      TECH_STACK.CHAT_GPT,
      TECH_STACK.EXPO,
    ],
    githubLink: 'https://github.com/zeus-12/Everhealth',
    deployedLink:
      'https://expo.dev/@vishnu_v12/gfg-hackathon?serviceType=classic&distribution=expo-go',
    imageSrc: '/projects/everhealth.jpeg',
    isFeatured: true,
  },
  // {
  //   title: 'msngr',
  //   description:
  //     'Messenger clone built with Nextjs App dir, Pusher, Prisma. Implemented read receipts, user status, group, one-on-one messaging, message attachments, file sharing.',
  //   techStack: [
  //     TECH_STACK.NEXTJS,
  //     TECH_STACK.PUSHER,
  //     TECH_STACK.PRISMA,
  //     TECH_STACK.POSTGRESQL,
  //   ],
  //   imageSrc: '/projects/msngr.png',
  //   isFeatured: false,
  // },
  // {
  //   title: 'Redora',
  //   description:
  //     'Reddit clone integrating post editor, nested replies, and subreddits, also Incorporated advanced post caching using Redis.',
  //   techStack: [
  //     TECH_STACK.NEXTJS,
  //     TECH_STACK.REDIS,
  //     TECH_STACK.PRISMA,
  //     TECH_STACK.POSTGRESQL,
  //   ],
  //   imageSrc: '/projects/redora.png',
  //   isFeatured: false,
  // },
  {
    title: 'Ping',
    shortDescription:
      'Security app for live location accessing, nearby camera access.',
    description:
      "Security app for IITM allowing users to send their location to their contacts in case of an emergency. Enabling the security to track the user's location, access and record nearby cameras.",
    techStack: [
      TECH_STACK.NEXTJS,
      TECH_STACK.EXPRESS,
      TECH_STACK.MONGODB,
      TECH_STACK.REACT_NATIVE,
      TECH_STACK.EXPO,
    ],
    githubLink: 'https://github.com/zeus-12/ping-dashboard',
    imageSrc: '/projects/ping.png',
    isFeatured: true,
  },
  {
    title: 'Coursepanel',
    shortDescription: 'Landing page for a startup we built.',
    description: 'Landing page for a startup we built.',
    techStack: [TECH_STACK.NEXTJS],
    deployedLink: 'https://coursepanel.in',
    imageSrc: '/projects/coursepanel.png',
    isFeatured: false,
  },

  {
    title: 'JMT Shaastra',
    shortDescription: "IITM Junior Make-A-Thon event's website.",
    description:
      'Developed a website for Junior Make-A-Thon event, part of Shaastra IITM from scratch, enabling for the smooth registration of over 3000 students from all over the country.',
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.SHEETS_API],
    githubLink: 'https://github.com/zeus-12/jmt-shaastra-22',
    deployedLink: 'https://jmt23.vercel.app/',
    imageSrc: '/projects/jmt.png',
    isFeatured: false,
  },
  {
    title: 'Comportal',
    shortDescription:
      'Complaint portal app we built during a 24 hour hackathon.',
    description:
      'Complaint portal app which could potentially replace the current institute complaint portal, build during a 24 hour hackathon.',
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.MONGODB],
    githubLink: 'https://github.com/zeus-12/comportal',
    deployedLink: 'https://comportal.vercel.app',
    imageSrc: '/projects/comportal.png',
    isFeatured: false,
  },
  {
    title: 'Grievance Portal',
    shortDescription: 'Grievance portal for an MP serving Idukki Constituency.',
    description:
      'Grievance portal for an MP serving Idukki Constituency, benefiting 12 Lakhs+ citizens with their needs.',
    techStack: [TECH_STACK.NEXTJS, TECH_STACK.EXPRESS, TECH_STACK.POSTGRESQL],
    deployedLink: 'https://deankuriakose.in',
    imageSrc: '/projects/mpportal.png',
    isFeatured: false,
  },
  {
    title: 'IITM Mess Menu',
    shortDescription: 'IITM Mess Menu app, updates based on day, week number.',
    description:
      'Mess Menu app for students of IITM, which automatically updates based on day and week number.',
    techStack: [TECH_STACK.NEXTJS],
    deployedLink: 'https://foodentha.vercel.app',
    githubLink: 'https://github.com/zeus-12/iitmess',
    imageSrc: '/projects/iitmess.png',
    isFeatured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS_DATA.filter(
  (project) => project.isFeatured
);

// export const WORK_EXPERIENCE = [
//   {
//     title: 'Software Engineer Intern',
//     company: 'Commenda',
//     duration: 'May 2021 - July 2021',
//     description: <p>GOOD STUFF</p>,
//   },
// ];
