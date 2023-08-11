"use client";

import classNames from "classnames";
import React from "react";
import css from "./Tabs.module.scss";

interface TabsI {
  items: string[];
  activeItems: string[];
  onClick: (e: React.MouseEvent) => void;
}

const Tabs = ({ items, activeItems, onClick }: TabsI) => {
  return (
    <ul className={css.container}>
      {items.map((el) => (
        <li
          key={el}
          onClick={onClick}
          className={classNames(
            {
              [css.active]: activeItems.findIndex((item) => el === item) >= 0,
            },
            css.tab
          )}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
