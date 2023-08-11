import DropDown from "@/UI/DropDown";
import React from "react";
import { useState } from "react";

import css from "./VisitFilter.module.scss";

interface VisistFilterI {}

const VisistFilter = ({}: VisistFilterI) => {

  return (
    <div className={css.container}>
      <DropDown
        type="click"
        options={["Regular", "Auto Renovation", "Relocation", "Outdoor"]}
      />
      <div className={css.tab}>Fornighter</div>
      <div className={css.tab}>Every week</div>
    </div>
  );
};

export default VisistFilter;
