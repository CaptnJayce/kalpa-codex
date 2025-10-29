export interface Planet {
  title: string;
  image: string;
  description: string;
}

export interface PlanetsData {
  primary: Planet[];
  secondary: Planet[];
}
