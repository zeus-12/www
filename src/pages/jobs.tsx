import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { NextSeo } from "next-seo";

const Jobs = () => {
  return (
    <>
      <NextSeo
        title="Work"
        description="My professional work experience as a software engineer."
      />
      <div className="pt-8 px-4 lg:px-24 lg:py-16">
        <SlideUpWhenVisible>
          <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
            Work Experience
          </p>
          <p className="text-gray-400">
            My professional work experience as a software engineer.
          </p>
          wip xd
          <div className="mt-4">
            {/* <WorkCard
              title='Software Engineer'
              company='ugh'
              date='July 2021 - Present'
              description='Working on the ugh product as a full-stack developer.'
            /> */}
          </div>
        </SlideUpWhenVisible>
      </div>
    </>
  );
};
export default Jobs;
