export const SOCIAL_IDS = {
  github: "zeus-12",
  linkedin: "vishnu-v12",
  email: "writetovishnuvinod@gmail.com",
};

export const SOCIALS = {
  github: `https://github.com/${SOCIAL_IDS.github}`,
  linkedin: `https://www.linkedin.com/in/${SOCIAL_IDS.linkedin}/`,
  email: `mailto:${SOCIAL_IDS.email}`,
};

import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

export const heroLinkElements = [
  {
    icon: SiGithub,
    tw: "text-cyan-400",
    title: "Github",
    link: SOCIALS.github,
  },
  {
    icon: SiLinkedin,
    tw: "text-cyan-400",
    title: "LinkedIn",
    link: SOCIALS.linkedin,
  },
  {
    icon: IoIosMail,
    tw: "text-cyan-400 h-5 w-5",
    title: "Email",
    link: SOCIALS.email,
  },
];

// export const WORK_EXPERIENCE = [
//   {
//     title: 'Software Engineer Intern',
//     company: 'Commenda',
//     duration: 'May 2021 - July 2021',
//     description: <p>GOOD STUFF</p>,
//   },
// ];
