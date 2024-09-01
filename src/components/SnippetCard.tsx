import { Badge, Card } from "@mantine/core";
import { TECH_STACK } from "@/configs/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
interface SnippetCardProps {
  techStack?: string[];
  title: string;
  description: string;
  slug: string;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  techStack,
  title,
  description,
  slug,
}) => {
  return (
    <Link
      href={`/snippets/${slug}`}
      className="bg-gray-900 border-[1px] border-gray-800 text-white hover:scale-[102%] transition-all duration-200 rounded-md px-2 py-4 md:px-4 md:py-6 w-full inline-flex h-full ease-in-out"
    >
      {/* bg-[#021712] */}
      {techStack?.map((stack) => (
        <Badge color={TECH_STACK[stack].color} variant="light" key={stack}>
          {TECH_STACK[stack].title}
        </Badge>
      ))}
      <div>
        {/* text-[#46D279] */}
        <p className="text-xl font-semibold text-sky-200">{title}</p>
        <p className={cn("text-gray-400", fontSans.className)}>{description}</p>
      </div>
    </Link>
  );
};
export default SnippetCard;
