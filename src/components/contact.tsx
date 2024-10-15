import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import LinkCard from "@/components/link-card";
import { CONTACT_LINK_ELEMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
          <span className="text-cyan">Full Stack Development</span>.
        </p>

        <p className="text-center text-neutral-400">
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="flex gap-2 mt-8 justify-center">
          {CONTACT_LINK_ELEMENTS.map((item) => (
            <LinkCard key={item.title} title={item.title} link={item.link}>
              <item.icon className={cn("fill-cyan", item.tw)} />
            </LinkCard>
          ))}
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default Contact;
