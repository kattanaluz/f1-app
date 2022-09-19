import React from "react";
import useRequest from "../../../hooks/useRequest";
import moment from "moment";
import getUpcomingRaces from "../../../utils/functions";
import styles from "./Schedule.module.css";

export default function Schedule() {
  const { response, isLoading, error } = useRequest("current");

  if (error) {
    return <div>An error happend, please try again!</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>F1 Upcoming Races</h2>
      <div className={styles.divider} />
      <div className={styles.upcomingRacesContainer}>
        {response &&
          getUpcomingRaces(response.Races).map(
            ({ date, raceName, time, round, Circuit }) => {
              return (
                <div className={styles.raceCard}>
                  <div className={styles.round}>
                    <p>Round</p>
                    <p>{round}</p>
                  </div>
                  <div key={date} className={styles.raceContainer}>
                    <p>{raceName}</p>
                    <p>
                      {moment(date).format("LL")} at {time.slice(0, 5)}
                    </p>
                    <p>{Circuit.circuitName}</p>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}
