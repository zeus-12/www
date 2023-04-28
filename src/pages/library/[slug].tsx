import { Snippets, allSnippets } from "contentlayer/generated";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { getMDXComponent } from "next-contentlayer/hooks";

const CodeSnippet: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippet,
}) => {
  const Content = getMDXComponent(snippet.body.code);

  return (
    <div>
      {/* hiii {query.slug} */}
      <Content />
    </div>
  );
};
export default CodeSnippet;

export async function getStaticPaths() {
  const paths = allSnippets.map((snippet) => snippet.url);
  console.log(paths);
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
  const snippet = allSnippets.find(
    (snippet) => snippet._raw.flattenedPath === params?.slug
  );

  return typeof snippet === "undefined"
    ? {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    : {
        props: {
          snippet,
        },
      };
}
