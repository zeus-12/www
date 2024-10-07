import React, { DetailedHTMLProps, AnchorHTMLAttributes, Ref } from "react";
import NextLink from "next/link";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  ref?: Ref<HTMLAnchorElement>;
};

const Link = ({ href, className, children, ...rest }: LinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={`hover:text-black focus:text-black active:text-black hover:bg-primary underline decoration-primary transition-colors duration-150 ease-in-out ${className}`}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }
  return (
    <a
      className={`hover:text-black focus:text-black active:text-black hover:bg-primary underline decoration-primary transition-colors duration-150 ease-in-out ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
