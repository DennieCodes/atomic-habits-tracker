import { ReactNode } from "react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
