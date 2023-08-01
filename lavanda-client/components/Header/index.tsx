import classNames from "classnames";
import css from "./Header.module.scss";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <header className={classNames(css.container, questrial.className)}>
      <ul className={css.list}>
        <li>
          <a>services</a>
        </li>
        <li>
          <a>schedule</a>
        </li>
        <li>
          <a>about</a>
        </li>
        <li>
          <a>contacts</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
