import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

let navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Snippets",
    href: "/snippets",
  },
  {
    name: "Now",
    href: "/now",
  },
];

const Navbar = () => {
  // const { theme, setTheme } = useTheme();
  // const [isMounted, setIsMounted] = useState(false);
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const router = useRouter();
  // const [effect, setEffect] = useState(false);

  useEffect(() => {
    // setIsMounted(true);

    const path = window.location.pathname;
    const currentPath = path.split("/")[1];
    const currentTab = navItems.findIndex(
      (tab) => tab.href === `/${currentPath}`
    );
    setActiveTabIndex(currentTab);
  }, [router.pathname]);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
      <div className="relative mx-auto flex h-full items-center rounded-md border border-neutral-400/20 bg-white/40 backdrop-blur-md dark:border-neutral-600/30 dark:bg-black/40 dark:text-white">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-[4px] p-1 transition-all duration-300 sm:p-1"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-xl bg-neutral-200 backdrop-blur-xl dark:bg-neutral-800" />
        </span>
        {navItems.map((tab, index) => {
          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className="font-base inline-flex cursor-pointer items-center justify-center rounded-full px-4 text-center text-sm transition hover:text-black/80 dark:hover:text-white/80 sm:text-base"
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
