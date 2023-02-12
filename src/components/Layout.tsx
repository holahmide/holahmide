import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { LazyMotion, domAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1200px',
          minHeight: '100vh',
          padding: '0 1rem'
        }}
      >
        <NavBar />
        {children}
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default Layout;
