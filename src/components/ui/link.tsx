import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, Ref } from "react";
import UnderlineToBackground from "./underline-to-background";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  ref?: Ref<HTMLAnchorElement>;
  underline?: boolean;
  textColorClassName?: string;
};

const Link = ({
  href,
  className,
  textColorClassName = "text-cyan-700",
  children,
  underline,
  ...rest
}: LinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  const body = underline ? (
    <UnderlineToBackground
      className={textColorClassName}
      targetTextColor="white"
      underlineHeightRatio={0.1}
      underlinePaddingRatio={0.01}
    >
      {children}
    </UnderlineToBackground>
  ) : (
    children
  );

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={cn(
          "hover:text-gray-400",

          className,
        )}
        {...rest}
      >
        {body}
      </NextLink>
    );
  }
  return (
    <a
      className={cn("hover:text-gray-400", className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {body}
    </a>
  );
};

export default Link;
