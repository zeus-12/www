import SnippetCard from "@/components/SnippetCard";
import SlideUpWhenVisible from "@/hooks/SlideUpWhenVisible";
import { allSnippets } from "contentlayer/generated";
import { NextSeo } from "next-seo";

const Library = () => {
  return (
    <>
      <NextSeo
        title="Snippets"
        description="A collection of code snippets that I put for easy access. Feel free to reuse!"
      />
      <SlideUpWhenVisible>
        <div className="pt-8 pb-8 px-4 lg:px-24 lg:py-16">
          <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
            Snippets
          </p>
          <p className="text-gray-400">
            A collection of code snippets that I put for easy access. Feel free
            to reuse!
          </p>

          <div className="grid gap-4 w-full mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {allSnippets?.map((snippet) => (
              <SnippetCard
                slug={snippet.slug}
                key={snippet.title}
                techStack={snippet.techStack}
                title={snippet.title}
                description={snippet.description}
              />
            ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};
export default Library;
