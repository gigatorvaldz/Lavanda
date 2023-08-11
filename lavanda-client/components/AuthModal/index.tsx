"use client";

import Modal from "@/UI/Modal";
import React, { useEffect, useState } from "react";
import AuthChoice from "./AuthChoice";
import AuthRegistration from "./AuthRegistration";
import AuthLogin from "./AuthLogin";
import AuthResetPassword from "./AuthResetPassword";

interface AuthModalI {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal = ({ visible, setVisible }: AuthModalI) => {
  const [authType, setAuthType] = useState<"registration" | "login" | "choice" | "reset">(
    "choice"
  );

  let currentStep;

  useEffect(() => {
    return function () {
      setAuthType("choice");
    };
  }, [visible]);

  switch (authType) {
    case "login":
      {
        currentStep = <AuthLogin setAuthType={setAuthType} />;
      }
      break;
    case "registration":
      {
        currentStep = <AuthRegistration />;
      }
      break;
    case "choice":
      {
        currentStep = <AuthChoice setAuthType={setAuthType} />;
      }
      break;
    case "reset":
      {
        currentStep = <AuthResetPassword setAuthType={setAuthType}/>;
      }
      break;
  }

  return (
    <Modal visible={visible} setVisible={setVisible}>
      {currentStep}
    </Modal>
  );
};

export default AuthModal;
