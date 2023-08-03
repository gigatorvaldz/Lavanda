import Button from "@/UI/Button";
import Layout from "@/components/Layout";
import Accordion from "@/UI/Accordion";
import List from "@/UI/List";
import { Metadata } from "next";
import css from "@/styles/pages/Main.module.scss";
import Image from "next/image";

import OffetImage from "@/assets/offerSection.png";
import SavingAdvantage from "@/assets/Saving-Time.png";
import IncreasedAdvantage from "@/assets/Increased-Cleanliness.png";
import ConsistencyAdvantage from "@/assets/Consistency-and-Reliability.png";
import ProfessionalismAdvantage from "@/assets/Professionalism.png";
import AboutCleaningKitchen from "@/assets/about-1.png";
import AboutCleaningRoom1 from "@/assets/about-2.png";
import AboutCleaningRoom2 from "@/assets/about-3.png";
import AboutCleaningHallway from "@/assets/about-4.png";
import AboutCleaningBathroom1 from "@/assets/about-5.png";
import AboutCleaningBathroom2 from "@/assets/about-6.png";
import QuestionsPicture from "@/assets/questions-1.png";
import ServicesPicture1 from "@/assets/services-1-1.png";
import ServicesPicture2 from "@/assets/services-1-2.png";
import ServicesPicture3 from "@/assets/services-2-1.png";
import ServicesPicture4 from "@/assets/services-2-2.png";

export const metadata: Metadata = {
  title: "Lavanda - Main Page",
  description: "Lavanda Cleaning Main Page",
};

export default function Home() {
  return (
    <Layout>
      <main className={css.container}>
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
            src={OffetImage}
            alt="Offer Section Image"
          />
        </section>

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
                title="Room cleaning includes:"
                items={[
                  "Dusting surfaces",
                  "Vacuuming or sweeping floor",
                  "Cleaning windows and mirrors",
                  "Making beds and organizing clutter",
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

        <section className={css.ServicesSection}>
          <div className={css.wrapper}>
            <h2 className={css.heading}>Services</h2>
            <div className={css.serviceContent}>
              <div className={css.firstColumn}>
                <Image src={ServicesPicture1} alt="Clean room picture" />
                <p>
                  We pride ourselves on our reliability and our commitment to
                  providing a consistent and{" "}
                  <strong>high-quality cleaning experience.</strong>
                </p>
                <Image src={ServicesPicture2} alt="Clean room picture" />
              </div>
              <div className={css.secondColumn}>
                <p className={css.first}>
                  Our maid service has years of experience in providing cleaning
                  services, <strong>ensuring</strong> that your home is cleaned
                  thoroughly and efficiently.
                </p>
                <div className={css.pictures}>
                  <Image src={ServicesPicture3} alt="Clean room picture" />
                  <Image src={ServicesPicture4} alt="Clean room picture" />
                </div>
                <p className={css.second}>
                  Our cleaning plans are tailored to meet{" "}
                  <strong> your specific needs and preferences</strong>,
                  ensuring that your home is cleaned exactly how you want it.
                </p>
                <p className={css.third}>
                  Our maids are professional, friendly and respectful, ensuring
                  that you receive <strong>top-notch service</strong> every
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  A maid service is a professional cleaning service that
                  provides regular or one-time cleaning services for homes or
                  businesses.
                </p>
              </Accordion>
              <Accordion label="How often should I use a maid service?">
                <p className={css.second}>
                  As a maid, I would advise you to use the services of a maid as
                  often as you feel necessary to keep the house clean and tidy.
                  Some people use maid services weekly, twice a week, while
                  others may only need a one-time cleaning.
                </p>
              </Accordion>
              <Accordion label="Do I need to provide cleaning supplies and equipment?">
                <p className={css.third}>
                  We often bring our own cleaning products, but you can also
                  leave yours for me to clean.
                </p>
              </Accordion>
              <Accordion label="Can I customize my cleaning service?">
                <p className={css.fourth}>
                  Yes, most maid services allow for some degree of customization
                  depending on your specific cleaning needs and preferences. You
                  can decide before booking the service.
                </p>
              </Accordion>
              <Accordion label="Are maid services insured and bonded?">
                <p className={css.fifth}>
                  Yes, maid services are usually insured and protected to
                  protect both the client and us in the event of accidents,
                  damage or theft.
                </p>
              </Accordion>
              <Accordion label="Can I leave my home while the maid service is there?">
                <p className={css.sixth}>
                  You are generally free to leave your home while I am working,
                  provided you make the necessary arrangements for me to gain
                  access to your home and to guard any pets if they are in the
                  home.
                </p>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
