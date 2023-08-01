import css from "./Button.module.scss";
import { Open_Sans } from "next/font/google";
import classNames from "classnames";

const openSans = Open_Sans({ subsets: ["latin"] });

interface ButtonI {
  children: React.ReactNode;
  //   onClick: (e: React.MouseEvent) => void;
}

const Button = ({ children }: ButtonI) => {
  return (
    <button className={classNames(css.container, openSans.className)}>
      {children}
    </button>
  );
};

export default Button;
