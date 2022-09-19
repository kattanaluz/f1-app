import React from "react";
import useRequest from "../../../hooks/useRequest";
import { StandingsTable } from "../../../types/standings";

export default function Standings() {
  const { response, isLoading, error } = useRequest<StandingsTable>(
    "current/driverStandings"
  );

  console.log(response);
  if (error) {
    return <div>An error happend, please try again!</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h2>Standings: latest race result</h2>
    </div>
  );
}
