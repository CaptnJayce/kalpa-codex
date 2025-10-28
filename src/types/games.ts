export interface Game {
  title: string;
  image: string;
  description: string;
  planet: string;
  date?: string;
  technologies?: string[];
}

export interface GamesData {
  completed: Game[];
  current: Game[];
  upcoming: Game[];
}
