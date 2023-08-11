import React from "react";
import { Control, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import css from "./AuthPhoneInput.module.scss";

type AuthPhoneInputProps = {
  rules: object;
  control: Control;
  placeholder?: string;
};

const AuthPhoneInput = ({
  control,
  placeholder,
}: AuthPhoneInputProps) => {

  return (
    <div>
      <label className={css.invisible} htmlFor="phone">
        Phone Number
      </label>
      <Controller
        name="phone"
        control={control}

        render={({ field: { ref, ...field }, formState: { errors } }) => (
          <>
            <PhoneInput
              placeholder={placeholder}
              dropdownClass={css.dropdown}
              buttonClass={css.button}
              containerClass={css.container}
              inputClass={css.input}
              searchClass={css.search}
              {...field}
              inputProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
            />
          </>
        )}
      />
    </div>
  );
};

export default AuthPhoneInput;
