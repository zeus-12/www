import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import LinkBox from "../components/LinkBox";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row"
      style={{
        minHeight: `calc(100vh - 10rem)`,
      }}
    >
      <div className="self-start">
        <SlideUpWhenVisible>
          <p className="text-cyan-400 text-lg font-medium md:text-3xl">
            👋 Hey there!, I'm-
          </p>
          <p className="text-7xl font-bold md:text-8xl lg:text-9xl block">
            Vishnu Vinod.
          </p>
          <p className="text-xl mt-4 font-medium sm:text-3xl sm:w-5/6 md:w-3/4 xl:w-2/3">
            Software Engineer.
            <span className="text-neutral-400">
              {" "}
              A self-taught developer with an interest in Computer Science.
            </span>
          </p>
          <p className="mt-8 text-sm text-neutral-400 md:text-lg font-light">
            🚀 Exploring oppurtunities & side projects.
          </p>
          <div className="flex gap-2 mt-8">
            <LinkBox title="Github" link="https://github.com/zeus-12">
              <SiGithub className="fill-cyan-400" />
            </LinkBox>

            <LinkBox
              title="LinkedIn"
              link="https://www.linkedin.com/in/vishnu-vinod-362ab2230/"
            >
              <SiLinkedin className="fill-cyan-400" />
            </LinkBox>

            <LinkBox title="Email" link="mailto:writetovishnuvinod@gmail.com">
              <IoIosMail className="fill-cyan-400" />
            </LinkBox>
          </div>
        </SlideUpWhenVisible>
      </div>
      <div className="rounded-xl self-end w-full mt-4 lg:mt-0 lg:w-1/2">
        <SlideUpWhenVisible>
          <img className="rounded-xl" src="/me2.png" alt="Vishnu Vinod" />
        </SlideUpWhenVisible>
      </div>
    </div>
  );
};

export default Hero;
