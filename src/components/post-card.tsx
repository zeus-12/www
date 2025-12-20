import Link from "next/link";
import { SpotlightBorder } from "./ui/spotlight-border";

interface PostCardProps {
  techStack?: string[];
  title: string;
  description: string;
  slug: string;
  date?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  slug,
  date,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <SpotlightBorder>
      <Link href={`/posts/${slug}`} className="group block p-4 rounded-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-white group-hover:text-sky-200 transition-colors mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 font-mono">
              {description}
            </p>
          </div>
          {formattedDate && (
            <p className="shrink-0 text-gray-400 hidden sm:block">
              {formattedDate}
            </p>
          )}
        </div>
      </Link>
    </SpotlightBorder>
  );
};
export default PostCard;
