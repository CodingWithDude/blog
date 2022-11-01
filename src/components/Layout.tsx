import React, { ReactElement } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';
import { useIntersection } from 'react-use';
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

  return (
    <div className="flex flex-col px-6 overflow-hidden items-center w-full">
      {/* <BackgroundFilter /> */}
      <div className="fixed w-full h-full transition-all ease-in bg-[url('https://res.cloudinary.com/djjxydn3p/image/upload/h_1000/blog/bg_gradient.png')] bg-top bg-no-repeat opacity-[0.2] will-change-transform"></div>

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
