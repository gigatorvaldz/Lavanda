import React from "react";
import css from "./Services.module.scss";
import Image from "next/image";
import ServicesPicture1 from "@/assets/services-1-1.png";
import ServicesPicture2 from "@/assets/services-1-2.png";
import ServicesPicture3 from "@/assets/services-2-1.png";
import ServicesPicture4 from "@/assets/services-2-2.png";

const ServicesSection = () => {
  return (
    <section className={css.ServicesSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>Services</h2>
        <div className={css.serviceContent}>
          <div className={css.firstColumn}>
              <Image className={css.image} src={ServicesPicture1} alt="Clean room picture" />
            <p>
              We pride ourselves on our reliability and our commitment to
              providing a consistent and{" "}
              <strong>high-quality cleaning experience.</strong>
            </p>
              <Image className={css.image} src={ServicesPicture2} alt="Clean room picture" />
          </div>
          <div className={css.secondColumn}>
            <p className={css.first}>
              Our maid service has years of experience in providing cleaning
              services, <strong>ensuring</strong> that your home is cleaned
              thoroughly and efficiently.
            </p>
            <div className={css.pictures}>
              <Image className={css.image} src={ServicesPicture3} alt="Clean room picture" />
              <Image className={css.image} src={ServicesPicture4} alt="Clean room picture" />
            </div>
            <p className={css.second}>
              Our cleaning plans are tailored to meet{" "}
              <strong> your specific needs and preferences</strong>, ensuring
              that your home is cleaned exactly how you want it.
            </p>
            <p className={css.third}>
              Our maids are professional, friendly and respectful, ensuring that
              you receive <strong>top-notch service</strong> every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
