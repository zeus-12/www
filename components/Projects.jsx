import { TileWrapper, TileBackground, Tile } from "./Tile";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./Project";
import Image from "next/image";
import { Tooltip } from "@mantine/core";
// import Link from "next/link";
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
                <div className="hover:scale-105 hover:cursor-pointer transition transform duration-100 ease-out">
                  <Image
                    className="rounded-sm"
                    width="2880px"
                    height="1800px"
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
                <div className="hover:scale-105 hover:cursor-pointer transition transform duration-100 ease-out">
                  <a href="https://www.freemediaheckyeah.ml">
                    <Image
                      className="rounded-sm"
                      width="2880px"
                      height="1800px"
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
                <div className="hover:scale-105 hover:cursor-pointer transition transform duration-100 ease-out">
                  <a href="https://www.deankuriakose.in">
                    <Image
                      className="rounded-sm"
                      width="2880px"
                      height="1800px"
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
