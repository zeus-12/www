import Link from 'next/link';
import { IoIosPaper } from 'react-icons/io';

const ResumeLinkCard = () => {
  return (
    <Link
      href='/resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='cursor-pointer inline-flex gap-1 items-center px-2 py-1 rounded-md bg-gray-900 hover:bg-gray-700'
    >
      <IoIosPaper className='fill-cyan-400' />
      Resume
    </Link>
  );
};
export default ResumeLinkCard;
