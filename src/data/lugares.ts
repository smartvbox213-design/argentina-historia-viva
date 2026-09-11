import type { HistoricalPlace } from "@/types/game";

export const PLACES: HistoricalPlace[] = [
  {
    id: "PLC-001",
    name: "Buenos Aires",
    description:
      "Ciudad donde ocurrieron los principales acontecimientos de la Revolución de Mayo de 1810.",
    province: "Buenos Aires",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-001", "SRC-003", "SRC-004", "SRC-005"],
  },
  {
    id: "PLC-002",
    name: "San Miguel de Tucumán",
    description:
      "Ciudad donde se reunió el Congreso que declaró la independencia el 9 de julio de 1816.",
    province: "Tucumán",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-006", "SRC-007"],
  },
  {
    id: "PLC-003",
    name: "Casa de Tucumán",
    description:
      "Lugar donde sesionó el Congreso de Tucumán durante el proceso de declaración de independencia.",
    province: "Tucumán",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-006"],
  },
  {
    id: "PLC-004",
    name: "Córdoba",
    description:
      "Ciudad vinculada con la resistencia al proceso revolucionario de 1810.",
    province: "Córdoba",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-003", "SRC-005"],
  },
  {
    id: "PLC-005",
    name: "Montevideo",
    description:
      "Ciudad que aparece vinculada con las diferentes respuestas políticas al proceso revolucionario.",
    province: "Montevideo",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-003"],
  },
  {
    id: "PLC-006",
    name: "Alto Perú",
    description:
      "Territorio hacia el que se desarrollaron campañas militares relacionadas con el proceso revolucionario.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-003", "SRC-005"],
  },
  {
    id: "PLC-007",
    name: "Paraguay",
    description:
      "Territorio hacia el que se dirigió una expedición militar vinculada con el proceso revolucionario.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-005"],
  },
  {
    id: "PLC-008",
    name: "El Plumerillo",
    description:
      "Lugar en Mendoza asociado con la preparación de la campaña de los Andes.",
    province: "Mendoza",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-008"],
  },
  {
    id: "PLC-009",
    name: "Cordillera de los Andes",
    description:
      "Cordillera atravesada durante la campaña continental de José de San Martín.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-008"],
  },
  {
    id: "PLC-010",
    name: "Santiago de Chile",
    description:
      "Ciudad vinculada con la campaña de liberación de Chile.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-008"],
  },
  {
    id: "PLC-011",
    name: "Lima",
    description:
      "Ciudad vinculada con la etapa peruana de la estrategia continental de San Martín.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-008"],
  },
  {
    id: "PLC-012",
    name: "Rosario",
    description:
      "Ciudad vinculada con la creación y utilización de la bandera por Manuel Belgrano en 1812.",
    province: "Santa Fe",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-009"],
  },
  {
    id: "PLC-013",
    name: "Río Paraná",
    description:
      "Lugar asociado con la creación y utilización de la bandera por Manuel Belgrano en 1812.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-009"],
  },
  {
    id: "PLC-014",
    name: "Cabildo de Buenos Aires",
    description:
      "Edificio asociado con el Cabildo Abierto del 22 de mayo de 1810.",
    province: "Buenos Aires",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-004"],
  },
  {
    id: "PLC-015",
    name: "Virreinato del Río de la Plata",
    description:
      "Entidad política de la que formaba parte el territorio durante los acontecimientos de 1810.",
    province: "",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-002"],
  },
  {
    id: "PLC-016",
    name: "Academia Nacional de la Historia",
    description:
      "Institución mencionada en relación con los debates historiográficos sobre la historia argentina.",
    province: "Buenos Aires",
    latitude: null,
    longitude: null,
    sourceIds: ["SRC-010"],
  },
];

export function getPlaceById(id: string): HistoricalPlace | undefined {
  return PLACES.find((place) => place.id === id);
}

export function getPlacesForCard(
  placeIds: string[],
): HistoricalPlace[] {
  return placeIds
    .map((id) => getPlaceById(id))
    .filter((place): place is HistoricalPlace => place !== undefined);
}
