import { SiGithub } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { Image } from "@chakra-ui/react";

const ProjectCard = () => {
    return (<div>
        <div className="bg-slate-900 border-gray-700 border p-2 w-[45vw] rounded-md">
            <div className="rounded-md">
                <Image src="/me.png" width='45vw' height='34vh' />
            </div>    
            <div className="flex justify-between">
                <p className="sm:text-xl md:text-3xl">Opinionmeter</p>
                <div className="flex items-center">

                    <SiGithub className="w-5 h-5"/>
                    <MdPreview className="w-6 h-6"/>
                </div>
            </div>
            <p className="text-gray-400">A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using natural langauge proessing concept called sentiment analysis. </p>
        </div>
    </div>);
}
 
export default ProjectCard;