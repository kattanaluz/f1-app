import React from "react";
import useRequest from "../../../hooks/useRequest";
import getUpcomingRaces from "../../../utils/functions";
import styles from "./Schedule.module.css";
import UpcomingRaces from "../UpcomingRaces/UpcomingRaces";
import NextRace from "../NextRace/NextRace";
import { RaceTable } from "../../../types/schedule";

export default function Schedule() {
  
  const { response, isLoading, error } = useRequest<RaceTable>("current");

  if (error) {
    return <div>An error happend, please try again!</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>F1 Upcoming Races</h2>
      <div className={styles.ribbon} />
      <div className={styles.nextRaceContainer}>
        {response && (
          <NextRace nextRace={getUpcomingRaces(response.RaceTable.Races).slice(0)} />
        )}
      </div>
      <div className={styles.upcomingRacesContainer}>
        {response &&
          getUpcomingRaces(response.RaceTable.Races)
            .slice(1)
            .map((race) => {
              return <UpcomingRaces schedule={race} />;
            })}
      </div>
    </div>
  );
}
