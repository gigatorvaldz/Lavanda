import List from "@/UI/List";
import css from "./About.module.scss"
import AboutCleaningKitchen from "@/assets/about-1.png";
import AboutCleaningRoom1 from "@/assets/about-2.png";
import AboutCleaningRoom2 from "@/assets/about-3.png";
import AboutCleaningHallway from "@/assets/about-4.png";
import AboutCleaningBathroom1 from "@/assets/about-5.png";
import AboutCleaningBathroom2 from "@/assets/about-6.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={css.AboutSection}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>About cleaning</h2>

        <div className={css.first}>
          <List
            title="Kitchen cleaning includes:"
            items={[
              "Countertops and surfaces",
              "Appliances",
              "Cabinets and drawers",
              "Floors and sinks",
            ]}
          />
          <Image
            className={css.picture}
            src={AboutCleaningKitchen}
            alt="Kitchen picture"
          />
        </div>

        <div className={css.second}>
          <Image
            className={css.firstpicture}
            src={AboutCleaningRoom1}
            alt="Room picture"
          />
          <Image
            className={css.secondpicture}
            src={AboutCleaningRoom2}
            alt="Room picture"
          />
          <List
            title="Room cleaning includes:"
            items={[
              "Dusting surfaces",
              "Vacuuming or sweeping floor",
              "Cleaning windows and mirrors",
              "Making beds and organizing clutter",
            ]}
          />
        </div>

        <div className={css.third}>
          <Image
            className={css.picture}
            src={AboutCleaningHallway}
            alt="Hallway picture"
          />
          <List
            title="Hallway cleaning includes:"
            items={[
              "Dusting and wiping surfaces",
              "Vacuuming floor",
              "Cleaning light fixtures",
              "Removing cobwebs",
            ]}
          />
        </div>

        <div className={css.fourth}>
          <List
            title="Bathroom cleaning includes:"
            items={[
              "Scrubbing and sanitizing surfaces",
              "Cleaning shower, bathtub, and toilet",
              "Wiping down mirrors and fixtures",
              "Mopping or sweeping floor",
            ]}
          />
          <Image
            className={css.firstpicture}
            src={AboutCleaningBathroom1}
            alt="Bathroom picture"
          />
          <Image
            className={css.secondpicture}
            src={AboutCleaningBathroom2}
            alt="Bathroom picture"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
