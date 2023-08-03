import css from "./List.module.scss";

import React from "react";

interface ListI {
  items: string[];
  title: string;
}

const List = ({ items, title }: ListI) => {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {items.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
