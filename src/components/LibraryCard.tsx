import { Badge } from '@mantine/core';
import { TECH_STACK } from '@/utils/constants';
import Link from 'next/link';
interface LibraryCardProps {
  techStack?: string[];
  title: string;
  description: string;
  slug: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({
  techStack,
  title,
  description,
  slug,
}) => {
  return (
    <Link href={`/snippets/${slug}`}>
      <div className='bg-gray-900 rounded-md p-4 w-full inline-flex'>
        {techStack?.map((stack) => (
          <Badge color={TECH_STACK[stack].color} variant='light' key={stack}>
            {TECH_STACK[stack].title}
          </Badge>
        ))}
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default LibraryCard;
