import { s } from "velite";

export const homeAbout = {
  name: "homeAbout",
  pattern: "home/about.yaml",
  single: true,
  schema: s.object({
    text: s.string(),
  }),
};
