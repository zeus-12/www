import Layout from "@/components/layout";
import Link from "@/components/link";
import Mdx from "@/components/mdx";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { Other, allOthers } from "contentlayer/generated";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";

const Now: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  md,
}) => {
  return (
    <SlideUpWhenVisible>
      <Layout className="max-w-3xl mx-auto">
        <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
          Now
        </p>

        <h2 className="text-gray-400">
          Inspired by{" "}
          <Link href="https://nownownow.com/about">nownownow.com</Link>
        </h2>

        <div className="mt-4">
          <Mdx code={md?.body?.code} />
        </div>
      </Layout>
    </SlideUpWhenVisible>
  );
};
export default Now;

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ md: Other }>> {
  const md = allOthers.find((item) => item.slug === "now");

  if (!md) return { notFound: true };

  return { props: { md } };
}
