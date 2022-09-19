import React from "react";
import Schedule from "../Components/Schedule/Schedule";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.app}>
      <Schedule />
    </div>
  );
}

export default HomePage;
