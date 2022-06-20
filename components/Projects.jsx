import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";

const Projects = () => {
  return (
    <div>
      <SlideUpWhenVisible>
        <p className="text-2xl mt-16">💪Projects</p>
        <p className="text-gray-400">
          Here are some of the projects that I have worked on.
        </p>
      </SlideUpWhenVisible>
    </div>
  );
};

export default Projects;
