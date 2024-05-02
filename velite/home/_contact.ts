import { s } from "velite";

export const homeContact = {
  name: "homeContact",
  pattern: "home/contact.yaml",
  single: true,
  schema: s.object({
    title: s.string(),
    text: s.string(),
    button: s.string(),
    action: s.string(),
    method: s.string(),
    hiddenFields: s.array(
      s.object({
        name: s.string(),
        value: s.string(),
      })
    ),
  }),
};
