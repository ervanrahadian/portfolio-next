"use client";

import { useEffect, useState } from "react";

/** Returns true once the page is scrolled past the given offset in pixels. */
export function useScrolled(offset = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, [offset]);

  return scrolled;
}
