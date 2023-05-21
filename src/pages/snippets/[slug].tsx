import { Snippets, allSnippets } from 'contentlayer/generated';
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';

const CodeSnippet: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
}) => {
  const Content = getMDXComponent(snippet?.body?.code);

  return (
    <div className='max-w-3xl mx-auto px-6 sm:px-8'>
      <h1 className='text-4xl font-semibold mt-24'>{snippet?.title}</h1>
      <p className='text-gray-400'>{snippet?.description}</p>

      <hr className='border-gray-600 mt-2 mb-4' />
      <div className='text-gray-300'>
        <Content />
      </div>
    </div>
  );
};
export default CodeSnippet;

export async function getStaticPaths() {
  const snippetSlugs = allSnippets.map((snippet) => snippet.slug);
  const paths = snippetSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<
  GetStaticPropsResult<{ snippet: Snippets }>
> {
  const snippet = allSnippets.find((snippet) => snippet.slug === params?.slug);

  if (!snippet) return { notFound: true };

  return { props: { snippet } };
}
