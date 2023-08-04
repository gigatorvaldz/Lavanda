import React from "react";
import css from "./Questions.module.scss";
import Image from "next/image";
import Accordion from "@/UI/Accordion";
import QuestionsPicture from "@/assets/questions-1.png";

const QuestionsSection = () => {
  return (
    <section className={css.QuestionsSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>Questions</h2>
        <Image
          className={css.picture}
          src={QuestionsPicture}
          alt="Questions picture"
        />
        <div className={css.questionList}>
          <Accordion label="What is a maid service?">
            <p className={css.first}>
              A maid service is a professional cleaning service that provides
              regular or one-time cleaning services for homes or businesses.
            </p>
          </Accordion>
          <Accordion label="How often should I use a maid service?">
            <p className={css.second}>
              As a maid, I would advise you to use the services of a maid as
              often as you feel necessary to keep the house clean and tidy. Some
              people use maid services weekly, twice a week, while others may
              only need a one-time cleaning.
            </p>
          </Accordion>
          <Accordion label="Do I need to provide cleaning supplies and equipment?">
            <p className={css.third}>
              We often bring our own cleaning products, but you can also leave
              yours for me to clean.
            </p>
          </Accordion>
          <Accordion label="Can I customize my cleaning service?">
            <p className={css.fourth}>
              Yes, most maid services allow for some degree of customization
              depending on your specific cleaning needs and preferences. You can
              decide before booking the service.
            </p>
          </Accordion>
          <Accordion label="Are maid services insured and bonded?">
            <p className={css.fifth}>
              Yes, maid services are usually insured and protected to protect
              both the client and us in the event of accidents, damage or theft.
            </p>
          </Accordion>
          <Accordion label="Can I leave my home while the maid service is there?">
            <p className={css.sixth}>
              You are generally free to leave your home while I am working,
              provided you make the necessary arrangements for me to gain access
              to your home and to guard any pets if they are in the home.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
