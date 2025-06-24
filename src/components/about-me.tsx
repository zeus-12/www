import { ScrollContext } from "@/lib/scroll-observer";
import Image from "next/image";
import { useContext, useRef } from "react";
import SlideUpWhenVisible from "./slide-up-when-visible";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;

  return 0.2;
};

const CONTENTS = [
  <>
    <Image
      className="rounded-xl self-center lg:self-start w-screen sm:w-[85vw] lg:w-[500px] h-auto"
      width={500}
      height={500}
      src="/me.png"
      alt="Vishnu Vinod"
      priority
    />
  </>,
  <>
    I started out automating tasks, experimenting with building websites. Later
    on, I <span className="bg-cyan text-black">taught myself</span> how to code.
    Today, I do programming in{" "}
    <span className="bg-cyan text-black">
      various languages and technologies.
    </span>
  </>,
  <>
    My interests lie in building something awesome or automating tasks with
    code.
  </>,
];

const AboutMe = () => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);

  const numOfPages = CONTENTS.length;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="pt-40 pb-60 bg-black text-[#F9FAFB]">
      <SlideUpWhenVisible>
        <div className="min-h-dscreen max-w-5xl mx-auto px-4 lg:px-8 pt-24 md:pt-28 lg:pt-36 flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
          <div className="leading-[1.15] space-y-4">
            <p className="mb-2 text-gray-300">⚡️</p>
            {CONTENTS.map((content, i) => (
              <div
                key={i}
                className={`transition-opacity duration-500 inline-block`}
                style={{ opacity: opacityForBlock(progress, i) }}
              >
                {content}
              </div>
            ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default AboutMe;
