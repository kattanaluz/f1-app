export interface DateTime {
  date: string;
  time: string;
}

export interface Location {
  country: string;
  lat: string;
  locality: string;
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
  FirstPractice: DateTime;
  Qualifying: DateTime;
  SecondPractice: DateTime;
  ThirdPractice: DateTime;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface Races {
  Races: Races[];
  season: string;
}

export interface RaceTable {
  RaceTable: Races;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
}
