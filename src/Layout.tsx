import { ReactNode } from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center justify-end gap-12 p-6">
        <li>
          <a href={`/`}>Home</a>
        </li>
        <li>
          <a href={`/list`}>List</a>
        </li>
        <li>
          <a href={`/contact`}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <main className="m-6">{children}</main>
    </>
  );
};

export default Layout;
