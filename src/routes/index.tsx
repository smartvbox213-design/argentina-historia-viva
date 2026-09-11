import { createFileRoute } from "@tanstack/react-router";
import { GameProvider, useGame } from "@/game/gameState";
import {
  ConfigScreen,
  DiscoveryScreen,
  HomeScreen,
  IntroScreen,
  ModeSelectionScreen,
  PlayScreen,
  ResultsScreen,
  RevealScreen,
} from "@/screens";

const TITLE = "Argentina: Historia de una Nación — Mitos y Verdades";
const DESCRIPTION =
  "Juego educativo de historia argentina. Poné a prueba diez mitos sobre la Revolución e Independencia (1810–1816) y descubrí qué dicen las fuentes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stage() {
  const { phase } = useGame();
  switch (phase) {
    case "mode":
      return <ModeSelectionScreen />;
    case "setup":
      return <ConfigScreen />;
    case "intro":
      return <IntroScreen />;
    case "play":
      return <PlayScreen />;
    case "reveal":
      return <RevealScreen />;
    case "results":
      return <ResultsScreen />;
    case "discovery":
      return <DiscoveryScreen />;
    default:
      return <HomeScreen />;
  }
}

function Index() {
  return (
    <div className="min-h-screen bg-background bg-museo text-foreground">
      <GameProvider>
        <Stage />
      </GameProvider>
    </div>
  );
}
