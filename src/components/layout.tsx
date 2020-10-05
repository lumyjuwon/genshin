import React from 'react';
import Header from './header';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <footer>
        {/* Footer Component */}
        This is Footer
      </footer>
    </>
  );
}