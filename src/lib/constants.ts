import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoIosMail, IoIosPaper } from "react-icons/io";

export const SOCIAL_IDS = {
  github: "zeus-12",
  linkedin: "vishnu-v12",
  email: "writetovishnuvinod@gmail.com",
  twitter: "vishnuu122",
  instagram: "vishnu_v12",
};

export const SOCIALS = {
  github: `https://github.com/${SOCIAL_IDS.github}`,
  linkedin: `https://www.linkedin.com/in/${SOCIAL_IDS.linkedin}/`,
  email: `mailto:${SOCIAL_IDS.email}`,
  twitter: `https://twitter.com/${SOCIAL_IDS.twitter}`,
  instagram: `https://www.instagram.com/${SOCIAL_IDS.instagram}/`,
};

const LINKEDIN_DETAILS = {
  icon: SiLinkedin,
  title: "LinkedIn",
  link: SOCIALS.linkedin,
};

const EMAIL_DETAILS = {
  icon: IoIosMail,
  tw: "h-5 w-5",
  title: "Email",
  link: SOCIALS.email,
};

interface LinkElement {
  icon: any;
  title: string;
  link: string;
  tw?: string;
}

export const CONTACT_LINK_ELEMENTS: LinkElement[] = [
  LINKEDIN_DETAILS,
  EMAIL_DETAILS,
];

export const HERO_LINK_ELEMENTS: LinkElement[] = [
  {
    icon: SiGithub,
    title: "Github",
    link: SOCIALS.github,
  },
  LINKEDIN_DETAILS,
  EMAIL_DETAILS,
  {
    icon: IoIosPaper,
    title: "Resume",
    link: "/resume.pdf",
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
