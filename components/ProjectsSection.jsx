import Link from "next/link";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <SlideUpWhenVisible>
        <div className="md:flex gap-4 space-y-4 block">
          <div className="space-y-16">
            <div>
              <p className="text-2xl mt-16">💪Projects</p>
              <p className="text-gray-400 mt-2">
                Here are some of the projects that I have worked on.
              </p>
              <Link href="/projects" passHref={true}>
                <p className="text-cyan-400 hover:cursor-pointer">
                  Explore more &rarr;
                </p>
              </Link>
            </div>

            <ProjectCard />
          </div>

          <div>
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};

export default ProjectsSection;
