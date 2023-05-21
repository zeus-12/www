import Link from 'next/link';

interface LinkboxProps {
  link: string;
  children: React.ReactNode;
  title: string;
}

const LinkBox: React.FC<LinkboxProps> = ({ link, children, title }) => {
  return (
    <Link href={link} passHref={true}>
      <div className='cursor-pointer inline-flex gap-1 items-center px-2 py-1 rounded-md bg-gray-900 hover:bg-gray-800 group'>
        {children}{' '}
        <span className='text-gray-300 group-hover:text-white'>{title}</span>
      </div>
    </Link>
  );
};

export default LinkBox;
