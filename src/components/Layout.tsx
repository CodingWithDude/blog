import React, { ReactElement } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';
import { useIntersection, useWindowScroll } from 'react-use';
import HeaderComponent from './HeaderComponent';
import { useRouter } from 'next/router';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

const Layout = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  const GradientBackground = () => {
    const { y } = useWindowScroll();

    return (
      <>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="h-full bg-[url('https://res.cloudinary.com/djjxydn3p/image/upload/h_1000/blog/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"
            style={{
              transform: `translateY(${Math.min(y / 3, 167)}px)`,
            }}
          ></div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col px-6 overflow-hidden items-center w-full">
      {/* <BackgroundFilter /> */}
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

      <SocialLinks />

      {/* Main */}
      <main className="flex flex-col w-screen h-full mt-48">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
