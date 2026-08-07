"use client";

import { useEffect } from "react";

/**
 * Registers the service worker built by `scripts/build-sw.mjs`. It only exists
 * in the exported output, so registration is skipped during development.
 */
export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator)
    ) {
      return;
    }

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch((error: unknown) => {
        console.error("Service worker registration failed:", error);
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }

    window.addEventListener("load", register);

    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
