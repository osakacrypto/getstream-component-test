/*
PATH: app/ui-component/Paragraph/index.tsx
@osakacrypto
Last modified: 2025-07-09
*/

import React from "react";
import "./index.css";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function STRVNParagraph({
  children,
  className = "",
}: ParagraphProps) {
  return <p className={`strvn-paragraph ${className}`}>{children}</p>;
}
