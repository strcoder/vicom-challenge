import React from 'react';
import Appbar from '../components/Appbar';

type LayoutProps = {
  children: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default Layout;
