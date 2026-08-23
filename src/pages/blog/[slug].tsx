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

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
}) => {
  return (
    <>
      <NextSeo title={snippet?.title} description={snippet?.description} />
      <div className="mx-auto mb-24 max-w-2xl px-4 sm:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-12 md:mt-20">
          {snippet?.title}
        </h1>
        <p className="mt-1 text-sm text-gray-400 sm:text-base">
          {snippet?.description}
        </p>

        <hr className="border-gray-700 my-3" />
        <Mdx code={snippet?.body?.code} />
        <div className="border-gray-700 border-[0.2px]" />
        <Link href="/blog" className="flex justify-center mt-12 mb-16">
          <div className="flex gap-2 hover:bg-gray-800 px-4 py-2 rounded-md hover:cursor-pointer">
            <AiOutlineSwapLeft className="w-5 h-5" />
            <p className="text-sm">See all posts</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Post;

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
