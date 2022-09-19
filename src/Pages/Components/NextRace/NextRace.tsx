import React from "react";
import moment from "moment";
import styles from "./NextRace.module.css";
import { Races } from "../../../types/schedule";

interface NextRaceProps {
  nextRace: Races[];
}

export default function NextRace(props: NextRaceProps) {
  const {
    date,
    time,
    round,
    raceName,
    FirstPractice,
    SecondPractice,
    ThirdPractice,
    Qualifying,
    Circuit: { circuitName, Location },
  } = props.nextRace[0];

  return (
    <div className={styles.nextRaceCard} key={date}>
      <div className={styles.imageFlagContainer}>
        <img
          src={`https://countryflagsapi.com/png/${Location.country}`}
          alt="coutry flag"
          className={styles.imageFlag}
        />
      </div>
      <div className={styles.raceContainer}>
        <p>Up Next: Round {round}</p>
        <p>{raceName}</p>
        <p>
          {moment(date).format("LL")} at {time.slice(0, 5)}
        </p>
        <p>{circuitName}</p>
      </div>
      <div>
        <p>
          First Practise: {moment(FirstPractice.date).format("LL")} at{" "}
          {FirstPractice.time.slice(0, 5)}
        </p>
        <p>
          Second Practise: {moment(SecondPractice.date).format("LL")} at{" "}
          {SecondPractice.time.slice(0, 5)}
        </p>
        <p>
          Third Practise: {moment(ThirdPractice.date).format("LL")} at{" "}
          {ThirdPractice.time.slice(0, 5)}
        </p>
        <p>
          Qualifying: {moment(Qualifying.date).format("LL")} at{" "}
          {Qualifying.time.slice(0, 5)}
        </p>
      </div>
    </div>
  );
}
