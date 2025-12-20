import PostCard from "@/components/post-card";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { allContents } from "contentlayer/generated";
import { NextSeo } from "next-seo";

const Posts = () => {
  return (
    <>
      <NextSeo
        title="Blogs | Vishnu"
        description="A collection of my blog posts."
      />
      <SlideUpWhenVisible>
        <div className="pt-8 pb-8 px-4 lg:px-24 lg:py-16">
          <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
            Posts
          </p>
          <p className="text-gray-400">Blog posts.</p>
          <div className="flex flex-col gap-3 w-full mt-8">
            {allContents
              ?.sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
              .map((post) => (
                <PostCard
                  slug={post.slug}
                  key={post.title}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};
export default Posts;
