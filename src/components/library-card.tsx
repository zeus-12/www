import Link from "next/link";
import { SpotlightBorder } from "./spotlight-border";

interface LibraryCardProps {
  techStack?: string[];
  title: string;
  description: string;
  slug: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({
  title,
  description,
  slug,
}) => {
  return (
    <SpotlightBorder>
      <Link
        href={`/library/${slug}`}
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
export default LibraryCard;
