import Link from "next/link";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <SlideUpWhenVisible>
        <div className="md:flex p-8 sm:gap-14 block space-y-6 sm:space-y-0">
          <div className="space-y-6 sm:space-y-12">
            <div className="">
              <p className="text-2xl mt-16">💪Projects</p>
              <p className="text-gray-400 mt-2">
                Here are some of my favourite projects that I have worked on.
              </p>
              <Link href="/projects" passHref={true}>
                <p className="text-cyan-400 hover:cursor-pointer">
                  Explore more &rarr;
                </p>
              </Link>
            </div>

            <ProjectCard />
          </div>

          <div className="space-y-6">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};

export default ProjectsSection;
