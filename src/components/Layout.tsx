import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1000px',
        minHeight: '100vh',
        padding: '0 1rem'
      }}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
