import type { AnswerOption, Card, Discovery } from "@/types/game";

export const OPTIONS: AnswerOption[] = [
  "VERDADERO",
  "FALSO",
  "PARCIALMENTE CIERTO",
  "NECESITA CONTEXTO",
];

export const COLLECTION = "REVOLUCIÓN E INDEPENDENCIA · 1810–1816";

export const INTRO_TEXT = [
  "Entre 1810 y 1816 se produjo una transformación política decisiva en el territorio del antiguo Virreinato del Río de la Plata. La Revolución de Mayo abrió un proceso de cambios, conflictos y disputas que culminó con la declaración de independencia en Tucumán en 1816.",
];

export const CARDS: Card[] = [
  {
    id: "MYT-001",
    title: "25 DE MAYO",
    collection: COLLECTION,
    category: "Historia",
    statement: "Argentina declaró su independencia el 25 de mayo de 1810.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "El 25 de mayo de 1810 comenzó la Revolución de Mayo y se formó la Primera Junta en Buenos Aires. La declaración de independencia ocurrió posteriormente, el 9 de julio de 1816, en el Congreso reunido en Tucumán.",
    context:
      "La Revolución de Mayo inició el proceso de autogobierno en el Río de la Plata tras la captura del rey Fernando VII por Napoleón, pero la ruptura formal y definitiva con la monarquía española se consolidó seis años más tarde.",
    concepts: ["Revolución de Mayo", "Primera Junta", "Independencia", "Buenos Aires", "Tucumán"],
    sourceIds: ["SRC-001"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Revolución de Mayo", "Declaración de la Independencia"],
    relatedPeople: ["Cornelio Saavedra", "Mariano Moreno"],
    relatedPlaces: ["Buenos Aires", "Tucumán"],
  },
  {
    id: "MYT-002",
    title: "¿YA EXISTÍA ARGENTINA?",
    collection: COLLECTION,
    category: "Historia",
    statement: "En 1810 Argentina ya era un país independiente llamado República Argentina.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "En 1810 el territorio formaba parte del Virreinato del Río de la Plata y atravesaba una crisis política. La construcción del Estado argentino fue un proceso posterior y complejo.",
    context:
      'La denominación "República Argentina" y la conformación institucional del Estado nacional demandaron décadas de guerras civiles y acuerdos constitucionales que culminaron en la Constitución de 1853.',
    concepts: [
      "Virreinato del Río de la Plata",
      "Revolución",
      "Independencia",
      "Formación del Estado",
    ],
    sourceIds: ["SRC-002"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Creación del Virreinato (1776)", "Constitución de 1853"],
    relatedPeople: ["Cornelio Saavedra", "Baltasar Hidalgo de Cisneros"],
    relatedPlaces: ["Virreinato del Río de la Plata", "Buenos Aires"],
  },
  {
    id: "MYT-003",
    title: "TODOS QUERÍAN LA INDEPENDENCIA",
    collection: COLLECTION,
    category: "Historia",
    statement: "En 1810 todos los habitantes del territorio querían independizarse de España.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "La afirmación generaliza una situación mucho más compleja. Existían diferentes posiciones políticas, intereses y proyectos. Además, la Primera Junta inicialmente actuó en nombre de Fernando VII.",
    context:
      "Coexistían sectores realistas leales a la Corona, autonomistas moderados que gobernaban en nombre del monarca cautivo y revolucionarios radicales partidarios de una ruptura total inmediata.",
    concepts: [
      "Fernando VII",
      "Primera Junta",
      "Revolución",
      "Conflicto político",
      "Pensamiento crítico",
    ],
    sourceIds: ["SRC-003"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Revolución de Mayo", "Campañas militares al Alto Perú"],
    relatedPeople: ["Fernando VII", "Mariano Moreno", "Cornelio Saavedra"],
    relatedPlaces: ["Buenos Aires", "Córdoba", "Montevideo"],
  },
  {
    id: "MYT-004",
    title: "¿UNA ELECCIÓN DEMOCRÁTICA?",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "La Primera Junta fue elegida democráticamente por todos los habitantes de Buenos Aires.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "Aplicar el concepto actual de democracia a la política de 1810 puede generar un anacronismo. La representación política de aquella época no equivalía a la democracia universal contemporánea.",
    context:
      "El Cabildo Abierto convocaba únicamente a los 'vecinos principales': hombres propietarios, miembros de la elite mercantil, militar o eclesiástica. La inmensa mayoría de la población (mujeres, esclavizados, pueblos originarios y sectores populares) estaba excluida del voto.",
    concepts: ["Cabildo abierto", "Representación política", "Democracia", "Anacronismo"],
    sourceIds: ["SRC-004"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Cabildo Abierto del 22 de mayo"],
    relatedPeople: ["Juan José Castelli", "Julián de Leiva"],
    relatedPlaces: ["Cabildo de Buenos Aires"],
  },
  {
    id: "MYT-005",
    title: "¿SOLO BUENOS AIRES?",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "La Revolución de Mayo fue simplemente un acontecimiento de Buenos Aires que no afectó al resto del territorio.",
    options: OPTIONS,
    correctAnswer: "NECESITA CONTEXTO",
    explanation:
      "Los acontecimientos decisivos de mayo ocurrieron en Buenos Aires, pero sus consecuencias se extendieron por distintos territorios del antiguo Virreinato del Río de la Plata y provocaron respuestas y conflictos diferentes.",
    context:
      "Ciudades como Córdoba, Montevideo y Asunción resistieron la autoridad porteña, lo que desató expediciones militares revolucionarias y una prolongada guerra territorial en todo el espacio virreinal.",
    concepts: ["Buenos Aires", "Virreinato", "Revolución", "Territorio", "Contexto"],
    sourceIds: ["SRC-005"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Expedición al Paraguay", "Expedición Auxiliar al Alto Perú"],
    relatedPeople: ["Manuel Belgrano", "Santiago de Liniers"],
    relatedPlaces: ["Buenos Aires", "Córdoba", "Alto Perú", "Paraguay"],
  },
  {
    id: "MYT-006",
    title: "LA INDEPENDENCIA Y BUENOS AIRES",
    collection: COLLECTION,
    category: "Historia",
    statement: "La independencia argentina fue declarada en Buenos Aires.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "La independencia fue declarada el 9 de julio de 1816 por el Congreso reunido en San Miguel de Tucumán.",
    context:
      "La elección de Tucumán como sede del Congreso buscó federalizar las decisiones y alejar el poder de las tensiones políticas y hegemonías de Buenos Aires, garantizando un punto de encuentro geográfico para los diputados provinciales.",
    concepts: ["Tucumán", "Congreso", "9 de julio", "Independencia"],
    sourceIds: ["SRC-006"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Congreso de Tucumán"],
    relatedPeople: ["Francisco Narciso de Laprida", "Juan José Paso"],
    relatedPlaces: ["San Miguel de Tucumán", "Casa de Tucumán"],
  },
  {
    id: "MYT-007",
    title: "9 DE JULIO DE 1816",
    collection: COLLECTION,
    category: "Historia",
    statement: "El 9 de julio de 1816 el Congreso de Tucumán declaró la independencia.",
    options: OPTIONS,
    correctAnswer: "VERDADERO",
    explanation:
      "El Congreso reunido en San Miguel de Tucumán declaró el 9 de julio de 1816 la independencia de las Provincias Unidas en Sud América.",
    context:
      "Fue la ruptura definitiva con España y con 'toda otra dominación extranjera' (fórmula agregada días después), consolidando el estatus soberano de las provincias en plena reconquista absolutista en el resto de América del Sur.",
    concepts: ["Congreso de Tucumán", "Independencia", "1816"],
    sourceIds: ["SRC-007"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Declaración de la Independencia", "Sesión secreta del 19 de julio"],
    relatedPeople: ["Francisco Narciso de Laprida", "Fray Cayetano Rodríguez"],
    relatedPlaces: ["San Miguel de Tucumán"],
  },
  {
    id: "MYT-008",
    title: "SAN MARTÍN Y LOS ANDES",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "San Martín cruzó los Andes únicamente para liberar el territorio que actualmente conocemos como Argentina.",
    options: OPTIONS,
    correctAnswer: "FALSO",
    explanation:
      "La estrategia de San Martín tenía una dimensión continental. La campaña de los Andes estuvo vinculada con la liberación de Chile y posteriormente con la expedición hacia Perú.",
    context:
      "San Martín comprendió que la revolución en el Río de la Plata nunca estaría segura mientras el centro neurálgico del poderío realista en Lima se mantuviera intacto. Por ello ideó el Plan Continental: cruzar la cordillera, liberar Chile y avanzar por mar al Perú.",
    concepts: ["San Martín", "Mendoza", "Andes", "Chile", "Perú", "Estrategia continental"],
    sourceIds: ["SRC-008"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Cruce de los Andes", "Batalla de Chacabuco", "Expedición Libertadora del Perú"],
    relatedPeople: ["José de San Martín", "Bernardo O'Higgins"],
    relatedPlaces: [
      "El Plumerillo (Mendoza)",
      "Cordillera de los Andes",
      "Santiago de Chile",
      "Lima",
    ],
  },
  {
    id: "MYT-009",
    title: "BELGRANO Y LA BANDERA",
    collection: COLLECTION,
    category: "Historia",
    statement: "Manuel Belgrano creó la bandera que actualmente representa a Argentina.",
    options: OPTIONS,
    correctAnswer: "VERDADERO",
    explanation:
      "Belgrano creó la bandera utilizada por las fuerzas revolucionarias en 1812. Posteriormente fue adoptada como símbolo nacional y su utilización tuvo diferentes etapas y regulaciones.",
    context:
      "La enarboló a orillas del río Paraná en las baterías Libertad e Independencia (Rosario) en febrero de 1812. Aunque el Triunvirato inicialmente le ordenó guardarla por razones diplomáticas, fue adoptada formalmente por el Congreso de Tucumán en 1816.",
    concepts: ["Belgrano", "Bandera", "1812", "Símbolos nacionales"],
    sourceIds: ["SRC-009"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Creación de la Bandera en Rosario", "Oficialización en el Congreso de Tucumán"],
    relatedPeople: ["Manuel Belgrano", "Bernardino Rivadavia"],
    relatedPlaces: ["Rosario", "Río Paraná"],
  },
  {
    id: "MYT-010",
    title: "¿DOS HISTORIADORES?",
    collection: COLLECTION,
    category: "Historia",
    statement:
      "Si dos historiadores interpretan un acontecimiento de manera diferente, uno necesariamente está equivocado.",
    options: OPTIONS,
    correctAnswer: "NECESITA CONTEXTO",
    explanation:
      "Los historiadores pueden construir interpretaciones diferentes a partir de preguntas, fuentes y métodos distintos. Eso no significa que todas las interpretaciones tengan el mismo valor: deben evaluarse según la evidencia disponible, la metodología y su capacidad explicativa.",
    context:
      "La historia no es una crónica fija ni mera opinión; es una disciplina científica basada en el análisis riguroso de fuentes documentales, donde perspectivas teóricas divergentes iluminan aspectos complementarios de un proceso complejo.",
    concepts: ["Historiografía", "Interpretación", "Evidencia", "Pensamiento crítico"],
    sourceIds: ["SRC-010"],
    points: 2,
    xp: 10,
    timeLimit: 15,
    relatedEvents: ["Debates historiográficos sobre la Revolución de Mayo"],
    relatedPeople: ["Bartolomé Mitre", "Vicente Fidel López"],
    relatedPlaces: ["Buenos Aires", "Academia Nacional de la Historia"],
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
    "Primera Junta",
    "Formación del Estado",
  ],
  event: "Semana de Mayo · 18 al 25 de mayo de 1810",
  people: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Castelli", "Manuel Belgrano"],
  relatedCards: ["MYT-001", "MYT-002", "MYT-003", "MYT-004", "MYT-005"],
};
