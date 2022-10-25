import React, { ReactElement } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';
import { useIntersection, useWindowScroll } from 'react-use';
import HeaderComponent from './HeaderComponent';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: ReactElement }) => {
  const { y: yScrollPosition } = useWindowScroll();
  const router = useRouter();
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const GradientBackground = () => {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="h-full transition-all ease-in bg-[url('https://res.cloudinary.com/djjxydn3p/image/upload/h_500/blog/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.2] will-change-transform"
            style={{
              transform: `translateY(${Math.min(yScrollPosition / 3, 167)}px)`,
            }}
          ></div>
        </div>
      </>
    );
  };
  return (
    <div className="flex bg-[#13171a] flex-col px-6 items-center w-full h-[100vh]">
      <BackgroundFilter />
      <GradientBackground />

      {/* Nav */}
      {intersection?.isIntersecting === false ? <NavComponent /> : ''}
      {router.pathname !== '/' ? <NavComponent /> : ''}

      {/* Header */}
      {router.pathname === '/' ? (
        <div ref={intersectionRef}>
          <HeaderComponent />
        </div>
      ) : (
        ''
      )}
      {/* Main */}
      <main className="flex flex-col w-full h-full mt-48">{children}</main>
    </div>
  );
};

export default Layout;
