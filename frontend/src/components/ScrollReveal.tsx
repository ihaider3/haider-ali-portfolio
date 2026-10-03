import React from "react";

export type RevealDirection = "up" | "fade";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: RevealDirection;
  initialVisible?: boolean;
  topOffset?: number;
  bottomOffset?: number;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  id,
  as: Component = "div"
}) => {
  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
};
