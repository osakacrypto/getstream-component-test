/*
PATH: app/ui-component/Title/index.tsx
@osakacrypto
Last modified: 2025-07-09
*/

import React from "react";
import "./index.css";

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  contrast?: "default" | "contrast";
};

export default function STRVNTitle({
  level = 1,
  children,
  className = "",
  contrast = "default",
}: TitleProps) {
  const Tag = `h${level}` as React.ElementType;
  const contrastClass = `strvn-title-${contrast}`;

  return React.createElement(
    Tag,
    { className: `strvn-title ${contrastClass} ${className}`.trim() },
    children
  );
}
