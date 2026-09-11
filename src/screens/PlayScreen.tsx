import { useGame } from "@/game/gameState";
import { useGameTimer } from "@/game/timer";
import { Eyebrow, Panel, Screen, TimerBar } from "@/components/game/ui";
import { cn } from "@/lib/utils";
import type { AnswerOption } from "@/types/game";

export function PlayScreen() {
  const { current, index, cards, answer, tick } = useGame();
  const { remaining, progress, stop } = useGameTimer({
    resetKey: current.id,
    duration: current.timeLimit,
    onExpire: () => answer(null),
    onTick: tick,
  });

  const pick = (option: AnswerOption) => {
    if (!stop()) return;
    answer(option);
  };

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
      <TimerBar progress={progress} urgent={remaining <= 5} />

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
