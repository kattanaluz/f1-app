import React from "react";
import moment from "moment";
import { Races } from "../../../types/schedule";
import styles from "./UpcomingRaces.module.css";

interface UpComingRacesProps {
  schedule: Races;
}

export default function UpcomingRaces(props: UpComingRacesProps) {
  const {
    date,
    time,
    round,
    raceName,
    Circuit: { circuitName, Location },
  } = props.schedule;

  return (
    <div className={styles.raceCard} key={date}>
      <div className={styles.round}>
        <p>Round {round}</p>
        <img
          src={`https://countryflagsapi.com/png/${Location.country}`}
          alt="coutry flag"
          className={styles.upcomingRaceFlag}
        />
      </div>
      <div className={styles.raceContainer}>
        <p>{raceName}</p>
        <p>
          {moment(date).format("LL")} at {time.slice(0, 5)}
        </p>
        <p>{circuitName}</p>
      </div>
    </div>
  );
}
