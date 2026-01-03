import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export function SpotlightBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl p-[1px] bg-zinc-700/30">
      <Spotlight
        className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400"
        size={124}
      />
      <div
        className={cn(
          "relative h-full w-full rounded-xl",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
