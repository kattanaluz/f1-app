import moment from "moment";
import { Races } from "../types/schedule";

export default function getUpcomingRaces(arr: Races[]): Races[] {
  return arr.filter((race) => {
    return moment(race.date).isAfter(moment().format("YYYY-MM-DD"));
  });
}
