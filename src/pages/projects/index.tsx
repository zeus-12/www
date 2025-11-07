import ProjectCard from "@/components/project/project-card";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PROJECTS_DATA } from "@/lib/projects";
import { SearchIcon } from "lucide-react";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

const Projects = () => {
  const [query, setQuery] = useState("");

  const [projects, setProjects] = useState(PROJECTS_DATA);

  useEffect(() => {
    if (query.trim().length > 0) {
      const newProjectData = PROJECTS_DATA.filter((item) =>
        item.title.toUpperCase().includes(query.toUpperCase()),
      );
      setProjects(newProjectData);
    } else {
      setProjects(PROJECTS_DATA);
    }
  }, [query]);


  return (
    <>
      <NextSeo
        title="Projects"
        description="A collection of projects that I've worked on."
      />
      <div className="pt-8 px-4 lg:px-24 lg:py-16 pb-8">
        <SlideUpWhenVisible>
            <div>
              <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
                Projects
              </p>
              <p className="text-gray-400">
                Collection of cool stuff I&apos;ve built.
              </p>
            </div>

             <div className="relative my-4">
              <SearchIcon className="absolute left-3 top-[50%] h-4 w-4 -translate-y-[50%] text-muted-foreground" />
              <Input
                className="pl-9 border-gray-500 bg-muted mt-3 max-w-md"
                type="search"
                placeholder="Search for a project"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
        </SlideUpWhenVisible>

        <div className="mb-4 mt-8">
            {projects.length > 0 ? (
              <div className="lg:columns-3 sm:columns-2 gap-3 mb-2">
                {projects.map((project) => (
                  <div
                    className="break-inside-avoid-column mb-3"
                    key={project.title}
                  >
                    <ProjectCard
                      shortDescription={project.shortDescription}
                      isFeatured={project.isFeatured}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      deployedLink={project.deployedLink}
                      githubLink={project.githubLink}
                      techStack={project.techStack}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No projects matching the entered keyword.
              </p>
            )}
        </div>
      </div>
    </>
  );
};

export default Projects;
