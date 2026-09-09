import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { CARDS } from "@/data/cards";
import { evaluate, pointsFor, xpFor, summarize, type Summary } from "@/lib/game-logic";
import type { AnswerOption, Card, CardResult, Outcome, Phase } from "@/types/game";

interface GameState {
  phase: Phase;
  cards: Card[];
  index: number;
  current: Card;
  selected: AnswerOption | null;
  outcome: Outcome | null;
  sourceConsulted: boolean;
  streak: number;
  results: CardResult[];
  elapsed: number;
  summary: Summary | null;
  goTo: (phase: Phase) => void;
  start: () => void;
  answer: (option: AnswerOption | null) => void;
  consultSource: () => void;
  next: () => void;
  reset: () => void;
  tick: () => void;
}

const GameContext = createContext<GameState | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const cards = CARDS;
  const [phase, setPhase] = useState<Phase>("home");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<AnswerOption | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [sourceConsulted, setSourceConsulted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [results, setResults] = useState<CardResult[]>([]);
  const [elapsed, setElapsed] = useState(0);

  const current = cards[index];

  const start = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setOutcome(null);
    setSourceConsulted(false);
    setStreak(0);
    setResults([]);
    setElapsed(0);
    setPhase("play");
  }, []);

  const answer = useCallback(
    (option: AnswerOption | null) => {
      const result = evaluate(option, current.correctAnswer);
      setSelected(option);
      setOutcome(result);
      setSourceConsulted(false);
      setStreak((s) => (result === "CORRECTO" ? s + 1 : 0));
      setPhase("reveal");
    },
    [current],
  );

  const consultSource = useCallback(() => setSourceConsulted(true), []);

  const next = useCallback(() => {
    if (!outcome) return;
    const nextStreak = outcome === "CORRECTO" ? streak : 0;
    const entry: CardResult = {
      cardId: current.id,
      selected,
      outcome,
      points: pointsFor(outcome),
      xp: xpFor(outcome, sourceConsulted),
      sourceConsulted,
      streakAfter: nextStreak,
    };
    const all = [...results, entry];
    setResults(all);
    setSelected(null);
    setOutcome(null);
    setSourceConsulted(false);
    if (index + 1 >= cards.length) {
      setPhase("results");
    } else {
      setIndex(index + 1);
      setPhase("play");
    }
  }, [outcome, streak, current, selected, sourceConsulted, results, index, cards.length]);

  const reset = useCallback(() => {
    setPhase("home");
    setIndex(0);
    setSelected(null);
    setOutcome(null);
    setSourceConsulted(false);
    setStreak(0);
    setResults([]);
    setElapsed(0);
  }, []);

  const tick = useCallback(() => setElapsed((e) => e + 1), []);

  const summary = useMemo(
    () => (results.length ? summarize(results, cards.length) : null),
    [results, cards.length],
  );

  const value: GameState = {
    phase,
    cards,
    index,
    current,
    selected,
    outcome,
    sourceConsulted,
    streak,
    results,
    elapsed,
    summary,
    goTo: setPhase,
    start,
    answer,
    consultSource,
    next,
    reset,
    tick,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
