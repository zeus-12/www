import Link from "@/components/link";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
    tw: "bg-green-300 animate-pulse",
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
    ],
    tw: "bg-black",
    text: "Previously",
  },
];

const KEYS = [
  {
    tw: "top-5 left-1/2",
    href: "/",
    text: "P",
  },

  {
    tw: "right-5 top-1/2",
    href: "/",
    text: "M",
  },
  {
    tw: "bottom-5 left-1/2",
    href: "/",
    text: "R",
  },
  {
    tw: "left-5 top-1/2",
    href: "/",
    text: "W",
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

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

const Key = ({
  tw,
  href,
  text,
}: {
  tw: string;
  href: string;
  text: string;
}) => {
  return (
    <Link
      monochrome={true}
      className={cn(
        "hidden md:flex w-5 h-5 items-center justify-center text-sm bg-gray-100 text-gray-300 rounded-sm absolute hover:text-black",
        tw
      )}
      href={href}
    >
      {text}
    </Link>
  );
};

const Landing = () => {
  return (
    <>
      {KEYS.map((item) => (
        <Key tw={item.tw} href={item.href} text={item.text} key={item.text} />
      ))}
      <SlideUpWhenVisible>
        <div
          className={cn(
            "px-5 py-12 md:flex md:items-center md:justify-between min-h-screen h-full text-sm text-[0.9rem]"
          )}
        >
          <div className=" md:max-w-lg mx-auto space-y-8">
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
                      "w-[0.35rem] h-[0.35rem] rounded-full absolute -left-3",
                      item.tw
                    )}
                  />
                  <p>{item.text}</p>
                </div>
                {item.items.map((item, idx) => (
                  <li className="list-none" key={idx}>
                    <span className="text-gray-400">{item.start}</span>{" "}
                    {item.end}
                  </li>
                ))}
              </div>
            ))}

            <div className="md:flex-row flex-col flex gap-2">
              <Button className="rounded-3xl w-fit">Say Hello</Button>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  className="bg-gray-100 text-gray-300 rounded-3xl hover:text-gray-500 hidden md:flex"
                >
                  Socials
                </Button>

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

            <div className="flex items-center gap-2">
              <div className="bg-gray-100 w-5 h-5 items-center justify-center flex text-gray-400 rounded-sm">
                ?
              </div>
              <p className="text-gray-400">Where is everything?</p>
            </div>
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};

export default Landing;
