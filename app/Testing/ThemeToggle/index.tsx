/*
PATH: app/Testing/ThemeToggle/index.tsx
@osakacrypto
Last modified: 2025-07-10
*/

"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("theme-light");
    else root.classList.remove("theme-light");
  }, [light]);

  return (
    <button onClick={() => setLight((d) => !d)}>
      {light ? "Theme: DARK" : "Theme: LIGHT"}
    </button>
  );
}
