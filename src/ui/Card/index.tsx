import type { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  borderRadius?: number;
};

export const Card = ({ children, borderRadius = 20 }: CardProps) => {
  return (
    <div className="border border-gray-300 px-4 py-2" style={{ borderRadius }}>
      {children}
    </div>
  );
};
