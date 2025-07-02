export const schemeColors = [
  "primary",
  "secondary",
  "accent",
  "danger",
  "success",
  "warning",
  "white",
  "black",
] as const;
export type SchemeColor = (typeof schemeColors)[number];

export type Variant = "filled" | "outline" | "flushed" | "blur";

export type Size = "sm" | "md" | "lg";

export const radiusValues = ["none", "sm", "md", "lg", "xl", "2xl", "full"] as const;

export type Radius = (typeof radiusValues)[number];

export const radiusClasses: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};
