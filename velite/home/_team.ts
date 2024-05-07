import { s } from "velite";

export const homeTeam = {
  name: "homeTeam",
  pattern: "home/team.yaml",
  single: true,
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    members: s.array(
      s.object({
        image: s.image(),
        name: s.string(),
        description: s.string(),
      })
    ),
  }),
};
