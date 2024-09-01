import SlideUpWhenVisible from "@/hooks/SlideUpWhenVisible";
import LinkCard from "@/components/LinkCard";
import { SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import ResumeLinkCard from "@/components/ResumeLinkCard";
import { SOCIALS } from "@/lib/constants";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <SlideUpWhenVisible>
        <p className="text-4xl md:text-5xl font-bold text-center">
          Keep in Touch!
        </p>
        <p className="text-center mt-6 text-neutral-400">
          I&apos;m currently specialising in{" "}
          <span className="text-cyan-400">Full Stack Development</span>.
        </p>

        <p className="text-center text-neutral-400">
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex gap-2 mt-8 justify-center">
          <LinkCard title="LinkedIn" link={SOCIALS.linkedin}>
            <SiLinkedin className="fill-cyan-400" />
          </LinkCard>

          <LinkCard title="Email" link={SOCIALS.email}>
            <IoIosMail className="fill-cyan-400 h-5 w-5" />
          </LinkCard>

          <ResumeLinkCard />
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default Contact;
