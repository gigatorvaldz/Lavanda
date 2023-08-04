import SavingAdvantage from "@/assets/Saving-Time.png";
import IncreasedAdvantage from "@/assets/Increased-Cleanliness.png";
import ConsistencyAdvantage from "@/assets/Consistency-and-Reliability.png";
import ProfessionalismAdvantage from "@/assets/Professionalism.png";
import Image from "next/image";
import css from "./Advantages.module.scss";

const AdvantagesSection = () => {
  return (
    <section className={css.AdvantagesSection}>
      <h2 className={css.heading}>Our advantages</h2>
      <ul className={css.list}>
        <li className={css.saving}>
          <Image
            className={css.icon}
            src={SavingAdvantage}
            alt="Saving time and effort image"
          />
          <p>Saving time and effort</p>
        </li>
        <li className={css.increased}>
          <Image
            className={css.icon}
            src={IncreasedAdvantage}
            alt="Increased cleanliness and hygiene image"
          />
          <p>Increased cleanliness and hygiene</p>
        </li>
        <li className={css.professionalism}>
          <Image
            className={css.icon}
            src={ProfessionalismAdvantage}
            alt="Professionalism image"
          />
          <p>Professionalism</p>
        </li>
        <li className={css.consistency}>
          <Image
            className={css.icon}
            src={ConsistencyAdvantage}
            alt="Consistency and reliability image"
          />
          <p>Consistency and reliability</p>
        </li>
      </ul>
    </section>
  );
};

export default AdvantagesSection;
