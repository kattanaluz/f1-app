export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface Constructors {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface DriverStandings {
  Constructors: Constructors[];
  Driver: Driver;
  points: string;
  position: string;
  positionText: string;
  wins: string;
}

export interface StandingLists {
  DriverStandings: DriverStandings[];
  round: string;
  season: string;
}

export interface Standings {
  StandingLists: StandingLists[];
  season: string;
}

export interface StandingsTable {
  StandingTable: Standings;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
}
