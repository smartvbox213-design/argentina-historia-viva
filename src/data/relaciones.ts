import type { Card, HistoricalEvent, HistoricalPerson, HistoricalPlace } from "@/types/game";
import { getEventsForCard } from "@/data/eventos";
import { getPeopleForCard } from "@/data/personajes";
import { getPlacesForCard } from "@/data/lugares";

export function getCardEvents(card: Card): HistoricalEvent[] {
  return getEventsForCard(card.relatedEvents);
}

export function getCardPeople(card: Card): HistoricalPerson[] {
  return getPeopleForCard(card.relatedPeople);
}

export function getCardPlaces(card: Card): HistoricalPlace[] {
  return getPlacesForCard(card.relatedPlaces);
}

export function getCardRelations(card: Card) {
  return {
    events: getCardEvents(card),
    people: getCardPeople(card),
    places: getCardPlaces(card),
  };
}
