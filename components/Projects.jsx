import { TileWrapper, TileBackground, Tile } from "./Tile";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./Project";
import Image from "next/image";
import { Tooltip } from "@mantine/core";

const Projects = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <ProjectBackground />
      </TileBackground>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <ProjectLeft progress={progress}>
                <div>
                  <span className="text-cyan-400 ">#1</span> Atmora{" "}
                  <Tooltip
                    label="Work in Progress"
                    // color="black"
                    position="bottom"
                    withArrow
                  >
                    <span className="text-orange-300 text-3xl">WIP</span>
                  </Tooltip>
                </div>
              </ProjectLeft>

              <ProjectRight progress={progress}>
                <div className="hover:scale-[102%] hover:cursor-pointer transition transform duration-100 ease-out">
                  <Image
                    className="w-screen h-auto mx-auto md:w-[95vw] lg:w-[50vw] rounded-md"
                    width={500}
                    height={500}
                    src="/atmora.png"
                    alt="Atmora"
                  />
                </div>
              </ProjectRight>
            </div>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <ProjectLeft progress={progress}>
                <a href="https://www.freemediaheckyeah.ml">
                  <p>
                    <span className="text-cyan-400">#2 </span>FMHY
                  </p>
                </a>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="hover:scale-[102%] hover:cursor-pointer transition transform duration-100 ease-out">
                  <a href="https://www.freemediaheckyeah.ml">
                    <Image
                      className="w-screen h-auto mx-auto md:w-[95vw] lg:w-[50vw] rounded-md"
                      width={500}
                      height={500}
                      src="/fmhy.png"
                      alt="fmhy"
                    />
                  </a>
                </div>
              </ProjectRight>
            </div>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
              <ProjectLeft progress={progress}>
                <a href="https://www.deankuriakose.in">
                  <p>
                    <span className="text-cyan-400">#3 </span>MP Portal
                  </p>
                </a>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="hover:scale-[102%] hover:cursor-pointer transition transform duration-100 ease-out">
                  <a href="https://www.deankuriakose.in">
                    <Image
                      className="w-screen h-auto mx-auto md:w-[95vw] lg:w-[50vw] rounded-md"
                      width={500}
                      height={500}
                      src="/mpportal.png"
                      alt="mp portal"
                    />
                  </a>
                </div>
              </ProjectRight>
            </div>
          )}
        />
      </div>
    </TileWrapper>
  );
};

export default Projects;
