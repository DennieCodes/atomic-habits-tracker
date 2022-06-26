import { ReactNode } from "react";
import Navigation from "./navigation";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default Layout;
