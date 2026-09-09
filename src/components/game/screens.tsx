import { useEffect, useRef, useState } from "react";
import { CARDS, COLLECTION, DISCOVERY, INTRO_TEXT } from "@/data/cards";
import { COMPLETION_BONUS_XP, MATCH_BONUS_XP, formatTime } from "@/lib/game-logic";
import { useGame } from "@/store/game-store";
import { Button, Eyebrow, LockedCard, Panel, Screen, Stat } from "@/components/game/ui";
import { cn } from "@/lib/utils";
import type { AnswerOption } from "@/types/game";

export function HomeScreen() {
  const { goTo } = useGame();
  return (
    <Screen className="text-center">
      <div className="animate-fade-in space-y-6">
        <Eyebrow>Juego educativo de historia</Eyebrow>
        <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-6xl">
          ARGENTINA
          <span className="mt-2 block text-2xl tracking-[0.2em] text-sol sm:text-3xl">
            HISTORIA DE UNA NACIÓN
          </span>
        </h1>
        <p className="mx-auto max-w-md text-lg italic text-muted-foreground">
          “Un país. Mil historias. Tus decisiones.”
        </p>
        <div className="pt-2">
          <Button onClick={() => goTo("mode")}>Jugar ahora</Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <LockedCard title="Explorar Argentina" note="Bloqueado" />
        <LockedCard title="Mi progreso" note="Bloqueado" />
      </div>
    </Screen>
  );
}

export function ModeScreen() {
  const { goTo } = useGame();
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Paso 1 de 3</Eyebrow>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">¿CÓMO QUERÉS JUGAR?</h2>
      </div>
      <button
        onClick={() => goTo("setup")}
        className="group rounded-2xl border border-sol/60 bg-gradient-to-br from-card to-card/40 p-6 text-left shadow-glow transition-transform duration-200 hover:scale-[1.01]"
      >
        <Eyebrow>Modo disponible</Eyebrow>
        <h3 className="mt-2 font-serif text-2xl text-foreground">MITOS Y VERDADES</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Poné a prueba diez afirmaciones sobre la historia argentina y descubrí qué dicen las
          fuentes.
        </p>
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sol">
          Seleccionar →
        </span>
      </button>
      <div className="grid gap-4 sm:grid-cols-2">
        <LockedCard title="EXPLORAR ARGENTINA" />
        <LockedCard title="DESAFÍO" />
        <LockedCard title="COOPERATIVO" />
        <LockedCard title="MODO AULA" />
      </div>
      <div className="text-center">
        <Button variant="ghost" onClick={() => goTo("home")}>
          Volver
        </Button>
      </div>
    </Screen>
  );
}

export function SetupScreen() {
  const { goTo } = useGame();
  const rows = [
    ["Jugadores", "Jugador 1"],
    ["Cartas", "10 cartas"],
    ["Dificultad", "Explorador"],
    ["Categoría", "Historia"],
    ["Colección", "Revolución e Independencia · 1810–1816"],
  ];
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Paso 2 de 3</Eyebrow>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">CONFIGURACIÓN</h2>
      </div>
      <Panel>
        <dl className="divide-y divide-border/60">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
              <dd className="text-right font-serif text-lg text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </Panel>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="ghost" onClick={() => goTo("mode")}>
          Volver
        </Button>
        <Button onClick={() => goTo("intro")}>Comenzar partida</Button>
      </div>
    </Screen>
  );
}

export function IntroScreen() {
  const { start } = useGame();
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>{COLLECTION}</Eyebrow>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">INTRODUCCIÓN</h2>
      </div>
      <Panel className="space-y-4">
        {INTRO_TEXT.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </Panel>
      <div className="text-center">
        <Button onClick={start}>Comenzar</Button>
      </div>
    </Screen>
  );
}

export function PlayScreen() {
  const { current, index, cards, answer, tick } = useGame();
  const [remaining, setRemaining] = useState(current.timeLimit);
  const answered = useRef(false);

  useEffect(() => {
    answered.current = false;
    setRemaining(current.timeLimit);
    const id = setInterval(() => {
      tick();
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          if (!answered.current) {
            answered.current = true;
            answer(null);
          }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [current.id, current.timeLimit, answer, tick]);

  const pick = (option: AnswerOption) => {
    if (answered.current) return;
    answered.current = true;
    answer(option);
  };

  const pct = (remaining / current.timeLimit) * 100;

  return (
    <Screen>
      <div className="flex items-center justify-between gap-4">
        <Eyebrow>{`Carta ${index + 1} de ${cards.length}`}</Eyebrow>
        <span
          className={cn(
            "font-serif text-2xl tabular-nums",
            remaining <= 5 ? "text-destructive" : "text-sol",
          )}
        >
          {remaining}s
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-1000 ease-linear",
            remaining <= 5 ? "bg-destructive" : "bg-sol",
          )}
          style={{ width: `${pct}%` }}
        />
      </div>

      <Panel className="text-center">
        <Eyebrow>{current.title}</Eyebrow>
        <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          {current.statement}
        </p>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-2">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => pick(option)}
            className="rounded-2xl border border-border bg-card/60 px-5 py-6 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all duration-200 hover:border-sol hover:bg-card hover:text-sol active:scale-[0.98]"
          >
            {option}
          </button>
        ))}
      </div>
    </Screen>
  );
}

const OUTCOME_STYLES: Record<string, string> = {
  CORRECTO: "text-emerald-400 border-emerald-400/40",
  INCORRECTO: "text-destructive border-destructive/40",
  "RESPUESTA PARCIAL": "text-sol border-sol/40",
  "SIN RESPUESTA": "text-muted-foreground border-border",
};

export function RevealScreen() {
  const { current, outcome, selected, sourceConsulted, consultSource, streak, next, index, cards } =
    useGame();
  const [openSource, setOpenSource] = useState(false);
  if (!outcome) return null;

  const points = outcome === "CORRECTO" ? 2 : outcome === "RESPUESTA PARCIAL" ? 1 : 0;
  const xp = 10 + (outcome === "CORRECTO" ? 5 : 0) + (sourceConsulted ? 5 : 0);

  return (
    <Screen>
      <div className="flex items-center justify-between gap-4">
        <Eyebrow>{`Carta ${index + 1} de ${cards.length}`}</Eyebrow>
        {streak >= 3 && (
          <span className="rounded-full border border-sol/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sol">
            🔥 Racha x{streak}
          </span>
        )}
      </div>

      <div
        className={cn(
          "animate-scale-in rounded-2xl border-2 bg-card/60 p-6 text-center",
          OUTCOME_STYLES[outcome],
        )}
      >
        <p className="font-serif text-3xl">{outcome}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {selected ? `Tu respuesta: ${selected}` : "Se agotó el tiempo"} · Correcta:{" "}
          {current.correctAnswer}
        </p>
      </div>

      <Panel className="space-y-5">
        <section>
          <Eyebrow>¿Por qué?</Eyebrow>
          <p className="mt-2 leading-relaxed text-muted-foreground">{current.explanation}</p>
        </section>
        <section>
          <Eyebrow>Contexto</Eyebrow>
          <p className="mt-2 leading-relaxed text-muted-foreground">{current.context}</p>
        </section>
        <section>
          <Eyebrow>¿Cómo sabemos esto?</Eyebrow>
          <p className="mt-2 font-serif text-lg text-foreground">
            {current.source.title} · {current.source.author} ({current.source.year})
          </p>
          {openSource ? (
            <p className="mt-3 rounded-xl border border-sol/30 bg-sol/5 p-4 text-sm leading-relaxed text-muted-foreground">
              {current.source.excerpt}
            </p>
          ) : (
            <Button
              variant="sol"
              className="mt-3 px-6 py-3 text-xs"
              onClick={() => {
                setOpenSource(true);
                consultSource();
              }}
            >
              Consultar la fuente · +5 XP
            </Button>
          )}
        </section>
        <div className="flex flex-wrap gap-2">
          {current.concepts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </Panel>

      <div className="grid grid-cols-2 gap-3">
        <Stat label="Puntos" value={`+${points}`} />
        <Stat label="XP" value={`+${xp}`} />
      </div>

      <div className="text-center">
        <Button onClick={next}>Continuar</Button>
      </div>
    </Screen>
  );
}

export function ResultsScreen() {
  const { summary, goTo, elapsed, cards } = useGame();
  if (!summary) return null;
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Partida finalizada</Eyebrow>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">RESULTADOS</h2>
        <p className="text-sm uppercase tracking-[0.25em] text-sol">
          Clasificación: {summary.rank}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="Puntaje total" value={summary.totalPoints} />
        <Stat label="Precisión" value={`${summary.accuracy}%`} />
        <Stat label="XP total" value={summary.totalXp} />
        <Stat label="Correctas" value={summary.correct} />
        <Stat label="Parciales" value={summary.partial} />
        <Stat label="Incorrectas" value={summary.incorrect} />
        <Stat label="Sin respuesta" value={summary.unanswered} />
        <Stat label="Mejor racha" value={`x${summary.bestStreak}`} />
        <Stat label="Tiempo total" value={formatTime(elapsed)} />
      </div>
      <Panel className="text-sm text-muted-foreground">
        Incluye bonus de +{COMPLETION_BONUS_XP} XP por completar las {cards.length} cartas y +
        {MATCH_BONUS_XP} XP por finalizar la partida.
      </Panel>
      <div className="text-center">
        <Button onClick={() => goTo("discovery")}>Ver descubrimiento</Button>
      </div>
    </Screen>
  );
}

export function DiscoveryScreen() {
  const { reset } = useGame();
  const related = CARDS.filter((c) => DISCOVERY.relatedCards.includes(c.id));
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Nuevo descubrimiento</Eyebrow>
        <h2 className="font-serif text-4xl text-foreground">{DISCOVERY.name}</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {DISCOVERY.year} · {DISCOVERY.place}
        </p>
      </div>
      <Panel className="space-y-5">
        <p className="leading-relaxed text-muted-foreground">{DISCOVERY.description}</p>
        <div>
          <Eyebrow>Evento</Eyebrow>
          <p className="mt-1 text-foreground">{DISCOVERY.event}</p>
        </div>
        <div>
          <Eyebrow>Personajes</Eyebrow>
          <p className="mt-1 text-foreground">{DISCOVERY.people.join(" · ")}</p>
        </div>
        <div>
          <Eyebrow>Conceptos</Eyebrow>
          <div className="mt-2 flex flex-wrap gap-2">
            {DISCOVERY.concepts.map((c) => (
              <span
                key={c}
                className="rounded-full border border-sol/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-sol"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Cartas relacionadas</Eyebrow>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {related.map((c) => (
              <li key={c.id}>
                {c.id} · {c.title}
              </li>
            ))}
          </ul>
        </div>
      </Panel>
      <div className="text-center">
        <Button onClick={reset}>Volver al inicio</Button>
      </div>
    </Screen>
  );
}
