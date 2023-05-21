import { Badge } from '@mantine/core';
import { TECH_STACK } from '@/utils/constants';
import Link from 'next/link';
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
    <Link href={`/snippets/${slug}`}>
      <div className='bg-gray-900 rounded-md p-4 w-full inline-flex h-full hover:scale-[102%] ease-in-out transition duration-200'>
        {techStack?.map((stack) => (
          <Badge color={TECH_STACK[stack].color} variant='light' key={stack}>
            {TECH_STACK[stack].title}
          </Badge>
        ))}
        <div>
          <p className='text-xl font-semibold'>{title}</p>
          <p className='text-gray-400'>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default SnippetCard;
