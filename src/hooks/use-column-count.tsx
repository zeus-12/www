import { useSyncExternalStore } from "react";

// Mirrors the tailwind `sm` / `lg` breakpoints used by the projects grid.
const QUERIES = [
  { query: "(min-width: 1024px)", columns: 3 },
  { query: "(min-width: 640px)", columns: 2 },
] as const;

const subscribe = (onChange: () => void) => {
  const lists = QUERIES.map(({ query }) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () =>
    lists.forEach((list) => list.removeEventListener("change", onChange));
};

const getSnapshot = () =>
  QUERIES.find(({ query }) => window.matchMedia(query).matches)?.columns ?? 1;

/**
 * Number of masonry columns currently rendered. Falls back to the widest
 * layout on the server, where no viewport is available.
 */
export const useColumnCount = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => 3);
