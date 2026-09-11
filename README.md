# Argentina Historia Viva

Construir la aplicación web jugable "ARGENTINA: HISTORIA DE UNA NACIÓN" (MVP 0.1), un juego educativo e interactivo de historia argentina.

Lema: “Un país. Mil historias. Tus decisiones.”
Modo de juego habilitado: MITOS Y VERDADES.
Colección: REVOLUCIÓN E INDEPENDENCIA · 1810–1816 (10 cartas).

Flujo completo:
1. HOME: Nombre, lema, botón "JUGAR AHORA", accesos visuales bloqueados ("Explorar Argentina", "Mi progreso").
2. SELECCIÓN DE MODO: "¿CÓMO QUERÉS JUGAR?", tarjeta activa "MITOS Y VERDADES", tarjetas bloqueadas ("EXPLORAR ARGENTINA", "DESAFÍO", "COOPERATIVO", "MODO AULA").
3. CONFIGURACIÓN: Resumen (Jugador 1, 10 cartas, Dificultad Explorador, Categoría Historia, Colección Revolución e Independencia), botón "COMENZAR PARTIDA".
4. INTRODUCCIÓN: Texto histórico de contexto 1810-1816, botón "COMENZAR".
5. PANTALLA PRINCIPAL DE JUEGO:
   - Contador "CARTA X DE 10".
   - Temporizador de 15 segundos con animación (al llegar a 0 cuenta como "SIN RESPUESTA" y avanza a revelación sin penalizar como incorrecta).
   - Afirmación histórica destacada en el centro.
   - 4 opciones de respuesta grandes y táctiles: VERDADERO, FALSO, PARCIALMENTE CIERTO, NECESITA CONTEXTO.
   - Al seleccionar respuesta, bloquear opciones, parar timer y mostrar revelación.
6. REVELACIÓN:
   - Indicador claro: CORRECTO, INCORRECTO, RESPUESTA PARCIAL o SIN RESPUESTA.
   - Sección "¿POR QUÉ?": Explicación breve y clara.
   - Sección "CONTEXTO": Relevancia histórica y matices.
   - Sección "¿CÓMO SABEMOS ESTO?": Fuente histórica asociada con botón interactivo para consultar la fuente (+5 XP bonus al consultarla).
   - Puntos obtenidos (+2 correcta o "necesita contexto" si aplica, +1 parcial, 0 incorrecta/agotada).
   - XP obtenida (+10 por completar carta, +5 por correcta, +5 por consultar fuente).
   - Racha visual (Racha x3, Racha x5).
   - Botón "CONTINUAR" a la siguiente carta.
7. RESULTADOS:
   - Resumen completo: Puntaje total, Respuestas correctas, parciales, incorrectas, sin respuesta, precisión (%), XP total (incluyendo bonus de +20 por 10 cartas y +15 por partida), mejor racha, tiempo total.
   - Clasificación educativa: Explorador / Investigador / Historiador según rendimiento.
   - Botón "VER DESCUBRIMIENTO".
8. DESCUBRIMIENTO:
   - "NUEVO DESCUBRIMIENTO": Revolución de Mayo (1810, Buenos Aires), descripción del acontecimiento, conceptos, evento, personajes, lugar, cartas relacionadas.
   - Botón "VOLVER AL INICIO".

DATOS ESTRUCTURADOS (en TypeScript/JSON modular en src/data/cards.ts):
Implementar rigurosamente las 10 cartas proporcionadas en la consigna (MYT-001 a MYT-010) con todos sus campos (id, title, collection, category, statement, options, correctAnswer, explanation, context, concepts, source, points, xp, timeLimit, relatedEvents, relatedPeople, relatedPlaces). No inventar contenido histórico adicional en las cartas.

DISEÑO Y ARQUITECTURA:
- Estética cinematográfica, museo moderno y editorial premium inspirada en Argentina (celestes profundos, dorados/sol de mayo sutiles, tonos pergamino/pizarra oscura, tipografía elegante y legible).
- Totalmente responsive (desktop y mobile).
- Arquitectura desacoplada: types, data, game store/state, componentes UI modulares.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0eb33eaa-6bde-4ac8-bf99-f134e5498f9b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
