import React from 'react';

export default function Layout({ children }: any) {
  return (
    <>
      <header>
        {/* Header Component */}
        This is Header
      </header>
      {children}
      <footer>
        {/* Footer Component */}
        This is Footer
      </footer>
    </>
  );
}