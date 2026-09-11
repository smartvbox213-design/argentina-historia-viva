import type { Card, HistoricalSource } from "@/types/game";

export const SOURCES: HistoricalSource[] = [
  {
    id: "SRC-001",
    title: "Acta Capitular del 25 de mayo de 1810",
    author: "Cabildo de Buenos Aires",
    year: "1810",
    description:
      "Se constituye la Junta Provisional Gubernativa de las Provincias del Río de la Plata a nombre del señor Don Fernando VII...",
  },
  {
    id: "SRC-002",
    title: "Estatuto Provisional y Decretos de Mayo",
    author: "Primera Junta",
    year: "1810",
    description:
      "Provincias del Río de la Plata en transición política tras la disolución del poder virreinal central.",
  },
  {
    id: "SRC-003",
    title: "Memorias Curiosas",
    author: "Juan Manuel Beruti",
    year: "1810",
    description:
      "Crónicas de las diversas facciones y opiniones encontradas entre vecinos, eclesiásticos y milicias en las jornadas de mayo.",
  },
  {
    id: "SRC-004",
    title: "Lista de concurrentes al Cabildo Abierto del 22 de mayo",
    author: "Archivo General de la Nación",
    year: "1810",
    description:
      "Registro de los vecinos destacados citados por esquela para deliberar sobre la cesación del virrey.",
  },
  {
    id: "SRC-005",
    title: "Oficios de la Junta Gubernativa a los Cabildos del Interior",
    author: "Primera Junta",
    year: "1810",
    description:
      "Comunicaciones exigiendo juramento de obediencia y el envío de diputados desde las ciudades del interior.",
  },
  {
    id: "SRC-006",
    title: "Acta de Declaración de la Independencia de las Provincias Unidas",
    author: "Congreso de Tucumán",
    year: "1816",
    description:
      "En la benemérita y muy digna ciudad de San Miguel de Tucumán... declaran solemnemente la independencia de los reyes de España.",
  },
  {
    id: "SRC-007",
    title: "Manifiesto a las Naciones del Congreso General Constituyente",
    author: "Congreso de Tucumán",
    year: "1816",
    description:
      "Justificación solemne ante el mundo de los motivos de las Provincias Unidas para emanciparse de la corona española.",
  },
  {
    id: "SRC-008",
    title: "Correspondencia entre José de San Martín y Tomás Godoy Cruz",
    author: "José de San Martín",
    year: "1816",
    description:
      "Cartas donde San Martín apremia la declaración de independencia para dar estatus legal al Ejército Libertador que cruzaría los Andes.",
  },
  {
    id: "SRC-009",
    title: "Comunicación de Manuel Belgrano al Gobierno Superior",
    author: "Manuel Belgrano",
    year: "1812",
    description:
      "Siendo preciso enarbolar bandera y no teniéndola, la mandé hacer celeste y blanca, conforme a los colores de la escarapela nacional...",
  },
  {
    id: "SRC-010",
    title: "¿Qué es la historia?",
    author: "E.H. Carr",
    year: "1961",
    description:
      "La historia es un proceso continuo de interacción entre el historiador y sus hechos, un diálogo sin fin entre el presente y el pasado.",
  },
];

const SOURCE_MAP = new Map(SOURCES.map((s) => [s.id, s]));

export function getSourceById(id: string): HistoricalSource | undefined {
  return SOURCE_MAP.get(id);
}

export function getSourcesForCard(card: Card): HistoricalSource[] {
  return card.sourceIds
    .map((id) => SOURCE_MAP.get(id))
    .filter((s): s is HistoricalSource => Boolean(s));
}
