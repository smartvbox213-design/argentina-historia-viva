import { COLLECTIONS } from "@/data/cards";
import { useGame } from "@/game/gameState";
import { Button, Eyebrow, Panel, Screen } from "@/components/game/ui";
import { cn } from "@/lib/utils";

export function ConfigScreen() {
  const { goTo, collection, setCollection } = useGame();
  const count = collection.cards.length;
  const rows = [
    ["Jugadores", "Jugador 1"],
    ["Cartas", `${count} ${count === 1 ? "carta" : "cartas"}`],
    ["Dificultad", "Explorador"],
    ["Categoría", "Historia"],
  ];
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Paso 2 de 3</Eyebrow>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">CONFIGURACIÓN</h2>
      </div>
      <div className="space-y-3">
        <Eyebrow>Colección</Eyebrow>
        <div className="grid gap-3 sm:grid-cols-2">
          {COLLECTIONS.map((c) => {
            const active = c.id === collection.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCollection(c.id)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-transform duration-200 hover:scale-[1.01]",
                  active
                    ? "border-sol/60 bg-gradient-to-br from-card to-card/40 shadow-glow"
                    : "border-border/60 bg-card/30",
                )}
              >
                <span className="block font-serif text-lg text-foreground">{c.name}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.cards.length} {c.cards.length === 1 ? "carta" : "cartas"}
                </span>
              </button>
            );
          })}
        </div>
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
