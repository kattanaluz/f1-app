import React from "react";
import Schedule from "../Components/Schedule/Schedule";
import Standings from "../Components/Standings/Standings";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.app}>
      <Schedule />
      <Standings />
    </div>
  );
}

export default HomePage;
