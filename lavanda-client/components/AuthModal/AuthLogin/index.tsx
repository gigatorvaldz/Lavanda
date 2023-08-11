"use client";

import React, { useState } from "react";
import css from "./AuthLogin.module.scss";
import AuthInput from "../AuthInput";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest } from "@/interfaces/Auth";
import Button from "@/UI/ControlButton";
import { login } from "@/service/user.service";

type Props = {
  setAuthType: React.Dispatch<
    React.SetStateAction<"registration" | "login" | "choice" | "reset">
  >;
};
const AuthLogin = ({ setAuthType }: Props) => {
  interface loginForm extends LoginRequest {
    retryPassword: string;
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<loginForm>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
    login(data);
    reset();
  };

  return (
    <div className={css.container}>
      <h3 className={css.heading}>Log In</h3>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
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
        <p className={css.reset} onClick={() => setAuthType("reset")}>
          Forgot password?
        </p>
        <div className={css.button}>
          <Button type="submit" disabled={!isValid}>
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
