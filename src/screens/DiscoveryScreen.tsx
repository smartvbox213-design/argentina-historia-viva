import { CARDS, DISCOVERY } from "@/data/cards";
import { useGame } from "@/game/gameState";
import { Button, Eyebrow, Panel, Screen } from "@/components/game/ui";

export function DiscoveryScreen() {
  const { reset } = useGame();
  const related = CARDS.filter((c) => DISCOVERY.relatedCards.includes(c.id));
  return (
    <Screen>
      <div className="space-y-2 text-center">
        <Eyebrow>Nuevo descubrimiento</Eyebrow>
        <h2 className="font-serif text-4xl text-foreground">{DISCOVERY.name}</h2>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {DISCOVERY.year} · {DISCOVERY.place}
        </p>
      </div>
      <Panel className="space-y-5">
        <p className="leading-relaxed text-muted-foreground">{DISCOVERY.description}</p>
        <div>
          <Eyebrow>Evento</Eyebrow>
          <p className="mt-1 text-foreground">{DISCOVERY.event}</p>
        </div>
        <div>
          <Eyebrow>Personajes</Eyebrow>
          <p className="mt-1 text-foreground">{DISCOVERY.people.join(" · ")}</p>
        </div>
        <div>
          <Eyebrow>Conceptos</Eyebrow>
          <div className="mt-2 flex flex-wrap gap-2">
            {DISCOVERY.concepts.map((c) => (
              <span
                key={c}
                className="rounded-full border border-sol/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-sol"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Cartas relacionadas</Eyebrow>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {related.map((c) => (
              <li key={c.id}>
                {c.id} · {c.title}
              </li>
            ))}
          </ul>
        </div>
      </Panel>
      <div className="text-center">
        <Button onClick={reset}>Volver al inicio</Button>
      </div>
    </Screen>
  );
}
