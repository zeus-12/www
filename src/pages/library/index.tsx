import SlideUpWhenVisible from "@/hooks/SlideUpWhenVisible";

const Library = () => {
  // const allSnippetTitles = allSnippets.map((snippet) => snippet.title);

  return (
    <SlideUpWhenVisible>
      <div className="pt-8 px-8 lg:px-24 lg:py-16">
        <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
          Library
        </p>

        <p className="text-gray-400">
          Some collection of code snippets that I put for easy access, feel free
          to reuse!
        </p>
      </div>
    </SlideUpWhenVisible>
  );
};
export default Library;

// for library/[slug]

// // @ts-ignore

// // import { Snippets, allSnippets } from "contentlayer/generated";
// import {
//   GetStaticPropsContext,
//   GetStaticPropsResult,
//   InferGetStaticPropsType,
//   NextPage,
// } from "next";
// import { getMDXComponent } from "next-contentlayer/hooks";

// const CodeSnippet: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
//   snippet,
// }) => {
//   const Content = getMDXComponent(snippet.body.code);

//   return (
//     <div>
//       {/* hiii {query.slug} */}
//       <Content />
//     </div>
//   );
// };
// export default CodeSnippet;

// export async function getStaticPaths() {
//   const paths = allSnippets.map((snippet) => snippet.url);
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({
//   params,
// }: GetStaticPropsContext): Promise<
//   GetStaticPropsResult<{ snippet: Snippets }>
// > {
//   const snippet = allSnippets.find(
//     (snippet) => snippet._raw.flattenedPath === params?.slug
//   );

//   return typeof snippet === "undefined"
//     ? {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       }
//     : {
//         props: {
//           snippet,
//         },
//       };
// }
