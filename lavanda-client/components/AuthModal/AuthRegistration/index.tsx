"use client";

import Input from "@/UI/Input";
import React, { useState } from "react";
import css from "./AuthRegistration.module.scss";
import AuthInput from "../AuthInput";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RegistrationRequest } from "@/interfaces/Auth";
import Button from "@/UI/ControlButton";
import classNames from "classnames";
import AuthPhoneInput from "../AuthPhoneInput";
import { registration } from "@/service/user.service";

const AuthRegistration = () => {
  const [isNext, setIsNext] = useState<boolean>(false);
  interface RegistrationForm extends RegistrationRequest {
    retryPassword: string;
  }

  const {
    handleSubmit,
    control,
    watch,
    getFieldState,
    reset,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<RegistrationRequest> = async (
    data: RegistrationRequest
  ) => {
    reset();
    registration(data);
  };

  let password = watch("password");

  const next = () => {
    const firstNameField = getFieldState("firstName");
    const lastNameField = getFieldState("lastName");
    const birdthDayField = getFieldState("birthDay");

    const isNextValid =
      !firstNameField.invalid &&
      !lastNameField.invalid &&
      !birdthDayField.invalid &&
      firstNameField.isDirty &&
      lastNameField.isDirty &&
      birdthDayField.isDirty;

    if (isNextValid) {
      setIsNext(true);
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.heading}>Sign Up</h3>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames({ [css.invisible]: isNext })}>
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"First name"}
            name="firstName"
            rules={{
              required: "Wrong format.",
            }}
          />
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"Last name"}
            name="lastName"
            rules={{
              required: "Wrong format.",
            }}
          />
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"Date of birth"}
            type="date"
            name="birthDay"
            rules={{
              required: "Wrong format.",
            }}
          />
        </div>
        <div className={classNames({ [css.invisible]: !isNext })}>
          <AuthPhoneInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"Mobile phone"}
          />
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"E-mail"}
            name="email"
            type="email"
            rules={{
              required: "Wrong e-mail.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Wrong e-mail.",
              },
            }}
          />
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            name="password"
            type="password"
            rules={{
              required: "required",
              minLength: {
                value: 3,
                message: "Wrong format",
              },
            }}
            placeholder={"Passwrod"}
          />
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"Retry password"}
            name="retryPassword"
            type="password"
            rules={{
              required: "required",
              validate: (value: string) => {
                if (value === password) {
                  return true;
                } else {
                  return "invalid";
                }
              },
            }}
          />
        </div>
        <div className={css.button}>
          {isNext ? (
            <Button type="submit" disabled={!isValid}>
              Submit
            </Button>
          ) : (
            <Button onClick={next}>Next</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthRegistration;
