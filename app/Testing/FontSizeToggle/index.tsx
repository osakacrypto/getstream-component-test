/*
PATH: app/Testing/FontSizeToggle/index.tsx
@osakacrypto
Last modified: 2025-07-10
*/

"use client";

import { useState, useEffect } from "react";

export default function FontSizeToggle() {
  const [large, setLarge] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (large) html.classList.add("large-text");
    else html.classList.remove("large-text");
  }, [large]);

  return (
    <button onClick={() => setLarge((l) => !l)}>
      {large ? "Text: DEFAULT" : "Text: LARGE"}
    </button>
  );
}
