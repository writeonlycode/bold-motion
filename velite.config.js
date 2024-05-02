import { defineConfig, s } from "velite";
import { home } from "./velite/home/home";
import { shared } from "./velite/shared/shared";

export default defineConfig({
  root: "content",
  collections: {
    ...shared,
    ...home,
  },
});
