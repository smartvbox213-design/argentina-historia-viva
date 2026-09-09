import type { AnswerOption, Card, Discovery } from "@/types/game";

export const OPTIONS: AnswerOption[] = [
  "VERDADERO",
  "FALSO",
  "PARCIALMENTE CIERTO",
  "NECESITA CONTEXTO",
];

export const COLLECTION = "REVOLUCIÓN E INDEPENDENCIA · 1810–1816";

export const INTRO_TEXT = [
  "Entre 1810 y 1816, el Río de la Plata pasó de ser un virreinato de la Corona española a declarar su independencia.",
  "La crisis de la monarquía tras la invasión napoleónica a España abrió un vacío de poder que en Buenos Aires se resolvió con la Revolución de Mayo de 1810 y la formación de la Primera Junta.",
  "Los años siguientes fueron de guerra, congresos, juntas, triunviratos y asambleas, hasta que el Congreso reunido en San Miguel de Tucumán declaró la independencia el 9 de julio de 1816.",
  "Lo que hoy se cuenta como una historia simple estuvo lleno de dudas, disputas y matices. Vas a poner a prueba diez afirmaciones sobre ese período.",
];

export const CARDS: Card[] = [
  {
    id: "MYT-001",
    title: "El pueblo en la Plaza",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "El 25 de mayo de 1810 una multitud llenó la Plaza de la Victoria bajo la lluvia para exigir la formación de la Primera Junta.",
    options: OPTIONS,
    correctAnswer: "PARCIALMENTE CIERTO",
    explanation:
      "Hubo movilización, pero no fue una multitud masiva ni espontánea: los concurrentes eran cientos, en buena parte milicianos y grupos organizados por los dirigentes revolucionarios.",
    context:
      "La imagen del pueblo con paraguas bajo la lluvia se consolidó en el siglo XIX como estampa escolar. Las actas y crónicas de la época describen una participación acotada a sectores urbanos vinculados a las milicias y al comercio porteño.",
    concepts: ["Revolución de Mayo", "Cabildo abierto", "Movilización popular"],
    source: {
      title: "Acta del Cabildo de Buenos Aires",
      author: "Cabildo de Buenos Aires",
      year: "1810",
      excerpt:
        "Las actas capitulares de mayo de 1810 registran las deliberaciones, las listas de vecinos convocados y la presión de los cuerpos militares sobre las decisiones del Cabildo.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Cabildo abierto del 22 de mayo", "Revolución de Mayo"],
    relatedPeople: ["Cornelio Saavedra", "Juan José Castelli"],
    relatedPlaces: ["Plaza de la Victoria", "Buenos Aires"],
  },
  {
    id: "MYT-002",
    title: "La independencia de 1810",
    collection: COLLECTION,
    category: "Historia",
    statement: "La Primera Junta de 1810 declaró la independencia de España.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "La Primera Junta gobernó invocando el nombre de Fernando VII, prisionero de Napoleón. La independencia se declaró recién en 1816.",
    context:
      "Gobernar en nombre del rey cautivo, la llamada máscara de Fernando VII, permitía sostener legitimidad frente a España y frente a otras ciudades del virreinato mientras se disputaba el poder real.",
    concepts: ["Máscara de Fernando VII", "Legitimidad", "Primera Junta"],
    source: {
      title: "Circular de la Primera Junta a las provincias",
      author: "Primera Junta de Gobierno",
      year: "1810",
      excerpt:
        "Los documentos oficiales de la Junta se emiten a nombre del señor don Fernando VII y convocan a las ciudades del interior a enviar representantes.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Formación de la Primera Junta", "Declaración de 1816"],
    relatedPeople: ["Fernando VII", "Mariano Moreno"],
    relatedPlaces: ["Buenos Aires"],
  },
  {
    id: "MYT-003",
    title: "La bandera de Belgrano",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "Manuel Belgrano creó la bandera celeste y blanca con la autorización del gobierno de Buenos Aires.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Belgrano la enarboló en Rosario en 1812 por iniciativa propia y el Triunvirato le ordenó ocultarla, por temor a que se interpretara como una ruptura abierta con España.",
    context:
      "La bandera fue adoptada oficialmente recién años después. El episodio muestra la tensión entre los revolucionarios más decididos y un gobierno que buscaba no romper formalmente con la Corona.",
    concepts: ["Símbolos patrios", "Primer Triunvirato", "Ruptura simbólica"],
    source: {
      title: "Correspondencia entre Belgrano y el Triunvirato",
      author: "Manuel Belgrano / Primer Triunvirato",
      year: "1812",
      excerpt:
        "Los oficios del gobierno instruyen a Belgrano a hacer desaparecer la nueva enseña y sostener la bandera usada hasta entonces.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Izamiento en Rosario", "Éxodo jujeño"],
    relatedPeople: ["Manuel Belgrano", "Bernardino Rivadavia"],
    relatedPlaces: ["Rosario", "Buenos Aires"],
  },
  {
    id: "MYT-004",
    title: "Una revolución porteña",
    collection: COLLECTION,
    category: "Historia",
    statement: "La Revolución de Mayo fue aceptada de inmediato en todo el virreinato.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Córdoba, el Alto Perú, el Paraguay y la Banda Oriental resistieron o rechazaron la autoridad de la Junta porteña, y varias regiones quedaron bajo control realista.",
    context:
      "La revolución abrió un conflicto largo entre Buenos Aires y las demás ciudades por quién ejercía la soberanía tras la caída del virrey. Esa disputa atraviesa toda la década.",
    concepts: ["Soberanía de los pueblos", "Guerra de independencia", "Federalismo temprano"],
    source: {
      title: "Partes militares de las campañas al interior",
      author: "Ejército Auxiliar del Perú",
      year: "1810-1812",
      excerpt:
        "Los partes de campaña documentan la expedición a Córdoba y al Alto Perú enviada para imponer la autoridad de la Junta.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Expedición al Alto Perú", "Contrarrevolución de Córdoba"],
    relatedPeople: ["Santiago de Liniers", "Juan José Castelli"],
    relatedPlaces: ["Córdoba", "Alto Perú", "Asunción"],
  },
  {
    id: "MYT-005",
    title: "El Congreso de Tucumán",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "En el Congreso de Tucumán de 1816 estuvieron representadas todas las provincias del actual territorio argentino.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Faltaron los diputados del litoral artiguista y participaron, en cambio, representantes de territorios altoperuanos que hoy no son argentinos.",
    context:
      "El mapa político de 1816 no coincide con el mapa actual. El Congreso declaró la independencia de las Provincias Unidas en Sud América, una entidad de fronteras todavía en disputa.",
    concepts: ["Provincias Unidas", "Artiguismo", "Territorialidad"],
    source: {
      title: "Acta de la Independencia",
      author: "Congreso de Tucumán",
      year: "1816",
      excerpt:
        "El acta enumera los diputados presentes por cada ciudad y provincia representada en la sesión del 9 de julio.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Declaración de la Independencia"],
    relatedPeople: ["Francisco Narciso de Laprida", "José Gervasio Artigas"],
    relatedPlaces: ["San Miguel de Tucumán", "Alto Perú"],
  },
  {
    id: "MYT-006",
    title: "Mariano Moreno",
    collection: COLLECTION,
    category: "Historia",
    statement: "Mariano Moreno murió asesinado por orden de sus rivales políticos.",
    options: OPTIONS,
    correctAnswer: "NECESITA CONTEXTO",
    explanation:
      "Murió en alta mar en 1811 durante una misión diplomática. La hipótesis del envenenamiento circuló desde entonces, pero no hay pruebas documentales concluyentes.",
    context:
      "Moreno había quedado en minoría dentro de la Junta tras el enfrentamiento con Saavedra. Su muerte temprana alimentó una larga disputa historiográfica sobre su figura y su final.",
    concepts: ["Junta Grande", "Historiografía", "Debate documental"],
    source: {
      title: "Relatos del viaje y correspondencia familiar",
      author: "Manuel Moreno",
      year: "1812",
      excerpt:
        "El hermano de Moreno publicó una memoria sobre su vida y su muerte a bordo, base de gran parte de las versiones posteriores.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Renuncia de Moreno", "Junta Grande"],
    relatedPeople: ["Mariano Moreno", "Cornelio Saavedra"],
    relatedPlaces: ["Océano Atlántico", "Buenos Aires"],
  },
  {
    id: "MYT-007",
    title: "El primer gobierno patrio",
    collection: COLLECTION,
    category: "Historia",
    statement: "La Primera Junta fue elegida por voto de todos los habitantes de Buenos Aires.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Votó una fracción de los vecinos convocados al Cabildo abierto del 22 de mayo: varones, propietarios y notables. Mujeres, esclavizados y la mayoría de la población quedaron excluidos.",
    context:
      "El concepto de vecino en el orden colonial no equivalía a ciudadano moderno. La representación era corporativa y restringida, no universal.",
    concepts: ["Vecino", "Cabildo abierto", "Representación restringida"],
    source: {
      title: "Registro de invitaciones al Cabildo abierto",
      author: "Cabildo de Buenos Aires",
      year: "1810",
      excerpt:
        "Se repartieron alrededor de cuatrocientas cincuenta esquelas de invitación y asistió una porción menor de los convocados.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Cabildo abierto del 22 de mayo"],
    relatedPeople: ["Cornelio Saavedra", "Juan José Paso"],
    relatedPlaces: ["Buenos Aires"],
  },
  {
    id: "MYT-008",
    title: "La Asamblea del Año XIII",
    collection: COLLECTION,
    category: "Historia",
    statement: "La Asamblea del Año XIII abolió la esclavitud en las Provincias Unidas.",
    options: OPTIONS,
    correctAnswer: "PARCIALMENTE CIERTO",
    explanation:
      "Dictó la libertad de vientres: los hijos de mujeres esclavizadas nacidos desde 1813 serían libres. La esclavitud como institución no fue abolida entonces.",
    context:
      "La medida fue significativa pero gradual y llena de excepciones. La abolición plena llegaría décadas más tarde, ya bien avanzado el siglo XIX.",
    concepts: ["Libertad de vientres", "Esclavitud", "Reformas de 1813"],
    source: {
      title: "Decretos de la Asamblea General Constituyente",
      author: "Asamblea del Año XIII",
      year: "1813",
      excerpt:
        "El decreto declara libres a los nacidos de madre esclava en el territorio de las Provincias Unidas desde el 31 de enero de 1813.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Asamblea del Año XIII"],
    relatedPeople: ["Carlos María de Alvear"],
    relatedPlaces: ["Buenos Aires"],
  },
  {
    id: "MYT-009",
    title: "San Martín y la independencia",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "José de San Martín presionó al Congreso de Tucumán para que declarara la independencia.",
    options: OPTIONS,
    correctAnswer: "VERDADERO",
    explanation:
      "Desde Cuyo insistió por carta ante los diputados en que declarar la independencia era condición indispensable para sostener la guerra.",
    context:
      "San Martín preparaba el cruce de los Andes y necesitaba un estado con existencia jurídica declarada para negociar, reclutar y dar sentido político a la campaña continental.",
    concepts: ["Plan continental", "Cuyo", "Legitimidad internacional"],
    source: {
      title: "Correspondencia de San Martín con los diputados de Cuyo",
      author: "José de San Martín",
      year: "1816",
      excerpt:
        "En sus cartas reclama que se declare la independencia de un modo solemne y público, y se pregunta qué se espera para hacerlo.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Congreso de Tucumán", "Cruce de los Andes"],
    relatedPeople: ["José de San Martín", "Tomás Godoy Cruz"],
    relatedPlaces: ["Mendoza", "San Miguel de Tucumán"],
  },
  {
    id: "MYT-010",
    title: "Las mujeres de la revolución",
    collection: COLLECTION,
    category: "Historia",
    statement: "Las mujeres no tuvieron ninguna participación en el proceso revolucionario.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Participaron financiando la guerra, sosteniendo tertulias políticas, actuando como espías, enfermeras y combatientes, aunque sin derechos políticos formales.",
    context:
      "Su exclusión de la ciudadanía formal hizo que su intervención quedara poco registrada en la documentación oficial y fuera recuperada más tarde por la investigación histórica.",
    concepts: ["Participación femenina", "Tertulias", "Historia social"],
    source: {
      title: "Donativos patrióticos y registros de la Gaceta",
      author: "Gaceta de Buenos Ayres",
      year: "1812-1816",
      excerpt:
        "Las listas de donativos publicadas registran nombres de mujeres que aportaron joyas y dinero al sostenimiento de los ejércitos.",
    },
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Guerra de independencia"],
    relatedPeople: ["Mariquita Sánchez de Thompson", "Juana Azurduy"],
    relatedPlaces: ["Buenos Aires", "Alto Perú"],
  },
];

export const DISCOVERY: Discovery = {
  name: "Revolución de Mayo",
  year: "1810",
  place: "Buenos Aires",
  description:
    "Entre el 18 y el 25 de mayo de 1810, la noticia de la caída de la Junta de Sevilla precipitó en Buenos Aires una semana de deliberaciones que terminó con la destitución del virrey Cisneros y la formación de la Primera Junta de Gobierno, primer gobierno patrio del Río de la Plata.",
  concepts: [
    "Cabildo abierto",
    "Soberanía de los pueblos",
    "Máscara de Fernando VII",
    "Primera Junta",
  ],
  event: "Semana de Mayo · 18 al 25 de mayo de 1810",
  people: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Castelli", "Manuel Belgrano"],
  relatedCards: ["MYT-001", "MYT-002", "MYT-004", "MYT-007"],
};
