import type { HistoricalEvent } from "@/types/game";

export const EVENTS: HistoricalEvent[] = [
  {
    id: "EVT-001",
    title: "Revolución de Mayo",
    year: "1810",
    description:
      "Proceso político iniciado en Buenos Aires en mayo de 1810 que culminó con la formación de la Primera Junta.",
    sourceIds: ["SRC-001", "SRC-003", "SRC-005"],
  },
  {
    id: "EVT-002",
    title: "Declaración de la Independencia",
    year: "1816",
    description:
      "Declaración realizada el 9 de julio de 1816 por el Congreso reunido en San Miguel de Tucumán.",
    sourceIds: ["SRC-001", "SRC-006", "SRC-007"],
  },
  {
    id: "EVT-003",
    title: "Creación del Virreinato del Río de la Plata",
    year: "1776",
    description:
      "Creación del Virreinato del Río de la Plata, estructura política de la que formaba parte el territorio en 1810.",
    sourceIds: ["SRC-002"],
  },
  {
    id: "EVT-004",
    title: "Constitución de 1853",
    year: "1853",
    description:
      "Proceso constitucional mencionado como parte de la posterior conformación institucional del Estado argentino.",
    sourceIds: ["SRC-002"],
  },
  {
    id: "EVT-005",
    title: "Cabildo Abierto del 22 de mayo",
    year: "1810",
    description:
      "Reunión política realizada en Buenos Aires durante la crisis que precedió a la formación de la Primera Junta.",
    sourceIds: ["SRC-004"],
  },
  {
    id: "EVT-006",
    title: "Campañas militares al Alto Perú",
    year: "1810",
    description:
      "Campañas militares vinculadas con la expansión y defensa del proceso revolucionario hacia el Alto Perú.",
    sourceIds: ["SRC-003", "SRC-005"],
  },
  {
    id: "EVT-007",
    title: "Expedición al Paraguay",
    year: "1810",
    description:
      "Expedición militar relacionada con la extensión del proceso revolucionario hacia Paraguay.",
    sourceIds: ["SRC-005"],
  },
  {
    id: "EVT-008",
    title: "Expedición Auxiliar al Alto Perú",
    year: "1810",
    description:
      "Expedición militar vinculada con los conflictos producidos en el Alto Perú después de 1810.",
    sourceIds: ["SRC-005"],
  },
  {
    id: "EVT-009",
    title: "Congreso de Tucumán",
    year: "1816",
    description:
      "Congreso reunido en San Miguel de Tucumán que declaró la independencia el 9 de julio de 1816.",
    sourceIds: ["SRC-006", "SRC-007"],
  },
  {
    id: "EVT-010",
    title: "Sesión secreta del 19 de julio",
    year: "1816",
    description:
      "Sesión del Congreso de Tucumán mencionada en relación con la declaración de independencia.",
    sourceIds: ["SRC-007"],
  },
  {
    id: "EVT-011",
    title: "Cruce de los Andes",
    year: "1817",
    description:
      "Campaña militar vinculada con la estrategia continental de José de San Martín.",
    sourceIds: ["SRC-008"],
  },
  {
    id: "EVT-012",
    title: "Batalla de Chacabuco",
    year: "1817",
    description:
      "Batalla vinculada con la campaña de los Andes y la liberación de Chile.",
    sourceIds: ["SRC-008"],
  },
  {
    id: "EVT-013",
    title: "Expedición Libertadora del Perú",
    year: "1820",
    description:
      "Etapa de la estrategia continental de San Martín orientada hacia la liberación del Perú.",
    sourceIds: ["SRC-008"],
  },
  {
    id: "EVT-014",
    title: "Creación de la Bandera en Rosario",
    year: "1812",
    description:
      "Creación y utilización de la bandera por Manuel Belgrano en Rosario durante el proceso revolucionario.",
    sourceIds: ["SRC-009"],
  },
  {
    id: "EVT-015",
    title: "Oficialización de la Bandera",
    year: "1816",
    description:
      "Adopción formal de la bandera como símbolo nacional durante el período del Congreso de Tucumán.",
    sourceIds: ["SRC-009"],
  },
  {
    id: "EVT-016",
    title: "Debates historiográficos sobre la Revolución de Mayo",
    year: "Siglos XIX–XX",
    description:
      "Debates e interpretaciones historiográficas diferentes sobre la Revolución de Mayo.",
    sourceIds: ["SRC-010"],
  },
];

export function getEventById(id: string): HistoricalEvent | undefined {
  return EVENTS.find((event) => event.id === id);
}

export function getEventsForCard(eventIds: string[]): HistoricalEvent[] {
  return eventIds
    .map((id) => getEventById(id))
    .filter((event): event is HistoricalEvent => event !== undefined);
}
