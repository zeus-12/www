import { Burger, Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const linkElements = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const LinkElements = ({ isDrawer }: { isDrawer?: boolean }) => {
  const { asPath: path } = useRouter();

  return (
    <div
      className={`flex gap-8 ${
        isDrawer ? "flex flex-col gap-8" : "flex gap-8"
      }`}
    >
      {linkElements.map((link) => (
        <Link key={link.name} href={link.href} passHref>
          <p
            className={`px-2 py-1 rounded-md cursor-pointer text-center hover:bg-gray-900 
            ${path === link.href ? "text-gray-300" : "text-gray-600"}
          `}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

const Logo = ({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Link href="/" passHref>
    <div
      onClick={() => setOpened(false)}
      className="flex items-center hover:cursor-pointer"
    >
      <p className="text-3xl font-bold">
        <span className="text-gray-400">&#x0007B;</span>V
        <span className="text-gray-400">&#x0007D;</span>
      </p>
    </div>
  </Link>
);

const NavbarDrawer = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div>
    <Drawer
      className="pt-4 px-2 bg-black"
      onClick={() => setOpened(false)}
      opened={opened}
      position="top"
      size="100vh"
      onClose={() => setOpened(false)}
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
      withCloseButton={false}
      zIndex={20}
    >
      <div className="text-3xl pt-16">
        <LinkElements isDrawer={true} />
      </div>
    </Drawer>
  </div>
);

export default function Navbar() {
  //for the burger & drawer
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <div className="px-6 border-b-[1px] border-gray-800 w-screen h-16 bg-black fixed top-0 flex justify-between items-center z-50 ">
        <Logo setOpened={setOpened} />
        <div className="sm:hidden">
          <Burger
            color="#26c6da"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>

        {/* so that the burger icon remains in the case--- you open the burger icon then increases the size */}
        {opened && (
          <div className="hidden sm:flex">
            <Burger
              color="#26c6da"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
        )}
        {!opened && (
          <div className="text-gray-300 text-lg font-medium hidden xl:gap-8 sm:flex gap-8">
            <LinkElements />
          </div>
        )}
      </div>

      <div className="absolute top-10">
        <NavbarDrawer setOpened={setOpened} opened={opened} />
      </div>
    </div>
  );
}