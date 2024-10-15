import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("pt-8 pb-8 px-4 lg:px-24 lg:py-16", className)}>
      {children}
    </div>
  );
};
export default Layout;
