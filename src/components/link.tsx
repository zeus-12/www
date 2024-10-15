import React, { DetailedHTMLProps, AnchorHTMLAttributes, Ref } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  ref?: Ref<HTMLAnchorElement>;
  monochrome?: boolean;
};

const Link = ({
  href,
  className,
  children,
  monochrome,
  ...rest
}: LinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={cn(
          monochrome
            ? "hover:text-gray-400"
            : "hover:text-black focus:text-secondary active:text-secondary hover:bg-secondary underline decoration-secondary transition-colors duration-150 ease-in-out",
          className
        )}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }
  return (
    <a
      className={cn(
        monochrome
          ? "hover:text-gray-400"
          : "hover:text-black focus:text-secondary active:text-secondary hover:bg-secondary underline decoration-secondary transition-colors duration-150 ease-in-out",
        className
      )}
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
