import { rm } from "node:fs/promises";

import { injectManifest } from "@serwist/build";
import { build } from "esbuild";

/**
 * Builds the service worker for the static export, in two steps:
 *
 *  1. esbuild bundles `src/sw.ts` (and the Serwist runtime) into plain JS.
 *  2. Serwist replaces the `self.__SW_MANIFEST` token with the list of
 *     exported files to precache.
 *
 * Runs after `next build` so that `out/` already exists.
 */

const BUNDLE_PATH = ".next/sw-bundle.js";
const SW_DEST = "out/sw.js";

await build({
  entryPoints: ["src/sw.ts"],
  outfile: BUNDLE_PATH,
  bundle: true,
  minify: true,
  // Service workers of type "module" are still poorly supported in Safari.
  format: "iife",
  target: "es2020",
  platform: "browser",
  logLevel: "warning",
});

const { count, size, warnings } = await injectManifest({
  swSrc: BUNDLE_PATH,
  swDest: SW_DEST,
  globDirectory: "out",
  globPatterns: [
    "**/*.{html,js,css,woff2,webmanifest}",
    "img/ERLogo*.png",
    "icon.png",
    "apple-icon.png",
  ],
  // Portfolio and certificate images are runtime cached instead, to keep the
  // install payload small.
  globIgnores: ["**/sw.js", "**/*.map", "img/*.webp"],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
});

await rm(BUNDLE_PATH, { force: true });

for (const warning of warnings) {
  console.warn(warning);
}

console.log(
  `Service worker written to ${SW_DEST} — precaching ${count} files (${(size / 1024).toFixed(1)} KiB).`,
);
