import * as React from 'react';
import { Link } from 'gatsby';
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout