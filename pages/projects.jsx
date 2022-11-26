import { TextInput } from "@mantine/core";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const [value, setValue] = useState("");

  const projectData = [
    {
      title: "Mentora",
      description:
        "The All-in-one Academics app for students of the campus, where they could ask doubts, upload notes, apply for a study-buddy (or tutor), and also a detailed course page scraped from the Institute Department Websites.",
      techStack: ["React", "NextJs", "MongoDB"],

      githubLink: "https://github.com/zeus-12/mentora",
      deployedLink: "https://mentora.cf",
      imageSrc: "/mentora.png",
    },
    {
      title: "Comportal",
      description:
        "Complaint portal app which could potentially replace the current institute complaint portal",
      techStack: ["React", "NextJs", "MongoDB"],

      githubLink: "https://github.com/zeus-12/comportal",
      deployedLink: "https://comportal.vercel.app",
      imageSrc: "/comportal.png",
    },
    {
      title: "Grievance Portal",
      description:
        "Grievance portal for an MP serving Idukki Constituency, benefiting 12 Lakhs+ citizens with their needs.",
      techStack: ["React", "NextJs", "Express", "PostgreSQL"],
      deployedLink: "https://deankuriakose.in",
      imageSrc: "/mpportal.png",
    },
  ];
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
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {projectData.map((project) => (
          <ProjectCard
            imageSrc={project.imageSrc}
            techStack={project.techStack}
            key={project.title}
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
