import { SiGithub, SiLinkedin } from "react-icons/Si";
import { IoIosMail } from "react-icons/Io";
import LinkUI from "../components/LinkUI";

const Hero = () => {
  return (
    <div className="">
      <p className="text-cyan-400 text-lg font-medium md:text-3xl">
        👋 Hey there!, I'm-
      </p>
      <p className="text-7xl font-bold md:text-8xl lg:text-9xl">
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
        <LinkUI title="Github" link="https://github.com/zeus-12">
          <SiGithub className="fill-cyan-400" />
        </LinkUI>

        <LinkUI
          title="LinkedIn"
          link="https://www.linkedin.com/in/vishnu-vinod-362ab2230/"
        >
          <SiLinkedin className="fill-cyan-400" />
        </LinkUI>

        <LinkUI title="Email" link="mailto:writetovishnuvinod@gmail.com">
          <IoIosMail className="fill-cyan-400" />
        </LinkUI>
      </div>
    </div>
  );
};

export default Hero;
