import Link from "next/link";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <SlideUpWhenVisible>
        <div className="grid md:grid-cols-2 gap-4">
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
          <ProjectCard />
          <ProjectCard />
        </div>
      </SlideUpWhenVisible>
    </>
  );
};

export default Projects;
