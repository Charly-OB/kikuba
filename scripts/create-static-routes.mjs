import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const routes = ["acceso-temprano"];

for (const route of routes) {
  const targetDir = join("dist", route);
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(join("dist", "index.html"), join(targetDir, "index.html"));
}
