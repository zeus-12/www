import Link from "next/link";
import { SpotlightBorder } from "./ui/spotlight-border";

interface PostCardProps {
  techStack?: string[];
  title: string;
  description: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, slug }) => {
  return (
    <SpotlightBorder>
      <Link
        href={`/posts/${slug}`}
        className="text-white inline-flex h-full rounded-md px-2 py-4 md:px-4 md:py-6 items-center w-full"
      >
        <div>
          <p className="text-xl font-semibold text-sky-200">{title}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </Link>
    </SpotlightBorder>
  );
};
export default PostCard;
