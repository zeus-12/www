import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, Ref } from "react";

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
            : "hover:text-black focus:text-cyan active:text-cyan hover:bg-cyan underline decoration-cyan underline-offset-4 transition-colors duration-150 ease-in-out",
          className,
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
          : "hover:text-black focus:text-cyan active:text-cyan hover:bg-cyan underline decoration-cyan underline-offset-4 transition-colors duration-150 ease-in-out",
        className,
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
