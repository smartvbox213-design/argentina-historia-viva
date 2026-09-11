import { useGame } from "@/game/gameState";
import { Button, Eyebrow, LockedCard, Screen } from "@/components/game/ui";

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
