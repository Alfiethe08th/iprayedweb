export interface UserByCountry {
    country: string;
    count: number;
  }
  
  export interface User {
    id: string;
    name: string;
    totalCount: number;
    peopleCount: number;
    countries: UserByCountry[];
  }

  export interface Prayer {
    id: string;
    name: string;
    deity: string;
    purpose: string;
  }