// Maps challenges to their corresponding colors

type challengeMappingsType = {
  [key: string]: { color: string; image: string };
};
export const challengeMappings: challengeMappingsType = {
  Sleep: { color: "blue.400", image: "https://picsum.photos/200" },
  Food: { color: "green.400", image: "https://picsum.photos/200" },
  Fitness: { color: "amber.400", image: "https://picsum.photos/200" },
  fallback: { color: "purple.400", image: "https://picsum.photos/200" },
};
