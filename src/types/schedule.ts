export interface DateTime {
  date: string;
  time: string;
}

export interface Location {
  country: string;
  lat: string;
  location: string;
  long: string;
}

export interface Circuit {
  Location: Location;
  circuitId: string;
  circuitName: string;
  url: string;
}

export interface Races {
  Circuit: Circuit;
  FisrtPractice: DateTime;
  Qualifying: DateTime;
  SecondPratice: DateTime;
  ThirdPratice: DateTime;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface RaceTable {
  Races: Races[];
  season: string;
}
