import { useContext, useRef } from "react";
import { ScrollContext } from "../components/ScrollObserver";
import s from "../styles/skills.module.css";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  //tweak this for changing the opacity of text
  return 0.2;
};

const Animation = () => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);

  //change this for adding more opacityBlocks
  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-4 lg:px-8 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            A 20-year-old based in India, currently pursuing Engineering Design
            from IIT Madras.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I do programming in various languages and technologies.
          </span>
          <span
            // className={`${s.skillText} inline-block`}
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I'm interested in building something awesome or automate tasks with
            code, currently focused on Web & Mobile Full-Stack Development.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Animation;
