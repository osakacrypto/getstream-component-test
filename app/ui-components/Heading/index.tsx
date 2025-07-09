/*
PATH: app/ui-component/Heading/index.tsx
@osakacrypto
Last modified: 2025-07-09
*/

import React from "react";
import "./index.css";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function STRVNHeading({
  level = 1,
  children,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;

  return React.createElement(
    Tag,
    { className: `strvn-heading ${className}` },
    children
  );
}
