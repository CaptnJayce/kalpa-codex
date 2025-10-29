export interface Planet {
  title: string;
  image: string;
  description: string;
  quote: string;
}

export interface PlanetsData {
  primary: Planet[];
  secondary: Planet[];
}
