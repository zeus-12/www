import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS } from "@/lib/projects";
import Image from "next/image";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./project";
import { Tile, TileBackground, TileWrapper } from "./project-tile";

const Projects = () => {
  return (
    <>
      <div className="flex mb-2 pt-32 justify-between items-center px-4 sm:mx-4 lg:px-12 md:px-8 xl:px-24">
        <p
          id="projects"
          className="text-4xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-gray-300"
        >
          💪{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] ">
            Favourite Projects
          </span>
        </p>
        <Link monochrome={true} href="/projects">
          <Button variant="ghost" className="hover:border-orange-400">
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ed6ea0] to-[#efbdaa] ">
              See All
            </p>
          </Button>
        </Link>
      </div>
      <TileWrapper numOfPages={FEATURED_PROJECTS.length}>
        <TileBackground>
          <ProjectBackground />
        </TileBackground>
        <div className="sticky top-0 hd-screen overflow-hidden">
          {FEATURED_PROJECTS.map((project, i) => (
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
    </>
  );
};

export default Projects;
