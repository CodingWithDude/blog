import Image from 'next/image';
import React, { ReactElement, useState } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';
import { useWindowScroll } from 'react-use';

const Layout = ({ children }: { children: ReactElement }) => {
  const [showNav, setShowNav] = useState(false);

  const GradientBackground = () => {
    const { y } = useWindowScroll();

    return (
      <>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="h-full transition-all ease-in bg-[url('https://res.cloudinary.com/djjxydn3p/image/upload/h_500/blog/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.2] will-change-transform"
            style={{
              transform: `translateY(${Math.min(y / 3, 167)}px)`,
            }}
          ></div>
        </div>
      </>
    );
  };
  return (
    <div className="flex bg-[#13171a] flex-col px-4 items-center w-full">
      <BackgroundFilter />
      <GradientBackground />
      <NavComponent />

      <main className="w-full mt-48">{children}</main>
    </div>
  );
};

export default Layout;
