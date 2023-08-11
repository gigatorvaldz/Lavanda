import Layout from "@/components/Layout";
import { Metadata } from "next";
import css from "@/styles/pages/Main.module.scss";
import HomeSection from "@/components/MainPageSections/HomeSection";
import OfferSection from "@/components/MainPageSections/OfferSection";
import AboutSection from "@/components/MainPageSections/AboutSection";
import AdvantagesSection from "@/components/MainPageSections/AdvantagesSection";
import ServicesSection from "@/components/MainPageSections/ServicesSection";
import QuestionsSection from "@/components/MainPageSections/QuestionsSection";
import ScheduleSection from "@/components/MainPageSections/ScheduleSection";
import AboutSectionMobile from "@/components/MainPageSections/AboutSectionMobile";

export const metadata: Metadata = {
  title: "Lavanda - Main Page",
  description: "Lavanda Cleaning Main Page",
};

export default function Home() {
  return (
    <Layout>
      <main className={css.container}>
        <HomeSection />
        <OfferSection />
        <AboutSection />
        <AboutSectionMobile />
        <AdvantagesSection />
        <ServicesSection />
        <ScheduleSection />
        <QuestionsSection />
      </main>
    </Layout>
  );
}
