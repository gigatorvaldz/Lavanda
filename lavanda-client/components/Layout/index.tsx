import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return <>
  <Header/>
  {children}
  <Footer/>
  </>;
};

export default Layout;
