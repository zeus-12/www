import SlideUpWhenVisible from "../hooks/SlideUpWhenVisible";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import LinkBox from "./LinkBox";
import Image from "next/image";

const heroLinkElements = [
  {
    icon: <SiGithub className="fill-cyan-400" />,
    title: "Github",
    link: "https://github.com/zeus-12",
  },
  {
    icon: <SiLinkedin className="fill-cyan-400" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/vishnu-vinod-362ab2230/",
  },
  {
    icon: <IoIosMail className="fill-cyan-400 h-5 w-5" />,
    title: "Email",
    link: "mailto:writetovishnuvinod@gmail.com",
  },
];

const Hero = () => {
  return (
    <div
      style={{
        minHeight: `calc(100vh - 10rem)`,
      }}
    >
      <SlideUpWhenVisible>
        <p className="text-cyan-400 text-lg font-medium md:text-3xl">
          👋 Hey there!, I&apos;m-
        </p>
        <p className="text-7xl font-bold md:text-8xl lg:text-9xl">
          Vishnu Vinod
        </p>
        <p className="text-xl mt-4 font-medium sm:text-3xl sm:w-5/6 md:w-3/4 xl:w-2/3 max-w-xl">
          Software Engineer.
          <span className="text-neutral-400">
            {" "}
            A self-taught developer with an interest in Computer Science.
          </span>
        </p>
        <div className="space-y-1 mt-8">
          {[
            "🚀 Exploring oppurtunities & side projects.",
            "💻 Currently specializing in Back-end Development.",
          ].map((item) => (
            <p
              key={item}
              className="text-sm text-neutral-400 md:text-lg font-light"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex gap-2 mt-8 mb-4">
            {heroLinkElements.map((item) => (
              <LinkBox key={item.title} title={item.title} link={item.link}>
                {item.icon}
              </LinkBox>
            ))}
          </div>

          <SlideUpWhenVisible>
            <Image
              className="rounded-xl self-center lg:self-start w-screen sm:w-[85vw] lg:w-[500px] h-auto"
              width={500}
              height={500}
              src="/me.png"
              alt="Vishnu Vinod"
              priority
            />
          </SlideUpWhenVisible>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default Hero;
