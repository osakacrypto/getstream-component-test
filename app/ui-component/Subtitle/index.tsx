/*
PATH: app/ui-component/Subtitle/index.tsx
@osakacrypto
Last modified: 2025-07-09
*/

import React from "react";
import "./index.css";

type SubtitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function STRVNSubtitle({
  level = 1,
  children,
  className = "",
}: SubtitleProps) {
  const Tag = `h${level}` as React.ElementType;

  return React.createElement(
    Tag,
    { className: `strvn-subtitle ${className}` },
    children
  );
}
