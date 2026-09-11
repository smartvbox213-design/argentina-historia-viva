import { useGame } from "@/game/gameState";
import { Button, Eyebrow, LockedCard, Screen } from "@/components/game/ui";

export function ModeSelectionScreen() {
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
