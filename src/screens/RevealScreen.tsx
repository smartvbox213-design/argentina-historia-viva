import { useState } from "react";
import { useGame } from "@/game/gameState";
import { pointsFor, xpFor } from "@/game/scoring";
import { Button, Eyebrow, Panel, Screen, Stat, StreakBadge } from "@/components/game/ui";
import { cn } from "@/lib/utils";

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

  const points = pointsFor(outcome);
  const xp = xpFor(outcome, sourceConsulted);

  return (
    <Screen>
      <div className="flex items-center justify-between gap-4">
        <Eyebrow>{`Carta ${index + 1} de ${cards.length}`}</Eyebrow>
        <StreakBadge streak={streak} />
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
          {sources.map((s) => (
            <p key={s.id} className="mt-2 font-serif text-lg text-foreground">
              {s.title} · {s.author} ({s.year})
            </p>
          ))}
          {openSource ? (
            <div className="mt-3 space-y-3">
              {sources.map((s) => (
                <p
                  key={s.id}
                  className="rounded-xl border border-sol/30 bg-sol/5 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {s.description}
                </p>
              ))}
            </div>
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
