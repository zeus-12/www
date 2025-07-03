import Link from "next/link";

interface LinkCardProps {
  link: string;
  children: React.ReactNode;
  title: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, children, title }) => {
  return (
    <Link href={link} passHref={true}>
      <div className="cursor-pointer inline-flex gap-1 items-center px-2 py-1 rounded-md bg-gray-900 hover:bg-gray-800 group text-sm md:text-md">
        {children}{" "}
        <span className="text-gray-300 group-hover:text-white">{title}</span>
      </div>
    </Link>
  );
};

export default LinkCard;
