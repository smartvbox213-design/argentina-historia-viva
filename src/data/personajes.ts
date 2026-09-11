import type { HistoricalPerson } from "@/types/game";

export const PEOPLE: HistoricalPerson[] = [
  {
    id: "PER-001",
    name: "Cornelio Saavedra",
    description:
      "Militar y dirigente político vinculado con la Primera Junta y los acontecimientos revolucionarios de 1810.",
    sourceIds: ["SRC-001", "SRC-002", "SRC-003"],
  },
  {
    id: "PER-002",
    name: "Mariano Moreno",
    description:
      "Dirigente político vinculado con la Primera Junta y con posiciones revolucionarias durante 1810.",
    sourceIds: ["SRC-001", "SRC-003"],
  },
  {
    id: "PER-003",
    name: "Baltasar Hidalgo de Cisneros",
    description:
      "Virrey del Río de la Plata durante la crisis política que precedió a la Revolución de Mayo.",
    sourceIds: ["SRC-002"],
  },
  {
    id: "PER-004",
    name: "Fernando VII",
    description:
      "Monarca español cuya captura por Napoleón formó parte del contexto político de la Revolución de Mayo.",
    sourceIds: ["SRC-003"],
  },
  {
    id: "PER-005",
    name: "Juan José Castelli",
    description:
      "Dirigente político vinculado con el proceso revolucionario de 1810.",
    sourceIds: ["SRC-004", "SRC-010"],
  },
  {
    id: "PER-006",
    name: "Julián de Leiva",
    description:
      "Figura vinculada con el Cabildo Abierto y las discusiones políticas de mayo de 1810.",
    sourceIds: ["SRC-004"],
  },
  {
    id: "PER-007",
    name: "Manuel Belgrano",
    description:
      "Dirigente revolucionario y creador de la bandera utilizada por las fuerzas revolucionarias en 1812.",
    sourceIds: ["SRC-005", "SRC-009"],
  },
  {
    id: "PER-008",
    name: "Santiago de Liniers",
    description:
      "Figura vinculada con la resistencia al proceso revolucionario en Córdoba.",
    sourceIds: ["SRC-005"],
  },
  {
    id: "PER-009",
    name: "Francisco Narciso de Laprida",
    description:
      "Presidente del Congreso de Tucumán durante la declaración de independencia.",
    sourceIds: ["SRC-006", "SRC-007"],
  },
  {
    id: "PER-010",
    name: "Juan José Paso",
    description:
      "Dirigente político vinculado con el Congreso de Tucumán y el proceso independentista.",
    sourceIds: ["SRC-006"],
  },
  {
    id: "PER-011",
    name: "Fray Cayetano Rodríguez",
    description:
      "Figura vinculada con el Congreso de Tucumán y el proceso de independencia.",
    sourceIds: ["SRC-007"],
  },
  {
    id: "PER-012",
    name: "José de San Martín",
    description:
      "Militar y dirigente revolucionario asociado con la estrategia continental, el cruce de los Andes y la campaña hacia Perú.",
    sourceIds: ["SRC-008"],
  },
  {
    id: "PER-013",
    name: "Bernardo O'Higgins",
    description:
      "Dirigente vinculado con la campaña de liberación de Chile junto con San Martín.",
    sourceIds: ["SRC-008"],
  },
  {
    id: "PER-014",
    name: "Bernardino Rivadavia",
    description:
      "Figura política mencionada en relación con las disposiciones sobre la bandera durante el proceso revolucionario.",
    sourceIds: ["SRC-009"],
  },
  {
    id: "PER-015",
    name: "Bartolomé Mitre",
    description:
      "Historiador utilizado como referencia para los debates historiográficos sobre la Revolución de Mayo.",
    sourceIds: ["SRC-010"],
  },
  {
    id: "PER-016",
    name: "Vicente Fidel López",
    description:
      "Historiador utilizado como referencia para los debates historiográficos sobre la Revolución de Mayo.",
    sourceIds: ["SRC-010"],
  },
];

export function getPersonById(id: string): HistoricalPerson | undefined {
  return PEOPLE.find((person) => person.id === id);
}

export function getPeopleForCard(
  personIds: string[],
): HistoricalPerson[] {
  return personIds
    .map((id) => getPersonById(id))
    .filter((person): person is HistoricalPerson => person !== undefined);
}
