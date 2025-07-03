import PostCard from "@/components/post-card";
import SlideUpWhenVisible from "@/components/slide-up-when-visible";
import { allContents } from "contentlayer/generated";
import { NextSeo } from "next-seo";

const Posts = () => {
  return (
    <>
      <NextSeo
        title="Blogs, Snippets, and more | Vishnu"
        description="A collection of my blog posts and snippets."
      />
      <SlideUpWhenVisible>
        <div className="pt-8 pb-8 px-4 lg:px-24 lg:py-16">
          <p className="text-3xl lg:text-5xl lg:mb-2 font-semibold tracking-tight">
            Posts
          </p>
          <p className="text-gray-400">Blog posts and snippets.</p>
          <div className="grid gap-4 w-full mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {allContents?.map((post) => (
              <PostCard
                slug={post.slug}
                key={post.title}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </>
  );
};
export default Posts;
