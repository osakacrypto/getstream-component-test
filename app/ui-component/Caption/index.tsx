/*
PATH: app/ui-component/Caption/index.tsx
@osakacrypto
Last modified: 2025-07-09
*/

import React from "react";
import "./index.css";

type CaptionProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function STRVNCaption({
  level = 1,
  children,
  className = "",
}: CaptionProps) {
  const Tag = `h${level}` as React.ElementType;

  return React.createElement(
    Tag,
    { className: `strvn-caption ${className}` },
    children
  );
}
