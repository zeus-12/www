import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "@/components/Link";
import Image from "next/image";

const MDXComponents = {
  img: (props: any) => <Image {...props} alt={props.alt} />,
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-100">
      {props.children}
    </h3>
  ),
  p: (props: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-200">
      {props.children}
    </p>
  ),
  li: (props: any) => (
    <li className="leading-7 text-gray-300">{props.children}</li>
  ),
};

interface MdxProps {
  code: string;
  components?: typeof MDXComponents;
}

const Mdx = ({ code, components }: MdxProps) => {
  const MDXContent = useMDXComponent(code);
  return (
    <article className="mb-8">
      <MDXContent components={{ ...MDXComponents, ...components }} />
    </article>
  );
};

export default Mdx;
