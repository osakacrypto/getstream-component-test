/*
PATH: app/ui-component/Wrapper/index.tsx
@osakacrypto
Last modified: 2025-07-07
*/

import "./index.css";

type WrapperProps = {
  children: React.ReactNode;
  background?: string;
  className?: string;
};

export default function STRVNWrapper({
  children,
  background,
  className = "",
}: WrapperProps) {
  const style = background ? { background } : undefined;

  return (
    <section
      className={`outer ${className}`}
      style={style as React.CSSProperties}
    >
      <div className="inner">{children}</div>
    </section>
  );
}
