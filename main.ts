import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my coding agent to make the demo bulletproof, so it replaced the live app with a screenshot of the app working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
