import { TextInput } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const [value, setValue] = useState("");

  const projectData = [
    {
      title: "",
      description: "",
      techStack: [],
      githubLink: "asdf",
      deployedLink: "asdfas",
      imageSrc: "",
    },
    {
      title: "",
      description: "",
      techStack: [],
      githubLink: "asdfsa",
      deployedLink: "",
      imageSrc: "",
    },
    {
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      deployedLink: "asdf",
      imageSrc: "",
    },
    {
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      deployedLink: "",
      imageSrc: "",
    },
  ];
  return (
    <div className="pt-8 px-8">
      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        Projects
      </p>
      <p className="text-gray-400">
        I love building projects and practice my coding skills. Here's an
        archive of things that I've worked on.
      </p>

      <TextInput
        className="mt-3 max-w-md"
        placeholder="Search projects"
        rightSection={<BiSearch />}
        type="text"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {projectData.map((project) => (
          <ProjectCard
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            description={project.description}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
