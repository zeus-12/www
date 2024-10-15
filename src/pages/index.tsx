import Link from "@/components/link";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";

const WORKS = [
  {
    items: [
      {
        start: "Dual Degree in Engineering Design at",
        end: (
          <Link monochrome={true} href="https://www.iitm.ac.in/">
            IIT Madras
          </Link>
        ),
      },
      {
        start: "Building",
        end: (
          <Link monochrome={true} href="https://uxie.vercel.app">
            uxie
          </Link>
        ),
      },
    ],
    text: "Currently",
    tw: "bg-green-400 animate-pulse",
  },
  {
    items: [
      {
        start: "Quant Analyst intern at",
        end: (
          <Link monochrome={true} href="https://www.natwestgroup.com/">
            NatWest
          </Link>
        ),
      },

      {
        start: "Backend intern at",
        end: (
          <Link monochrome={true} href="https://vimaan.ai">
            Vimaan
          </Link>
        ),
      },
      {
        start: "Full stack intern at",
        end: (
          <Link monochrome={true} href="https://commenda.io">
            Commenda
          </Link>
        ),
      },
      {
        start: "Frontend intern at",
        end: (
          <Link monochrome={true} href="https://viak.io">
            Viak
          </Link>
        ),
      },
    ],
    tw: "bg-black",
    text: "Previously",
  },
];

const KEYS = [
  {
    tw: "top-5 left-1/2",
    href: "/home",
    text: "P",
    fullText: "Portfolio",
  },
  {
    tw: "left-5 top-1/2",
    href: "/projects",
    text: "W",
    fullText: "Projects",
  },

  {
    tw: "bottom-5 left-1/2",
    href: "/resume.pdf",
    text: "R",
    fullText: "Resume",
  },

  {
    tw: "right-5 top-1/2",
    href: "/snippets",
    text: "S",
    fullText: "Snippets",
  },
];

const SOCIAL_LINKS = [
  {
    title: "X",
    link: SOCIALS.twitter,
  },
  {
    title: "LinkedIn",
    link: SOCIALS.linkedin,
  },
  {
    title: "Instagram",
    link: SOCIALS.instagram,
  },
];

const Landing = () => {
  const router = useRouter();

  useHotkeys(
    KEYS.map((key) => key.text),
    (_, handler) => {
      const keyPressed = handler.keys?.join("").toUpperCase();
      if (!keyPressed) {
        return;
      }
      const href = KEYS.find((key) => key.text === keyPressed)?.href;

      if (href) {
        router.push(href);
      }
    }
  );

  return (
    <>
      {KEYS.map((item) => (
        <Key
          tw={cn(item.tw, "hidden md:flex absolute")}
          href={item.href}
          text={item.text}
          key={item.text}
        />
      ))}
      <SlideUpWhenVisible>
        <div
          className={cn(
            "px-5 py-12 md:flex md:items-center md:justify-between min-h-screen h-full text-sm text-[0.9rem]"
          )}
        >
          <div className=" md:max-w-lg mx-auto space-y-8">
            <Logo />

            <p className="text-base tracking-tight">
              Vishnu Vinod is a self-taught developer with an interest in
              Computer Science. Interested in building fullstack, mobile app,
              automations.
            </p>

            {WORKS.map((item, id) => (
              <div key={id} className="space-y-2">
                <div className="flex items-center relative">
                  <div
                    className={cn(
                      "w-[0.35rem] h-[0.35rem] rounded-full",
                      item.tw
                    )}
                  />
                  <p className="ml-2">{item.text}</p>
                </div>
                {item.items.map((item, idx) => (
                  <li className="list-none ml-3" key={idx}>
                    <span className="text-gray-400">{item.start}</span>{" "}
                    {item.end}
                  </li>
                ))}
              </div>
            ))}

            <div className="md:flex-row flex-col flex gap-2">
              <Button className="rounded-3xl w-fit">Say Hello</Button>
              <div className="flex gap-2 group">
                <Button
                  variant="ghost"
                  className="bg-gray-100 text-gray-300 rounded-3xl hover:text-gray-500 hidden md:flex"
                >
                  Socials
                </Button>
                <div className="contents md:hidden group-hover:contents">
                  {SOCIAL_LINKS.map((link) => (
                    <Link href={link.link} key={link.title} monochrome={true}>
                      <Button
                        variant="ghost"
                        className="bg-gray-100 text-gray-300 rounded-3xl hover:text-gray-500"
                      >
                        {link.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group flex gap-2">
              <div className="hidden md:flex items-center gap-2  group-hover:hidden">
                <div className="bg-gray-100 w-5 h-5 items-center justify-center flex text-gray-400 rounded-sm">
                  ?
                </div>
                <p className="text-gray-400">Where is everything?</p>
              </div>

              <div className="md:hidden md:group-hover:contents space-y-4 md:space-y-0">
                {KEYS.map((key) => (
                  <Key
                    tw="flex gap-1"
                    href={key.href}
                    text={key.text}
                    key={key.text}
                    fullText={key.fullText}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideUpWhenVisible>
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
    <div className="text-white aspect-square w-fit items-center flex bg-black p-1 rounded-full md:mx-auto">
      &#123;V&#125;
    </div>
  );
};
