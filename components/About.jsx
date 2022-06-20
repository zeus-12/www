// import Image from "next/image";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import { Box, Image } from "@chakra-ui/react";
const About = () => {
  return (
    <div className="mt-48">
      <SlideUpWhenVisible>
        <p className="text-2xl">⚡️About Me</p>
        <div className="flex flex-col md:flex-row gap-4 mt-2 justify-between">
          <div className="text-neutral-400 flex flex-col gap-3 md:w-2/3 md:max-w-2xl">
            <p>
              Hey 👋! I'm Vishnu, a 20-year-old based in India. I'm currently
              pursuing Engineering Design from{" "}
              <a className="text-blue-300" href="https://www.iitm.ac.in/">
                IIT Madras
              </a>
              . I've been close to a computer since an early age, and been
              passionate about it ever since. I started out building websites
              using no-code tools back in 2012, infact i still remember
              deploying my{" "}
              <a
                className="text-blue-300"
                href="https://speedcubing3.weebly.com"
              >
                first website
              </a>{" "}
              on{" "}
              <a className="text-blue-300" href="https://www.weebly.com">
                Weebly
              </a>{" "}
              ,though it was just a really basic one, it still got a special
              place in my ❤️.
            </p>

            <p>
              And later on, I taught myself how to code, fast-forward to today,
              I do programming in various languages and technologies. I'm
              interested in building something awesome with code and automate
              tasks with code, currently focused on{" "}
              <span className="text-blue-300">
                Web & Mobile Full-Stack Development.
              </span>
            </p>
            <p>
              When I'm not coding I play games with my friends, binge
              shows/movies, sit down for a good game of chess, or if the
              weather's good, play basketball! 🏀 I also love listening to
              Hip-Hop, Pop & Lo-Fi music.
            </p>
          </div>
          <div className="rounded-md w-full md:w-1/3">
            <SlideUpWhenVisible>
              <Image className="rounded-xl" src="/me2.png" alt="Vishnu Vinod" />
            </SlideUpWhenVisible>
          </div>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default About;
