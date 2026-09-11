import type { AnswerOption, CardResult, Outcome, Summary } from "@/types/game";

const NUANCED: AnswerOption[] = ["PARCIALMENTE CIERTO", "NECESITA CONTEXTO"];

export const COMPLETION_BONUS_XP = 20;
export const MATCH_BONUS_XP = 15;

export function evaluate(selected: AnswerOption | null, correct: AnswerOption): Outcome {
  if (selected === null) return "SIN RESPUESTA";
  if (selected === correct) return "CORRECTO";
  if (NUANCED.includes(selected) && NUANCED.includes(correct)) return "RESPUESTA PARCIAL";
  return "INCORRECTO";
}

export function pointsFor(outcome: Outcome): number {
  if (outcome === "CORRECTO") return 2;
  if (outcome === "RESPUESTA PARCIAL") return 1;
  return 0;
}

export function xpFor(outcome: Outcome, sourceConsulted: boolean): number {
  let xp = 10;
  if (outcome === "CORRECTO") xp += 5;
  if (sourceConsulted) xp += 5;
  return xp;
}

export function summarize(results: CardResult[], totalCards: number): Summary {
  const correct = results.filter((r) => r.outcome === "CORRECTO").length;
  const partial = results.filter((r) => r.outcome === "RESPUESTA PARCIAL").length;
  const incorrect = results.filter((r) => r.outcome === "INCORRECTO").length;
  const unanswered = results.filter((r) => r.outcome === "SIN RESPUESTA").length;
  const totalPoints = results.reduce((a, r) => a + r.points, 0);
  const accuracy = results.length
    ? Math.round(((correct + partial * 0.5) / results.length) * 100)
    : 0;

  let totalXp = results.reduce((a, r) => a + r.xp, 0) + MATCH_BONUS_XP;
  if (results.length >= totalCards) totalXp += COMPLETION_BONUS_XP;

  const bestStreak = results.reduce((max, r) => Math.max(max, r.streakAfter), 0);

  const rank: Summary["rank"] =
    accuracy >= 85 ? "Historiador" : accuracy >= 60 ? "Investigador" : "Explorador";

  return {
    totalPoints,
    correct,
    partial,
    incorrect,
    unanswered,
    accuracy,
    totalXp,
    bestStreak,
    rank,
  };
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
