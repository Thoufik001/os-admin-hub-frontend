import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://os-admin-hub.lovable.app";
const outDir = path.resolve(process.env.SITE_DIR || "site");
const seen = new Set();
const queue = ["/"];

const textTypes = [
  "text/",
  "application/javascript",
  "application/x-javascript",
  "image/svg+xml",
];

function normalizePath(assetPath, basePath = "/") {
  if (!assetPath || assetPath.startsWith("data:") || assetPath.startsWith("blob:")) {
    return null;
  }

  if (/^https?:\/\//i.test(assetPath)) {
    const url = new URL(assetPath);
    return url.origin === origin ? `${url.pathname}${url.search}` : null;
  }

  if (assetPath.startsWith("//")) {
    return null;
  }

  const baseUrl = new URL(basePath, origin);
  const url = new URL(assetPath, baseUrl);
  if (url.origin !== origin || url.pathname === "/assets/" || /[{}[\]]/.test(url.pathname)) {
    return null;
  }

  return `${url.pathname}${url.search}`;
}

function localPathFor(assetPath) {
  const url = new URL(assetPath, origin);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = "/index.html";
  }

  if (pathname.endsWith("/")) {
    pathname += "index.html";
  }

  if (!path.extname(pathname)) {
    pathname = `${pathname}.html`;
  }

  return path.join(outDir, pathname);
}

function enqueue(assetPath, basePath) {
  const normalized = normalizePath(assetPath, basePath);
  if (normalized && !seen.has(normalized)) {
    queue.push(normalized);
  }
}

function discoverReferences(body, assetPath, contentType) {
  if (contentType.includes("text/html")) {
    body.replace(/\b(?:href|src)=["']([^"']+)["']/g, (_match, ref) => {
      enqueue(ref.replaceAll("&amp;", "&"), assetPath);
      return "";
    });
  }

  if (
    contentType.includes("text/html") ||
    contentType.includes("javascript") ||
    assetPath.endsWith(".js")
  ) {
    body.replace(/\bimport\s*\(\s*["']([^"']+)["']|(?<!["'A-Za-z0-9_$])from\s*["']([^"']+)["']/g, (_match, dynamicRef, staticRef) => {
      const ref = dynamicRef || staticRef;
      enqueue(ref, assetPath);
      return "";
    });
    body.replace(/\/assets\/[A-Za-z0-9_.-]+\.(?:js|css|png|jpe?g|webp|gif|svg|woff2?|ttf|map)/g, (ref) => {
      enqueue(ref, assetPath);
      return "";
    });
  }

  if (
    contentType.includes("text/css") ||
    contentType.includes("text/html") ||
    assetPath.endsWith(".css")
  ) {
    body.replace(/url\((["']?)([^"')]+)\1\)/g, (_match, _quote, ref) => {
      enqueue(ref, assetPath);
      return "";
    });
  }
}

function cleanLocalHtml(html) {
  return html
    .replace(/<script\s+defer\s+src="\/~flock\.js"[^>]*><\/script>/g, "")
    .replace(/<script\s+defer\s+src="\/__l5e\/events\.js"[^>]*><\/script>/g, "")
    .replace(/<\/head>/, '<link rel="stylesheet" href="/styles-overrides.css"/></head>')
    .replace(/\s*<aside\s+id="lovable-badge"[\s\S]*?<\/aside>\s*<script>[\s\S]*?<\/script>\s*(?=<\/body>)/g, "");
}

async function download(assetPath) {
  seen.add(assetPath);

  const url = new URL(assetPath, origin);
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.warn(`skip ${assetPath}: ${error.message}`);
    return;
  }
  if (!response.ok) {
    console.warn(`skip ${assetPath}: HTTP ${response.status}`);
    return;
  }

  const contentType = response.headers.get("content-type") ?? "";
  const localPath = localPathFor(assetPath);
  await mkdir(path.dirname(localPath), { recursive: true });

  if (textTypes.some((type) => contentType.includes(type)) || /\.(html|js|css|svg)$/i.test(url.pathname)) {
    let body = await response.text();
    if (contentType.includes("text/html")) {
      body = cleanLocalHtml(body);
    }
    discoverReferences(body, assetPath, contentType);
    await writeFile(localPath, body);
  } else {
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(localPath, buffer);
  }
}

await mkdir(outDir, { recursive: true });

while (queue.length > 0) {
  const next = queue.shift();
  if (!next || seen.has(next)) {
    continue;
  }
  await download(next);
}

const indexHtml = await readFile(path.join(outDir, "index.html"), "utf8");
for (const route of ["staff", "departments", "roles", "policies", "audit", "settings"]) {
  await mkdir(path.join(outDir, route), { recursive: true });
  await writeFile(path.join(outDir, route, "index.html"), indexHtml);
}

const overridesPath = path.join(outDir, "styles-overrides.css");
try {
  await access(overridesPath);
} catch {
  await writeFile(
    overridesPath,
    `/* Project design overrides. Keep edits here so the mirrored app bundle stays intact. */\n:root {\n  --design-note: "ready for custom styling";\n}\n`,
  );
}

console.log(`Mirrored ${seen.size} same-origin resources into ${outDir}`);
