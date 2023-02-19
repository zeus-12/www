import { TileWrapper, TileBackground, Tile } from "./Tile";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./Project";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "../utils/constants";

const Projects = () => {
  return (
    <TileWrapper numOfPages={FEATURED_PROJECTS.length}>
      <TileBackground>
        <ProjectBackground />
      </TileBackground>
      <div className="sticky top-0 h-screen overflow-hidden">
        {FEATURED_PROJECTS.map((project, i) => (
          <Link key={i} href={project.deployedLink}>
            <Tile
              page={i}
              renderContent={({ progress }) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
                  <ProjectLeft progress={progress}>
                    <div>
                      <p className="capitalize text-4xl text-cyan-300 font-semibold tracking-tight">
                        {/* <span className="text-cyan-400 ">#{i + 1}</span>{" "} */}
                        {project.title}
                      </p>
                      <p className="text-base text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </ProjectLeft>

                  <ProjectRight progress={progress}>
                    <div className="hover:scale-[102%] hover:cursor-pointer transition transform duration-100 ease-out">
                      <Image
                        className="w-screen h-auto mx-auto md:w-[95vw] lg:w-[50vw] rounded-md"
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
