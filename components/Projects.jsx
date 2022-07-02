import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <SlideUpWhenVisible>
    <div className="flex flex-wrap">
      <div>
          <p className="text-3xl mt-16">💪Projects</p>
          <p className="text-gray-400 md:text-xl">
            Here are some of the projects that I have worked on.
          </p>
          <p className="text-cyan-400 md:text-xl">Explore more &rarr;</p>
        </div>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
      </SlideUpWhenVisible>
    </>
  );
};

export default Projects;
