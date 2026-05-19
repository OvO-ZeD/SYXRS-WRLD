import { execSync } from "node:child_process";
import { watch } from "node:fs";

const WATCH_PATHS = ["app", "public", "README.md", "next.config.ts", "package.json"];
const IGNORE = [".git", ".next", "node_modules"];

let timer = null;
let running = false;

function run(cmd) {
  return execSync(cmd, { stdio: "pipe" }).toString().trim();
}

function hasChanges() {
  const out = run("git status --porcelain");
  return out.length > 0;
}

function ship() {
  if (running) return;
  running = true;

  try {
    if (!hasChanges()) return;

    const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    run("git add -A");
    run(`git commit -m "chore(auto-ship): update ${stamp}"`);
    run("git push origin main");
    console.log(`[auto-ship] pushed at ${stamp}`);
  } catch (err) {
    console.error("[auto-ship] failed:", err.message);
  } finally {
    running = false;
  }
}

function scheduleShip() {
  clearTimeout(timer);
  timer = setTimeout(ship, 1500);
}

for (const path of WATCH_PATHS) {
  watch(
    path,
    { recursive: true },
    (eventType, filename) => {
      const file = String(filename || "");
      if (!file) return;
      if (IGNORE.some((part) => file.includes(part))) return;
      if (file.endsWith(".swp") || file.endsWith("~")) return;
      console.log(`[auto-ship] ${eventType}: ${file}`);
      scheduleShip();
    }
  );
}

console.log("[auto-ship] watching for changes...");
