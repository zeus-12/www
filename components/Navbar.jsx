import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  DrawerHeader,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkElements = (
    <>
      <Link href="/" passHref>
        <p className="px-2 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
          Home
        </p>
      </Link>

      <Link href="/projects" passHref>
        <p className="px-2 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
          Project
        </p>
      </Link>
      <Link href="#contact" passHref>
        <p className="px-2 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
          Contact
        </p>
      </Link>
    </>
  );

  const Logo = (
    <div className="flex items-center">
      <p className="text-3xl font-bold">
        <span className="text-gray-400">&#x0007B;</span>V
        <span className="text-gray-400">&#x0007D;</span>
      </p>
    </div>
  );

  const NavbarDrawer = (
    <div>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black" className="flex justify-center ">
          <DrawerHeader className="border-b-[1px] border-gray-800 flex items-center">
            <div className="">{Logo}</div>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody onClick={onClose}>
            <div className="text-2xl space-y-4">{LinkElements}</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );

  return (
    <>
      <div className="px-6 border-b-[1px] border-gray-800 w-screen h-16 bg-black fixed top-0 flex justify-between items-center ">
        {Logo}

        <div className="sm:hidden">
          <Button colorScheme onClick={onOpen}>
            <AiOutlineMenu className="w-7 h-7" />
          </Button>
        </div>
        <div className="text-gray-300 text-lg font-medium hidden xl:gap-8 sm:flex gap-8">
          {LinkElements}
        </div>
      </div>
      {NavbarDrawer}
    </>
  );
}
