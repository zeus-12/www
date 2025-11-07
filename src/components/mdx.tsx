import Link from "@/components/ui/link";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { ImageProps } from "next/image";
import { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type HrProps = ComponentPropsWithoutRef<"hr">;
type SpanProps = ComponentPropsWithoutRef<"span">;

const MDXComponents = {
  img: (props: any) => <Image {...props} alt={props.alt} />,
  Image: (props: ImageProps) => <Image {...props} />,
  Link: (props: any) => <Link {...props} />,
  a: (props: AnchorProps) => (
    <Link underline textColorClassName="text-cyan-500" {...props} />
  ),
  h1: (props: HeadingProps) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  ),
  h2: (props: HeadingProps) => (
    <h2 className="scroll-m-20 pb-1 text-xl font-semibold tracking-tight transition-colors first:mt-0 mt-8">
      {props.children}
    </h2>
  ),
  h3: (props: HeadingProps) => (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-100">
      {props.children}
    </h3>
  ),
  h4: (props: HeadingProps) => (
    <h4 className="scroll-m-20 text-base tracking-tight text-gray-300 mb-4">
      {props.children}
    </h4>
  ),

  p: (props: ParagraphProps) => (
    <p
      {...props}
      className={cn(
        "font-serif leading-7 [&:not(:first-child)]:mt-6 text-gray-200 text-base/7 md:text-lg/8",
        props.className,
      )}
    >
      {props.children}
    </p>
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="leading-7 md:list-disc text-gray-300">{props.children}</li>
  ),
  hr: (props: HrProps) => <hr className="my-8 border-gray-800" />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-[3px] border-gray-300 dark:border-zinc-600 pl-4 text-gray-700 dark:text-zinc-300"
      {...props}
    />
  ),
  Youtube: ({ id }: { id: string }) => (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  ),

  Video: ({
    src,
    ...props
  }: {
    src: string;
    props: React.VideoHTMLAttributes<HTMLVideoElement>;
  }) => (
    <video
      controls
      autoPlay
      muted
      playsInline
      {...props}
      className="max-w-full"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ),
  span: (props: SpanProps) => <span {...props} />,
};

interface MdxProps {
  code: string;
  components?: typeof MDXComponents;
}

const Mdx = ({ code, components }: MdxProps) => {
  const MDXContent = useMDXComponent(code);
  return (
    <article className="mb-8 mt-6">
      <MDXContent components={{ ...MDXComponents, ...components }} />
    </article>
  );
};

export default Mdx;
