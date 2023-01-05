import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import LinkBox from "./LinkBox";
import { SiLinkedin } from "react-icons/si";
import { IoIosMail, IoIosPaper } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center"
      style={{
        height: `calc(100vh - 4rem)`,
      }}
    >
      <SlideUpWhenVisible>
        <p className="text-4xl md:text-5xl font-bold text-center">
          Keep in Touch!
        </p>
        <p className="text-center mt-6 text-neutral-400">
          I'm currently specialising in{" "}
          <span className="text-cyan-400">Full Stack Development</span>.
        </p>

        <p className="text-center text-neutral-400">
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex gap-2 mt-8 justify-center">
          <LinkBox
            title="LinkedIn"
            link="https://www.linkedin.com/in/vishnu-vinod-362ab2230/"
          >
            <SiLinkedin className="fill-cyan-400" />
          </LinkBox>
          <LinkBox title="Email" link="mailto:writetovishnuvinod@gmail.com">
            <IoIosMail className="fill-cyan-400 h-5 w-5" />
          </LinkBox>

          <div className="cursor-pointer inline-flex gap-1 items-center px-2 py-1 rounded-md bg-gray-900 hover:bg-gray-700">
            <IoIosPaper className="fill-cyan-400" />
            <Link
              href="/resume.pdf"
              alt="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default Contact;
