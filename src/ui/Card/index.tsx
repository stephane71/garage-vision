import type { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  borderRadius?: number;
  isSelected?: boolean;
  onClick?: () => void;
};

export const Card = ({
  children,
  borderRadius = 20,
  onClick,
  isSelected = false,
}: CardProps) => {
  return (
    <div
      className={`border border-gray-300 px-4 py-2 ${onClick ? "cursor-pointer hover:bg-gray-100" : ""} ${isSelected ? "bg-gray-100" : ""}`}
      style={{ borderRadius }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
