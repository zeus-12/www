import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import LinkCard from "./link-card";
import Image from "next/image";
import { HERO_LINK_ELEMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen">
        <SlideUpWhenVisible>
          <p className="text-secondary text-lg sm:text-xl font-medium md:text-3xl">
            {/* 👋 */}
            Hey there!, I&apos;m-
          </p>
          <div className="relative">
            <p className="text-6xl font-bold md:text-8xl lg:text-9xl lg:text-[7rem] text-slate-200">
              Vishnu Vinod.
            </p>
            <Image
              src="/dots.svg"
              width={140}
              alt="Dots in the background"
              height={140}
              draggable={false}
              className="absolute text-gray-100 fill-slate-400 opacity-[0.15] -top-10 -left-10 lg:flex hidden"
            />
          </div>
          <p className="text-xl mt-6 md:mt-8 font-medium sm:text-2xl md:text-3xl sm:w-5/6 md:w-3/4 xl:w-2/3 text-slate-100">
            Software Engineer.
            <span className="text-neutral-400">
              {" "}
              A self-taught developer with an interest in Computer Science.
            </span>
          </p>

          <div className="space-y-1 mt-6 md:mt-8 text-sm text-neutral-400 sm:text-lg md:text-xl font-light">
            <p>🚀 &nbsp;Exploring oppurtunities & side projects.</p>
            <p>
              💻 &nbsp;Currently specializing in{" "}
              <span className="text-secondary"> Full-stack Development.</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="flex gap-2 mt-8 mb-4 flex-wrap">
              {HERO_LINK_ELEMENTS.map((item) => (
                <LinkCard key={item.title} title={item.title} link={item.link}>
                  <item.icon className={cn("text-secondary", item.tw)} />
                </LinkCard>
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
    </div>
  );
};

export default Hero;
