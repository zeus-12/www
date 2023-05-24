import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from '@/components/Link';
import Image from 'next/image';

const MDXComponents = {
  img: (props: any) => <Image {...props} />,
  a: (props: any) => <Link {...props} />,
};

interface MdxProps {
  code: string;
  components?: typeof MDXComponents;
}

const Mdx = ({ code, components }: MdxProps) => {
  const MDXContent = useMDXComponent(code);
  return (
    <article className='prose dark:prose-invert text-gray-300git mb-8'>
      <MDXContent components={{ ...MDXComponents, ...components }} />
    </article>
  );
};

export default Mdx;
