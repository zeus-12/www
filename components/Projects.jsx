import { TileWrapper, TileBackground, Tile } from "./Tile";
import { ProjectBackground, ProjectLeft, ProjectRight } from "./Project";
import Image from "next/image";
import { Tooltip } from "@mantine/core";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Mentora",
      description:
        "The All-in-one Academics app for students of the campus, where they could ask doubts, upload notes, apply for a study-buddy (or tutor), and also a detailed course page scraped from the Institute Department Websites.",
      src: "mentora",
      wip: false,
      deployedUrl: "https://mentora.cf",
    },
    {
      title: "MP Portal",
      description:
        "Grievance portal for an MP serving Idukki Constituency, benefiting 12 Lakhs+ citizens with their needs.",
      src: "mpportal",
      wip: false,
      deployedUrl: "",
    },
    {
      title: "FMHY",
      description: "Official website for the reddit community, FMHY.",
      src: "fmhy",
      wip: false,
      deployedUrl: "https://freemediaheckyeah.ml",
    },
  ];

  return (
    <TileWrapper numOfPages={projects.length}>
      <TileBackground>
        <ProjectBackground />
      </TileBackground>
      <div className="sticky top-0 h-screen overflow-hidden">
        {projects.map((project, i) => (
          <Link key={i} href={project.deployedUrl}>
            <Tile
              page={i}
              renderContent={({ progress }) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
                  <ProjectLeft progress={progress}>
                    <div>
                      <p className="capitalize text-4xl">
                        <span className="text-cyan-400 ">#{i + 1}</span>{" "}
                        {project.title}{" "}
                        {project.wip && (
                          <Tooltip
                            label="Work in Progress"
                            // color="black"
                            position="bottom"
                            withArrow
                          >
                            <span className="text-orange-300 text-3xl">
                              WIP
                            </span>
                          </Tooltip>
                        )}
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
                        src={`/${project.src}.png`}
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
