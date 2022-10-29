import React, { ReactElement } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';
import { useIntersection } from 'react-use';
import HeaderComponent from './HeaderComponent';
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactElement }) => {
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
          <div className="h-full transition-all ease-in bg-[url('https://res.cloudinary.com/djjxydn3p/image/upload/h_500/blog/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.2] will-change-transform"></div>
        </div>
      </>
    );
  };
  return (
    <div className="flex flex-col px-6 items-center w-full">
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
      <main className="flex flex-col w-screen h-screen mb-[1000px]  mt-48">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
