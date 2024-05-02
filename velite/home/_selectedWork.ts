import { s } from "velite";

export const homeSelectedWork = {
  name: "homeSelectedWork",
  pattern: "home/selectedWork.yaml",
  single: true,
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    items: s.array(
      s.object({
        image: s.image(),
        title: s.string(),
        description: s.string(),
        href: s.string(),
      })
    ),
  }),
};
