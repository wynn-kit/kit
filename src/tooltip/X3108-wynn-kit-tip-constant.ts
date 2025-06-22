import { ReactNode } from "react";
import { SchemeColor } from "../types/ui";

export type PositionToolTip = "top" | "bottom" | "left" | "right" | "auto";
export type TooltipVariant = "solid" | "subtle";

export interface TooltipUIProps {
  isShowing?: boolean;
  message: string;
  children: ReactNode;
  offset?: number;
  delay?: number;
  variant?: TooltipVariant;
  position?: PositionToolTip | "auto";
  schemeColor?: SchemeColor;
  className?: string;
}

export const variantColorClasses: Record<TooltipVariant, Record<SchemeColor, string>> = {
  solid: {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    danger: "bg-danger text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    white: "bg-white text-black",
    black: "bg-black text-white",
  },
  subtle: {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    danger: "bg-danger/10 text-danger",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    white: "bg-white/10 text-black",
    black: "bg-black/10 text-white",
  },
};
