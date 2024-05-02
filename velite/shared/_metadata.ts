import { s } from "velite";

export const sharedMetadata = {
  name: "sharedMetadata",
  pattern: "shared/metadata.yaml",
  single: true,
  schema: s.object({
    title: s.string(),
    description: s.string(),
  }),
};
