"use client";

import React, { useState } from "react";
import css from "./Input.module.scss";
import classNames from "classnames";

export interface InputProps {
  placeholder: string;
  aside?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type = "text",
  error = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={classNames(
        { [css.active]: value || isFocused, [css.invalid]: error },
        css.form
      )}
    >
      <label className={css.label}>
        <input
          type={type}
          value={value}
          className={css.searchBar}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          style={
            error.length <= 0
              ? {
                  width: "100%",
                }
              : {
                  maxWidth: "80%",
                }
          }
        />
        <span
          className={classNames({ [css.inputFilled]: value }, css.placeholder)}
        ></span>
      </label>
      {error.length > 0 && <div className={css.iconContainer}>{error}</div>}
    </div>
  );
};

export default Input;
