"use client";

import React from "react";
import css from "./Schedule.module.scss";
import Button from "@/UI/ControlButton";
import Tabs from "@/UI/Tabs";
import { useState } from "react";
import AdressInput from "@/UI/AdressInput";
import VisistFilter from "@/components/VisitFilter";
import classNames from "classnames";
import Schedule from "@/components/Schedule";
import AuthModal from "@/components/AuthModal";

const ScheduleSection = () => {
  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  const [adress, setAdress] = useState<string>("");
  const [isAuthing, setIsAuthing] = useState<boolean>(false);
  const addTab = (e: React.MouseEvent) => {
    const value = e.currentTarget.innerHTML;
    const tab = activeTabs.find((tab) => tab === value);
    console.log(value, tab);

    if (tab) {
      setActiveTabs(activeTabs.filter((tab) => tab != value));
    } else {
      setActiveTabs([...activeTabs, value]);
    }

    console.log(activeTabs);
  };

  return (
    <section className={css.ScheduleSection}>
      <div className={css.filter}>
        <h2 className={css.heading}>Filter</h2>
        <p className={css.description}>
          You need to choose your preferred options for selecting a maid:
        </p>
        <div className={css.filterList}>
          <div className={css.adress}>
            <div className={css.steps}>
              <span className={css.circle}>1</span>
              <p>Address</p>
            </div>
            <AdressInput
              value={adress}
              onChange={(e) => {
                setAdress(e.currentTarget.value);
              }}
            />
            <Button>Search</Button>
          </div>
          <div>
            <div className={css.steps}>
              <span className={css.circle}>2</span>
              <p>Allegry</p>
            </div>
            <Tabs
              onClick={addTab}
              items={["None", "Dog", "Cat"]}
              activeItems={activeTabs}
            />
          </div>
          <div>
            <div className={classNames(css.steps, css.visit)}>
              <span className={css.circle}>3</span>
              <p>Visit</p>
            </div>
            <VisistFilter />
          </div>
        </div>
      </div>
      <div className={css.schedule}>
        <h2 className={css.heading}>Schedule</h2>

        <Schedule />
        <div className={css.order}>
          <Button
            onClick={() => {
              setIsAuthing(true);
            }}
          >
            Order
          </Button>
        </div>

        <AuthModal visible={isAuthing} setVisible={setIsAuthing} />
      </div>
    </section>
  );
};

export default ScheduleSection;
