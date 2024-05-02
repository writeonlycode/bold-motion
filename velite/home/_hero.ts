import { s } from "velite";

export const homeHero = {
  name: "homeHero",
  pattern: "home/hero.yaml",
  single: true,
  schema: s.object({
    title: s.string(),
    lead: s.array(s.object({ text: s.string(), speed: s.number() })),
  }),
};
