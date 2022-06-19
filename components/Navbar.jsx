import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  DrawerHeader,
  enableTransition,
  Box,
  Slide,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkElements = (
    <>
      <Link href="/" passHref>
        <p className="px-2 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
          Home
        </p>
      </Link>
      <Link href="#about" passHref>
        <p className="px-2 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
          About
        </p>
      </Link>
      <Link href="#projects" passHref>
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
            <div className="text-2xl">{LinkElements}</div>
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
        <div className="text-gray-300 hidden text-xl xl:gap-6 sm:flex gap-2">
          {LinkElements}
        </div>
      </div>
      {NavbarDrawer}
    </>
  );
}
