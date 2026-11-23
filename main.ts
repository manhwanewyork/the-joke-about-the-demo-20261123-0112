import { mkdirSync, writeFileSync } from "node:fs";

// This little helper holds a brief quip in memory for later use.
// When the time comes it passes the words along so they are not lost.
const joke =
  "I asked my coding agent to make the demo bulletproof, so it replaced the live app with a screenshot of the app working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
