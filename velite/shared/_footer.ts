import { s } from "velite";

export const sharedFooter = {
  name: "sharedFooter",
  pattern: "shared/footer.yaml",
  single: true,
  schema: s.object({
    copyright: s.string(),
    social: s.array(
      s.object({
        icon: s.string(),
        label: s.string(),
        href: s.string(),
      })
    ),
  }),
};
