/*
PATH: app/ui-component/Button/index.tsx
@osakacrypto
Last modified: 2025-07-10
*/

import React from "react";
import "./index.css";

const MAX_BUTTON_LABEL_LENGTH = 20;

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  variant?: "filled" | "outlined" | "ghosted";
  fullWidth?: boolean;
  className?: string;
};

export default function STRVNButton({
  children = "Activate Batsignal",
  type = "button",
  disabled = false,
  variant = "filled",
  fullWidth = false,
  "aria-label": ariaLabel,
  className = "",
}: ButtonProps) {
  const label =
    ariaLabel || (typeof children === "string" ? children : undefined);

  let content: React.ReactNode = children;
  if (
    typeof children === "string" &&
    children.length > MAX_BUTTON_LABEL_LENGTH
  ) {
    content = children.slice(0, MAX_BUTTON_LABEL_LENGTH) + "…";
  }

  const classes = [
    "strvn-button",
    `strvn-button-${variant}`,
    disabled ? "strvn-button-disabled" : "",
    fullWidth ? "strvn-button-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={label}
      className={classes}
    >
      {content}
    </button>
  );
}
