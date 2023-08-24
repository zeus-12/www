import { Badge } from '@mantine/core';
import { TECH_STACK } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';
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
      {/* bg-[#021712] */}
      <div className='bg-[#07273C] rounded-md p-4 w-full inline-flex h-full hover:scale-[102%] ease-in-out transition duration-200'>
        {techStack?.map((stack) => (
          <Badge color={TECH_STACK[stack].color} variant='light' key={stack}>
            {TECH_STACK[stack].title}
          </Badge>
        ))}
        <div>
          {/* text-[#46D279] */}
          <p className='text-xl font-semibold text-sky-200'>{title}</p>
          <p className={cn('text-gray-400', fontSans.className)}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default SnippetCard;
