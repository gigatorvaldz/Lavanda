"use client";

import React, { useState } from "react";
import css from "./AdressInput.module.scss";
import classNames from "classnames";
import Image from "next/image";

import adressIcon from "@/assets/write-adress.svg"

export interface AdressInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const AdressInput: React.FC<AdressInputProps> = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classNames({ [css.active]: value || isFocused }, css.form)}>
      <label className={css.label}>
        <input
          type="text"
          value={value}
          className={css.searchBar}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </label>
      {!isFocused && <div className={css.iconContainer}>{<Image src={adressIcon} alt="input icon"/>}</div>}
    </div>
  );
};

export default AdressInput;
