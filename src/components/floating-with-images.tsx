// CREDITS https://www.fancycomponents.dev/docs/components/image/floating

import Floating, { FloatingElement } from "@/components/ui/floating";
import { motion, stagger, useAnimate } from "motion/react";
import { ReactNode, useEffect } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490280788303-5aa94899aa59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEF1cm9ydXMlMjBib3JlYWxpc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1725955278540-bc756fbcd0a5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733170616326-84000c81fba3?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569154107747-fb00e3b3430d?q=80&w=2631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568191009535-7d8b407d389a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const FLOATING_CONFIGS = [
  {
    imgIdx: 0,
    depth: 0.5,
    floatingClass: "top-[8%] left-[11%]",
    imgClass: "w-16 h-16 md:w-24 md:h-24",
  },
  {
    imgIdx: 1,
    depth: 1,
    floatingClass: "top-[10%] left-[32%] hidden md:block",
    imgClass: "w-20 h-20 md:w-28 md:h-28",
  },
  {
    imgIdx: 2,
    depth: 2,
    floatingClass: "top-[2%] left-[53%]",
    imgClass: "w-28 h-40 md:w-40 md:h-52",
  },
  {
    imgIdx: 3,
    depth: 1,
    floatingClass: "top-[0%] left-[83%] hidden md:block",
    imgClass: "w-24 h-24 md:w-32 md:h-32",
  },
  {
    imgIdx: 4,
    depth: 1,
    floatingClass: "top-[40%] left-[2%] hidden md:block",
    imgClass: "w-28 h-28 md:w-36 md:h-36",
  },

  {
    imgIdx: 5,
    depth: 4,
    floatingClass: "top-[73%] left-[15%]  hidden md:block",
    imgClass: "w-40 md:w-52 h-full",
  },
  {
    imgIdx: 6,
    depth: 1,
    floatingClass: "top-[80%] left-[50%]",
    imgClass: "w-24 h-24 md:w-32 md:h-32",
  },
  {
    imgIdx: 7,
    depth: 2,
    floatingClass: "top-[70%] left-[77%]",
    imgClass: "w-28 h-28 md:w-36 md:h-48",
  },
];

const FloatingWithImages = ({ children }: { children: ReactNode }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) },
    );
  }, []);

  return (
    <div
      className="flex w-full h-full justify-center items-center overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-20 flex"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        {children}
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        {FLOATING_CONFIGS.map(
          ({ imgIdx, depth, floatingClass, imgClass }, i) => (
            <FloatingElement key={i} depth={depth} className={floatingClass}>
              <motion.img
                initial={{ opacity: 0 }}
                src={IMAGES[imgIdx]}
                className={`${imgClass} object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md`}
              />
            </FloatingElement>
          ),
        )}
      </Floating>
    </div>
  );
};

export default FloatingWithImages;
