import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.env.SITE_DIR || "site");
const port = Number(process.env.PORT || 4173);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
]);

async function fileExists(filePath) {
  try {
    const stats = await stat(filePath);
    return stats.isFile();
  } catch {
    return false;
  }
}

async function resolveFile(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  const decoded = decodeURIComponent(url.pathname);
  const safePath = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const requested = path.join(root, safePath);

  if (!requested.startsWith(root)) {
    return null;
  }

  if (await fileExists(requested)) {
    return requested;
  }

  if (!path.extname(requested) && await fileExists(`${requested}.html`)) {
    return `${requested}.html`;
  }

  const indexInDir = path.join(requested, "index.html");
  if (await fileExists(indexInDir)) {
    return indexInDir;
  }

  return path.join(root, "index.html");
}

createServer(async (request, response) => {
  const filePath = await resolveFile(request.url || "/");
  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes.get(ext) || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview ready at http://127.0.0.1:${port}/`);
});
