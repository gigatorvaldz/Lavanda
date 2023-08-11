import React from "react";
import css from "./ScheduleItem.module.scss";

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface ScheduleItemI {
  day: day;
  start: number;
  end: number;
}

const ScheduleItem = ({ day, start, end }: ScheduleItemI) => {
  return (
    <div
    className={css.item}
      style={{
        gridRowStart: start,
        gridRowEnd: end,
        gridColumn: weekday.findIndex((el) => el === day) + 1,
      }}
    ></div>
  );
};

export default ScheduleItem;
