import { useGame } from "@/game/gameState";
import { Button, Eyebrow, Panel, Screen } from "@/components/game/ui";

export function ConfigScreen() {
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
