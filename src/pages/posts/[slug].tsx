import Mdx from "@/components/mdx";
import { allContents, Content } from "contentlayer/generated";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineSwapLeft } from "react-icons/ai";

const CodeSnippet: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
}) => {
  return (
    <>
      <NextSeo title={snippet?.title} description={snippet?.description} />
      <div className="max-w-3xl mx-auto px-6 sm:px-8 mb-24">
        <h1 className="text-4xl font-semibold mt-12 md:mt-20">{snippet?.title}</h1>
        <p className="text-gray-400 mt-1">{snippet?.description}</p>

        <hr className="border-gray-700 my-3" />
        <Mdx code={snippet?.body?.code} />
        <div className="border-gray-700 border-[0.2px]" />
        <Link href="/posts" className="flex justify-center mt-12 mb-16">
          <div className="flex gap-2 hover:bg-gray-800 px-4 py-2 rounded-md hover:cursor-pointer">
            <AiOutlineSwapLeft className="w-5 h-5" />
            <p className="text-sm">See all posts</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default CodeSnippet;

export async function getStaticPaths() {
  const paths = allContents.map((snippet) => ({
    params: { slug: snippet.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ snippet: Content }>> {
  const snippet = allContents.find((snippet) => snippet.slug === params?.slug);

  if (!snippet) return { notFound: true };

  return { props: { snippet } };
}
