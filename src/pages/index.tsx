import FloatingWithImages from "@/components/floating-with-images";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";

// {
//       start: "Quant Analyst intern at",
//       end: (
//         <Link monochrome={true} href="https://www.natwestgroup.com/">
//           NatWest
//         </Link>
//       ),
//     },

//     {
//       start: "Backend intern at",
//       end: (
//         <Link monochrome={true} href="https://vimaan.ai">
//           Vimaan
//         </Link>
//       ),
//     },
//     {
//       start: "Full stack intern at",
//       end: (
//         <Link monochrome={true} href="https://commenda.io">
//           Commenda
//         </Link>
//       ),
//     },
//     {
//       start: "Frontend intern at",
//       end: (
//         <Link monochrome={true} href="https://viak.io">
//           Viak
//         </Link>
//       ),
//     },

const CURRENT_SECTION = [
  {
    start: "Dual Degree in Engineering Design at",
    end: (
      <Link monochrome={true} href="https://www.iitm.ac.in/">
        🎓 IIT Madras
      </Link>
    ),
  },
  {
    start: "Building",
    end: (
      <Link monochrome={true} href="https://uxie.vercel.app">
        🔨 Uxie
      </Link>
    ),
  },
];

const HOTKEYS = [
  {
    tw: "top-5 left-1/2",
    href: "/about",
    text: "A",
    fullText: "About",
  },
  {
    tw: "left-5 top-1/2",
    href: "/projects",
    text: "P",
    fullText: "Projects",
  },
  {
    tw: "bottom-5 left-1/2",
    href: "/resume.pdf",
    text: "R",
    fullText: "Resume",
    hide: true,
  },
  {
    tw: "right-5 top-1/2",
    href: "/library",
    text: "L",
    fullText: "Library",
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
  const router = useRouter();

  useHotkeys(
    HOTKEYS.map((key) => key.text),
    (_, handler) => {
      const keyPressed = handler.keys?.join("").toUpperCase();
      if (!keyPressed) {
        return;
      }
      const href = HOTKEYS.find((key) => key.text === keyPressed)?.href;

      if (href) {
        router.push(href);
      }
    },
  );

  return (
    <>
      {HOTKEYS.map((item) => {
        if (item.hide) {
          return null;
        }

        return (
          <Key
            tw={cn(item.tw, "hidden md:flex fixed z-50")}
            href={item.href}
            text={item.text}
            key={item.text}
          />
        );
      })}

      <div
        className={cn(
          "px-5 py-12 flex items-center justify-between min-h-dscreen h-full text-sm text-[0.9rem]",
        )}
      >
        <FloatingWithImages>
          <div className="md:max-w-lg mx-auto space-y-6">
            <Logo />

            <p className="text-base tracking-tight">
              hey, i&apos;m{" "}
              <span className="bg-green-200 font-medium">vishnu</span>, a
              final-year engineering student, self-taught developer, and design
              enthusiast. i enjoy building web, desktop, mobile apps,
              automations. this is my little corner of the web where i share my
              journey, and experiments with y&apos;all :)
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-[0.35rem] h-[0.35rem] rounded-full bg-green-400 animate-pulse" />
                <p className="ml-2">Currently</p>
              </div>
              {CURRENT_SECTION.map((item, idx) => (
                <li className="list-none ml-3 text-start" key={idx}>
                  <span className="text-gray-400">{item.start}</span> {item.end}
                </li>
              ))}
            </div>

            <div className="flex gap-2 flex-col md:flex-row">
              <Link monochrome={true} href={SOCIALS.email} className="w-fit">
                <Button className="rounded-3xl w-fit">Say Hello</Button>
              </Link>

              <OtherLinksSection />
            </div>
          </div>
        </FloatingWithImages>
      </div>
    </>
  );
};

export default Landing;

const Key = ({
  tw,
  href,
  text,
  fullText,
}: {
  tw?: string;
  href: string;
  text: string;
  fullText?: string;
}) => {
  return (
    <Link monochrome={true} className={tw} href={href}>
      <div className="w-5 h-5 flex justify-center items-center text-sm bg-gray-100 text-gray-300 rounded-sm hover:text-black ">
        <span className="text-sm bg-gray-100 text-gray-300 rounded-sm hover:text-black">
          {text}
        </span>
      </div>
      <span>{fullText}</span>
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="md:text-lg text-white aspect-square w-fit h-auto items-center flex bg-black p-1 rounded-full md:mx-auto">
      <p className="text-base">&#123;V&#125;</p>
    </div>
  );
};

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
          <Link href={link.link} monochrome={true}>
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
