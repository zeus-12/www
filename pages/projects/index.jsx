import { TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import ProjectCard from "../../components/ProjectCard";
import { PROJECTS_DATA } from "../../utils/constants"

const Projects = () => {
  const [query, setQuery] = useState("");
  

  const [projects,setProjects] = useState(PROJECTS_DATA)

  useEffect(() => {
    if (query.trim().length > 0) {
      const newProjectData = PROJECTS_DATA.filter(item => item.title.toUpperCase().includes(query.toUpperCase()))
      setProjects(newProjectData)
    } else {
      setProjects(PROJECTS_DATA)
    }
  },[query])

  return (
    <div className="pt-8 px-8 lg:px-24 lg:py-16">
      <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
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
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {projects.length>0 ? projects.map((project) => (
          <ProjectCard
            imageSrc={project.imageSrc}
            techStack={project.techStack}
            key={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            description={project.description}
            title={project.title}
          />
        )) :
        (<p className="text-gray-400">No projects matching the entered keyword.</p>)
        }
      </div>
    </div>
  );
};

export default Projects;
