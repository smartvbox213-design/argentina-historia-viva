import { useGame } from "@/game/gameState";
import { COMPLETION_BONUS_XP, MATCH_BONUS_XP, formatTime } from "@/game/scoring";
import { Button, Eyebrow, Panel, Screen, Stat } from "@/components/game/ui";

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
