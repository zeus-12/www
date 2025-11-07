import AboutMe from "@/components/about-me";
import FloatingWithImages from "@/components/floating-with-images";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";
import { SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const CURRENT_SECTION = [
  {
    start: "Building",
    end: (
      <Link underline href="https://uxie.vercel.app">
        🔨 Uxie
      </Link>
    ),
  },
];

const LINKS = [
  {
    title: "Resume",
    link: "/resume.pdf",
  },
  {
    title: "GitHub",
    link: SOCIALS.github,
  },
  {
    title: "Projects",
    link: "/projects",
  },
];

const Landing = () => {
  return (
    <>
      <Intro />
      <AboutMe />
    </>
  );
};

export default Landing;

const dob = new Date("2002-04-12");
const age = Math.floor(
  (new Date().getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365),
);

const Intro = () => {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="h-full relative">
        <div
          className={cn(
            "px-5 py-12 flex items-center justify-between min-h-dscreen h-full text-sm text-[0.9rem]",
          )}
        >
          <FloatingWithImages>
            <div className="md:max-w-lg mx-auto space-y-6">
              <div className="text-base tracking-tight">
                <p className="inline">
                  hey, i&apos;m{" "}
                  <span className="bg-green-200 font-medium">vishnu</span>, a{" "}
                  {age} y/o new-grad from{" "}
                </p>
                <Link
                  underline
                  className="inlnie"
                  href="https://www.iitm.ac.in/"
                >
                  iit madras
                </Link>
                <p className="inline">
                  , self-taught developer, and design enthusiast. i enjoy
                  building web, desktop, mobile apps, automations. this is my
                  little corner of the web where i share my journey, and
                  experiments with
                  {" y'all :)"}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-[0.35rem] h-[0.35rem] rounded-full bg-green-400 animate-pulse" />
                  <p className="ml-2">Currently</p>
                </div>

                {CURRENT_SECTION.map((item, idx) => (
                  <li className="list-none ml-3 text-start" key={idx}>
                    <span className="text-gray-400">{item.start}</span>{" "}
                    {item.end}
                  </li>
                ))}
              </div>

              <div className="flex gap-2 flex-col md:flex-row">
                <Link href={SOCIALS.email} className="w-fit">
                  <Button className="rounded-3xl w-fit">Say Hello</Button>
                </Link>

                <OtherLinksSection />
              </div>
            </div>
          </FloatingWithImages>
        </div>
      </motion.div>
    </div>
  );
};

// const Logo = () => {
//   return (
//     <div className="md:text-lg text-white aspect-square w-fit h-auto items-center flex bg-black p-1 rounded-full md:mx-auto">
//       <p className="text-base">&#123;V&#125;</p>
//     </div>
//   );
// };

const OtherLinksSection = () => {
  return (
    <>
      <motion.div
        className="gap-2 group hidden md:flex"
        whileHover="visible"
        initial="hidden"
      >
        <motion.div>
          <Button
            variant="ghost"
            className="bg-gray-100 text-gray-400 rounded-3xl hover:text-gray-500 flex"
          >
            Links
          </Button>
        </motion.div>

        <motion.div
          variants={variants}
          transition={{
            duration: 0.5,
          }}
          className="contents"
        >
          <OtherLinks animate={true} />
        </motion.div>
      </motion.div>
      <div className="flex md:hidden gap-1">
        <OtherLinks animate={false} />
      </div>
    </>
  );
};

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const OtherLinks = ({ animate }: { animate: boolean }) => {
  return (
    <>
      {LINKS.map((link) => (
        <motion.div key={link.title} variants={animate ? variants : {}}>
          <Link href={link.link}>
            <Button
              variant="ghost"
              className="bg-gray-100 text-gray-400 rounded-3xl hover:text-gray-500"
            >
              {link.title}
            </Button>
          </Link>
        </motion.div>
      ))}
    </>
  );
};
