import { SiGithub } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <Card
      className="bg-slate-900 border-[1px] border-gray-800 p-0 text-white"
      shadow="sm"
    >
      <div className="group relative aspect-[45/22] rounded-lg">
        {/* todo : remove domain from nextconfig */}
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          layout="fill"
          // width={160}
          // height={90}
          className="rounded-lg"
        />
      </div>
      {/* <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        height={160}
        alt="Norway"
      /> */}

      <div className="p-1 md:p-2 flex justify-between">
        <p>Opiniometer</p>
        <div className="flex items-center gap-x-2">
          <SiGithub className="w-5 hover:cursor-pointer h-5" />
          <MdPreview className="w-6 hover:cursor-pointer h-6" />
        </div>
      </div>
      <div className="mb-2 px-1 md:px-2">
        <Badge color="pink" variant="light">
          Javascript
        </Badge>
      </div>

      <p className="text-gray-400 p-1 md:p-2">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </p>
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
