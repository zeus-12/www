import { SiGithub } from "react-icons/si";
import { MdPreview, MdTableView } from "react-icons/md";
import { Card, Badge, Tooltip } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  deployedLink?: string;
  githubLink?: string;
  description: string;
  title: string;
  imageSrc: string;
  techStack?: {
    title: string;
    color: string;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  deployedLink,
  githubLink,
  description,
  title,
  imageSrc,
  techStack,
}) => {
  return (
    <Card
      className="bg-slate-900 border-[1px] border-gray-800 p-0 text-white hover:scale-[102%] transition-all duration-200"
      shadow="sm"
    >
      <div className="relative rounded-md">
        <Image
          src={imageSrc}
          className="w-full rounded-lg object-contain max-h-96"
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className="px-2">
        <div className="p-1 font-semibold md:p-2 flex justify-between">
          <p>{title}</p>
          <div className="flex items-center gap-x-2">
            {githubLink && (
              <Link href={githubLink}>
                <Tooltip
                  label="View source code"
                  color="dark"
                  position="bottom"
                  transitionProps={{
                    transition: "scale-y",
                  }}
                  withArrow
                >
                  <div>
                    <SiGithub className="w-5 hover:cursor-pointer h-5" />
                  </div>
                </Tooltip>
              </Link>
            )}

            {deployedLink && (
              <Link href={deployedLink}>
                <Tooltip
                  color="dark"
                  position="bottom"
                  withArrow
                  transitionProps={{
                    transition: "scale-y",
                  }}
                  label="View deployed"
                >
                  <div>
                    <MdPreview className="w-6 hover:cursor-pointer h-6" />
                  </div>
                </Tooltip>
              </Link>
            )}
          </div>
        </div>
        <div className="mb-2 px-1 flex gap-2 flex-wrap md:px-2">
          {techStack?.map((stack) => (
            <Badge color={stack.color} variant="light" key={stack.title}>
              {stack.title}
            </Badge>
          ))}
        </div>

        <p className="text-gray-400 p-1 md:p-2 text-ellipsis">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
