export type AnswerOption =
  | "VERDADERO"
  | "FALSO"
  | "PARCIALMENTE CIERTO"
  | "NECESITA CONTEXTO";

export interface HistoricalSource {
  title: string;
  author: string;
  year: string;
  excerpt: string;
}

export interface Card {
  id: string;
  title: string;
  collection: string;
  category: string;
  statement: string;
  options: AnswerOption[];
  correctAnswer: AnswerOption;
  explanation: string;
  context: string;
  concepts: string[];
  source: HistoricalSource;
  points: number;
  xp: number;
  timeLimit: number;
  relatedEvents: string[];
  relatedPeople: string[];
  relatedPlaces: string[];
}

export type Outcome = "CORRECTO" | "INCORRECTO" | "RESPUESTA PARCIAL" | "SIN RESPUESTA";

export interface CardResult {
  cardId: string;
  selected: AnswerOption | null;
  outcome: Outcome;
  points: number;
  xp: number;
  sourceConsulted: boolean;
  streakAfter: number;
}

export type Phase =
  | "home"
  | "mode"
  | "setup"
  | "intro"
  | "play"
  | "reveal"
  | "results"
  | "discovery";

export interface Discovery {
  name: string;
  year: string;
  place: string;
  description: string;
  concepts: string[];
  event: string;
  people: string[];
  relatedCards: string[];
}
