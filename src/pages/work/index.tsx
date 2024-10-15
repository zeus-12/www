import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { NextSeo } from "next-seo";

const Work = () => {
  return (
    <>
      <NextSeo
        title="Projects"
        description="A collection of projects that I've worked on."
      />
      <div className="pt-8 px-4 lg:px-24 lg:py-16">
        <SlideUpWhenVisible>
          <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
            Work Experience
          </p>
          <p className="text-gray-400">
            These are the professional engagements that I&apos;ve pursued.
          </p>
        </SlideUpWhenVisible>
      </div>
    </>
  );
};
export default Work;
