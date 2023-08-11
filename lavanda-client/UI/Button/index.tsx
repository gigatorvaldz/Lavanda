import css from "./Button.module.scss";
import { Open_Sans } from "next/font/google";
import classNames from "classnames";

const openSans = Open_Sans({ subsets: ["latin"] });

interface ButtonI {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ children, onClick, type = "button", disabled = false }: ButtonI) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(css.container, openSans.className)}
    >
      {children}
    </button>
  );
};

export default Button;
