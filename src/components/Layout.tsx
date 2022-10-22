import React, { ReactElement } from 'react';
import BackgroundFilter from './BackgroundFilter';
import NavComponent from './NavComponent';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex bg-stone-900 flex-col px-4 items-center w-full">
      <BackgroundFilter />
      <NavComponent />

      <main className="w-full mt-24">{children}</main>
    </div>
  );
};

export default Layout;
