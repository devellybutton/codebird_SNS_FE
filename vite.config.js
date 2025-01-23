import { defineConfig } from "vite";
import angular from "vite-plugin-angular";

export default defineConfig({
  plugins: [angular()],
  resolve: {
    mainFields: ["module", "main"],
  },
});
