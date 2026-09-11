import { COLLECTION, INTRO_TEXT } from "@/data/cards";
import { useGame } from "@/game/gameState";
import { Button, Eyebrow, Panel, Screen } from "@/components/game/ui";

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
