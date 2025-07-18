import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { Badge } from "@/components/ui/badge";
import { CustomTooltip } from "@/components/ui/tooltip";
import { PROJECTS_DATA } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdPreview } from "react-icons/md";
import { SiGithub } from "react-icons/si";

type ProjectCardProps = (typeof PROJECTS_DATA)[number];

const ProjectCard: FC<ProjectCardProps> = ({
  deployedLink,
  githubLink,
  description,
  shortDescription,
  title,
  imageSrc,
  techStack,
}) => {
  return (
    <div className="bg-slate-900 border-[1px] border-gray-800 text-white hover:scale-[102%] transition-all duration-200 rounded-md">
      <SlideUpWhenVisible>
        <div className="rounded-md">
          <Image
            src={imageSrc}
            className="w-full rounded-sm object-contain max-h-96"
            alt={title}
            width={400}
            height={400}
          />
        </div>
        <div className="px-2 pb-2">
          <div className="p-1 font-semibold md:p-2 flex justify-between">
            <p>{title}</p>
            <div className="flex items-center gap-x-2">
              {githubLink && (
                <Link href={githubLink}>
                  <CustomTooltip content="View source code">
                    <div>
                      <SiGithub className="w-5 hover:cursor-pointer h-5" />
                    </div>
                  </CustomTooltip>
                </Link>
              )}

              {deployedLink && (
                <Link href={deployedLink}>
                  <CustomTooltip content="View deployed">
                    <div>
                      <MdPreview className="w-6 hover:cursor-pointer h-6" />
                    </div>
                  </CustomTooltip>
                </Link>
              )}
            </div>
          </div>
          <div className="mb-2 px-1 flex gap-2 flex-wrap md:px-2">
            {techStack?.map((stack) => (
              <Badge
                key={stack.title}
                variant="secondary"
                className="text-[--color]"
                style={{
                  // @ts-ignore
                  "--color": stack.color,
                }}
              >
                {stack.title}
              </Badge>
            ))}
          </div>

          <p
            className={cn(
              "text-sm text-gray-400 p-1 md:p-2 text-ellipsis font-mono",
            )}
          >
            {shortDescription}
          </p>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export default ProjectCard;
