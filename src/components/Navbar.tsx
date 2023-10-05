// import { Burger, Drawer } from '@mantine/core';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const linkElements = [
//   {
//     name: 'Home',
//     href: '/',
//   },
//   {
//     name: 'Projects',
//     href: '/projects',
//   },
//   {
//     name: 'Snippets',
//     href: '/snippets',
//   },
//   {
//     name: 'Now',
//     href: '/now',
//   },
//   {
//     name: 'Contact',
//     href: '/#contact',
//   },
// ];

// const LinkElements = ({ isDrawer }: { isDrawer?: boolean }) => {
//   const { asPath: path } = useRouter();

//   return (
//     <div className={`flex ${isDrawer ? 'flex flex-col gap-2' : 'flex gap-8'}`}>
//       {linkElements.map((link) => (
//         <Link key={link.name} href={link.href} passHref>
//           <p
//             className={`lg:px-2 py-1 rounded-md cursor-pointer text-center hover:bg-gray-900
//             ${
//               (link.name === 'Home' && path === '/') ||
//               (link.name !== 'Home' && path.startsWith(link.href))
//                 ? 'text-gray-300'
//                 : 'text-gray-600'
//             } ${isDrawer ? 'py-3' : 'py-1'}
//           `}
//           >
//             {link.name}
//           </p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// const Logo = ({
//   setOpened,
// }: {
//   setOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }) => (
//   <Link href='/' passHref>
//     <div
//       onClick={() => setOpened(false)}
//       className='flex items-center hover:cursor-pointer'
//     >
//       <p className='text-3xl font-bold'>
//         <span className='text-gray-400'>&#x0007B;</span>V
//         <span className='text-gray-400'>&#x0007D;</span>
//       </p>
//     </div>
//   </Link>
// );

// const NavbarDrawer = ({
//   opened,
//   setOpened,
// }: {
//   opened: boolean;
//   setOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }) => (
//   <div>
//     <Drawer
//       className='bg-black'
//       opened={opened}
//       position='top'
//       size='100vh'
//       onClick={() => setOpened(false)}
//       onClose={() => setOpened(false)}
//       overlayProps={{
//         opacity: 0.55,
//         blur: 3,
//       }}
//       withCloseButton={false}
//       zIndex={20}
//       classNames={{
//         body: 'bg-black h-screen',
//       }}
//     >
//       <div className='text-3xl pt-16'>
//         <LinkElements isDrawer={true} />
//       </div>
//     </Drawer>
//   </div>
// );

// export default function Navbar() {
//   //for the burger & drawer
//   const [opened, setOpened] = useState(false);
//   const title = opened ? 'Close navigation' : 'Open navigation';

//   return (
//     <div>
//       <div className='px-6 border-b-[1px] border-gray-800 w-screen h-16 bg-black fixed top-0 flex justify-between items-center z-50 '>
//         <Logo setOpened={setOpened} />
//         <div className='sm:hidden'>
//           <Burger
//             color='#26c6da'
//             opened={opened}
//             onClick={() => setOpened((o) => !o)}
//             title={title}
//           />
//         </div>

//         {/* so that the burger icon remains in the case--- you open the burger icon then increases the size */}
//         {opened && (
//           <div className='hidden sm:flex'>
//             <Burger
//               color='#26c6da'
//               opened={opened}
//               onClick={() => setOpened((o) => !o)}
//               title={title}
//             />
//           </div>
//         )}
//         {!opened && (
//           <div className='text-gray-300 text-lg font-medium hidden xl:gap-8 sm:flex gap-8'>
//             <LinkElements />
//           </div>
//         )}
//       </div>

//       <div className='absolute top-10'>
//         <NavbarDrawer setOpened={setOpened} opened={opened} />
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

let navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Snippets',
    href: '/snippets',
  },
  {
    name: 'Now',
    href: '/now',
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
    const currentPath = path.split('/')[1];
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
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  // const switchTheme = () => {
  //   if (isMounted) {
  //     setTheme(theme === 'light' ? 'dark' : 'light');
  //   }
  // };

  return (
    <div className='fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6 sm:h-16'>
      <div className='relative mx-auto flex h-full items-center rounded-md border border-neutral-400/20 bg-white/40 backdrop-blur-md dark:border-neutral-600/30 dark:bg-black/40 dark:text-white'>
        <span
          className='absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-[4px] p-1 transition-all duration-300 sm:p-2'
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className='h-full w-full rounded-xl bg-neutral-200 backdrop-blur-xl dark:bg-neutral-800' />
        </span>
        {navItems.map((tab, index) => {
          // if (tab.id === 'theme') {
          //   return (
          //     <div key={index} className='flex '>
          //       <span className='h-8 border-[0.5px] border-neutral-950/10' />
          //       <span
          //         className={`${
          //           effect && 'animate-wiggle'
          //         } mx-2 my-auto flex cursor-pointer select-none p-3`}
          //         onClick={() => {
          //           // switchTheme();
          //           setEffect(true);
          //         }}
          //         onAnimationEnd={() => setEffect(false)}
          //       >
          //         {/* {!isMounted ? null : theme === 'light' ? (
          //           <div className='h-4 w-4 rounded-sm bg-neutral-600' /> */}
          //         {/* ) : ( */}
          //         <div className='h-4 w-4 rounded-sm bg-yellow-400' />
          //         {/* )} */}
          //       </span>
          //     </div>
          //   );
          // }

          // if (tab.id === 'extras') {
          //   return <DropdownExtras key={index} />;
          // }

          return (
            <Link
              key={index}
              href={tab.href as string}
              ref={(el) => (tabsRef.current[index] = el)}
              className='font-base inline-flex cursor-pointer items-center justify-center rounded-full px-4 text-center text-sm transition hover:text-black/80 dark:hover:text-white/80 sm:text-base'
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
