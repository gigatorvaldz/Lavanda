import React from "react";
import css from "./Offer.module.scss";
import Image from "next/image";
import OfferImage from "@/assets/offerSection.png";

const OfferSection = () => {
  return (
    <section className={css.OfferSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>The Solution to Your Cleaning Needs</h2>
        <strong className={css.content}>
          We offer professional maid services for homes and offices. Let us
          handle the cleaning, so you can enjoy a spotless space.
        </strong>
      </div>
      <Image
        className={css.OfferSectionImage}
        src={OfferImage}
        alt="Offer Section Image"
      />
    </section>
  );
};

export default OfferSection;
