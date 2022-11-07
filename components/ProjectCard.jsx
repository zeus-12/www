import { SiGithub } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  deployedLink,
  githubLink,
  description,
  title,
  imageSrc,
}) => {
  return (
    <Card
      className="bg-slate-900 border-[1px] border-gray-800 p-0 text-white hover:scale-[102%] transition-all duration-200"
      shadow="sm"
    >
      <div className="group relative aspect-[45/22] rounded-lg">
        <Image
          src={imageSrc}
          // loader={<div className="bg-blue-400 ">asdf</div>}
          layout="fill"
          // width={160}
          // height={90}
          className="rounded-lg"
        />
      </div>

      <div className="p-1 md:p-2 flex justify-between">
        <p>{title}</p>
        <div className="flex items-center gap-x-2">
          {githubLink && (
            <Link href={githubLink}>
              <SiGithub className="w-5 hover:cursor-pointer h-5" />
            </Link>
          )}

          {deployedLink && (
            <Link href={deployedLink}>
              <MdPreview className="w-6 hover:cursor-pointer h-5" />
            </Link>
          )}
        </div>
      </div>
      <div className="mb-2 px-1 md:px-2">
        <Badge color="pink" variant="light">
          Javascript
        </Badge>
      </div>

      <p className="text-gray-400 p-1 md:p-2 text-ellipsis">{description}</p>
    </Card>

    // <div className="min-h-[320px] max-h-[520px]">
    // <div className="bg-slate-900 border-gray-700 border sm: p-2 rounded-md">
    //     <div className="rounded-md">
    //         <img src="/me.png" alt='todo' height={1250} width={600} />

    //     </div>
    //     <div className="flex justify-between">
    //         <p className="sm:text-xl md:text-3xl">Opinionmeter</p>
    //         <div className="flex items-center">

    //             <SiGithub className="w-5 h-5"/>
    //             <MdPreview className="w-6 h-6"/>
    //         </div>
    //     </div>
    //     {/* techstack used */}
    //     <p className="text-gray-400">A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using natural langauge proessing concept called sentiment analysis. </p>
    // </div>
    // </div>
  );
};

export default ProjectCard;
