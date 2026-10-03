import React from "react";

interface CinematicSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  id,
  className = "",
  children
}) => {
  return (
    <div id={id} className={`w-full relative ${className}`}>
      {children}
    </div>
  );
};
