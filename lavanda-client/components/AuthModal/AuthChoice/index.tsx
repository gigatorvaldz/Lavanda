import React from "react";
import css from "./AuthChoice.module.scss";
import Button from "@/UI/ControlButton";
import Image from "next/image";
import FacebookIcon from "@/assets/Facebook.svg";
import GoogleIcon from "@/assets/Google.svg";

interface AuthChoiceI {
  setAuthType: React.Dispatch<
    React.SetStateAction<"registration" | "login" | "choice" | "reset">
  >;
}

const AuthChoice = ({ setAuthType }: AuthChoiceI) => {
  return (
    <div className={css.container}>
      <h3 className={css.heading}>To order please login or register</h3>
      <div className={css.sign}>
        <Button onClick={() => setAuthType("registration")}>Sign up</Button>
        <Button onClick={() => setAuthType("login")}>Sign in</Button>
      </div>
      <span>or</span>
      <div className={css.social}>
        <Image src={FacebookIcon} alt="Facebook Icon" />
        <Image src={GoogleIcon} alt="Google Icon" />
      </div>
    </div>
  );
};

export default AuthChoice;
