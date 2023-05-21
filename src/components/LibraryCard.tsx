import { Badge } from '@mantine/core';
import { TECH_STACK } from '@/utils/constants';
interface LibraryCardProps {
  techStack?: string[];
  title: string;
  description: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({
  techStack,
  title,
  description,
}) => {
  return (
    <div className='bg-gray-900 rounded-md p-4 inline-flex'>
      {techStack?.map((stack) => (
        <Badge color={TECH_STACK[stack].color} variant='light' key={stack}>
          {TECH_STACK[stack].title}
        </Badge>
      ))}

      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
export default LibraryCard;
