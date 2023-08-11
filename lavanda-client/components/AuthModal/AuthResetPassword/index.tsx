"use client";

import React, { useState } from "react";
import css from "./AuthResetPassword.module.scss";
import AuthInput from "../AuthInput";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ConfirmResetPasswordRequest } from "@/interfaces/Auth";
import Button from "@/UI/ControlButton";
import classNames from "classnames";
import Image from "next/image";

import {
  changePassword,
  sendConfirmCode,
  sendRequestCode,
} from "@/service/user.service";

import keyIcon from "@/assets/Key.svg";

type Props = {
  setAuthType: React.Dispatch<
    React.SetStateAction<"registration" | "login" | "choice" | "reset">
  >;
};
const AuthLogin = ({ setAuthType }: Props) => {
  interface ConfirmResetPasswordForm extends ConfirmResetPasswordRequest {
    retryPassword: string;
  }

  type stages = "isSend" | "isNotSend" | "isConfirmed" | "isDone";

  const [isError, setIsError] = useState<string>("");
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [currentStage, setCurrentStage] = useState<stages>("isNotSend");
  const [isSend, setIsSend] = useState<boolean>(false);

  const startTimer = () => {
    setTimerSeconds(60);
    const interval = setInterval(() => {
      setTimerSeconds((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          clearInterval(interval);
          setIsSend(false);
          return seconds;
        }
      });
    }, 1000);
  };

  const getTimerValue = () => {
    if (timerSeconds > 0) {
      return `Code expiration time ${timerSeconds}`;
    } else {
      return "Code has expired";
    }
  };

  const sendCode = async () => {
    const email = getValues("email");
    const code = Number(getValues("code"));
    const data = await sendConfirmCode({ email, code });
    if (data) {
      setIsError("");
      setCurrentStage("isConfirmed");
    } else {
      setIsError("Wrong code");
    }
  };

  
  const requestCode = async () => {
    const email = getValues("email");
    const response = await sendRequestCode({ email });
    let status;
    if (typeof response !== "string") {
      status = response.status;
    }
    if (status === 201) {
      setIsError("");
      startTimer();
      setIsSend(true);
      setCurrentStage("isSend");
    } else {
      setIsError("Wrong email");
    }
  };


  const done = () => {
    setAuthType("login");
  };


  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm<ConfirmResetPasswordForm>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<ConfirmResetPasswordRequest> = async (
    data: ConfirmResetPasswordRequest
  ) => {
    await changePassword(data);
    setCurrentStage("isDone");
    reset();
  };

  let password = watch("password");

  const isEmailFieldDirty = errors.email?.message?.length
    ? true
    : false || getValues("email") === undefined;

  return (
    <div className={css.container}>
      <h3
        className={classNames(css.heading, {
          [css.mainFocus]: currentStage !== "isSend",
        })}
      >
        Forgot password
      </h3>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {currentStage !== "isConfirmed" && currentStage !== "isDone" && (
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"Please enter email you registered with"}
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
        )}
        {currentStage === "isSend" && (
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            name="code"
            type="number"
            rules={{
              required: "required",
              minLength: {
                value: 6,
                message: "Wrong format",
              },
              maxLength: {
                value: 6,
                message: "Wrong format",
              },
            }}
            placeholder={"Code"}
          />
        )}
        {currentStage === "isConfirmed" && (
          <>
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
          </>
        )}
        {currentStage === "isSend" && (
          <p className={css.error}>{getTimerValue()}</p>
        )}
        {currentStage === "isDone" && (
          <p className={css.success}>
            Your password was changed <Image src={keyIcon} alt="key icon" />
          </p>
        )}
        {isError.length > 0 && <p className={css.error}>{isError}</p>}
        <div className={css.button}>
          {currentStage === "isConfirmed" && (
            <Button type="submit" disabled={!isValid}>
              Done
            </Button>
          )}
          {currentStage === "isDone" && <Button onClick={done}>Done</Button>}
          {isSend && currentStage === "isSend" && (
            <Button onClick={sendCode} disabled={isEmailFieldDirty}>
              Send
            </Button>
          )}
          {!isSend && timerSeconds <= 0 && (
            <Button onClick={requestCode} disabled={isEmailFieldDirty}>
              Send Code
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
