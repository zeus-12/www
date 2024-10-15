import { TECH_STACK } from "@/lib/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Badge } from "@/components/ui/badge";

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
      {techStack?.map((stack) => (
        <Badge
          variant="secondary"
          className="text-[--color] "
          style={{
            // @ts-ignore
            "--color": TECH_STACK[stack].color,
          }}
          key={stack}
        >
          {TECH_STACK[stack].title}
        </Badge>
      ))}
      <div>
        <p className="text-xl font-semibold text-sky-200">{title}</p>
        <p className={cn("text-gray-400", fontSans.className)}>{description}</p>
      </div>
    </Link>
  );
};
export default SnippetCard;
