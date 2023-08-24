import Link from '@/components/Link';
import Mdx from '@/components/Mdx';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { Other, allOthers } from 'contentlayer/generated';
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';

const Now: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  md,
}) => {
  return (
    <SlideUpWhenVisible>
      <div className='flex justify-center'>
        <div className='max-w-3xl mx-auto px-6 sm:px-8'>
          <h1 className='text-4xl font-bold mt-24'>Now</h1>

          <h2 className='text-gray-400'>
            Inspired by{' '}
            <Link href='https://nownownow.com/about'>nownownow.com</Link>
          </h2>

          <div className='mt-4 text-xl'>
            <Mdx code={md?.body?.code} />
          </div>
        </div>
      </div>
    </SlideUpWhenVisible>
  );
};
export default Now;

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ md: Other }>> {
  const md = allOthers.find((item) => item.slug === 'now');

  if (!md) return { notFound: true };

  return { props: { md } };
}
