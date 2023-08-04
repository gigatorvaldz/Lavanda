import React from "react";
import css from "./Home.module.scss";
import Button from "@/UI/Button";

const HomeSection = () => {
  return (
    <section className={css.HomeSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>
          Elevate your space with sparkling sweep cleaning services.
        </h2>
        <strong className={css.content}>
          Leave the cleaning to the experts, enjoy your free time.
        </strong>
        <Button>Go to selection</Button>
      </div>
    </section>
  );
};

export default HomeSection;
