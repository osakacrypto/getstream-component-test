/*
PATH: app/Testing/ReduceMotionToggle/index.tsx
@osakacrypto
Last modified: 2025-07-10
*/

"use client";

import { useState, useEffect } from "react";

export default function ReduceMotionToggle() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (reduced) html.classList.add("reduce-motion");
    else html.classList.remove("reduce-motion");
  }, [reduced]);

  return (
    <button onClick={() => setReduced((r) => !r)}>
      {reduced ? "Animations ON" : "Animations OFF"}
    </button>
  );
}
