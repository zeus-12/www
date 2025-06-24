import Link from "@/components/link";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./project";
import { Tile, TileBackground, TileWrapper } from "./project-tile";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <TileWrapper numOfPages={projects.length}>
      <TileBackground>
        <ProjectBackground />
      </TileBackground>
      <div className="sticky top-0 hd-screen overflow-hidden">
        {projects.map((project, i) => (
          <Link key={i} href={project.deployedLink ?? ""}>
            <Tile
              page={i}
              renderContent={({ progress }: { progress: number }) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-dscreen">
                  <ProjectLeft progress={progress}>
                    <div>
                      <p className="capitalize text-4xl text-cyan font-semibold tracking-tight mb-2">
                        {project.title}
                      </p>
                      <p className="text-2xl sm:text-3xl font-medium text-gray-300 tracking-tight">
                        {project.shortDescription}
                      </p>
                    </div>
                  </ProjectLeft>

                  <ProjectRight progress={progress}>
                    <div className="hover:scale-[101%] hover:cursor-pointer transition transform duration-200 ease-in-out">
                      <Image
                        className="w-full md:w-[95vw] lg:w-[50vw] rounded-md object-contain mx-auto max-h-[80vh] lg:max-hd-screen"
                        width={500}
                        height={500}
                        src={project.imageSrc}
                        alt={project.title}
                      />
                    </div>
                  </ProjectRight>
                </div>
              )}
            />
          </Link>
        ))}
      </div>
    </TileWrapper>
  );
};

export default Projects;
