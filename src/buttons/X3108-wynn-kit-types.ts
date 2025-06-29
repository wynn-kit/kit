import { Radius, SchemeColor, Size, Variant } from "../types/ui";

export type ButtonType = "button" | "submit" | "reset";
export type IconPosition = "left" | "right";

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: ButtonType;
  loading?: boolean;
  onClick?: () => void;
  variant?: Variant;
  schemaColor?: SchemeColor;
  size?: Size;
  radius?: Radius;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
}

// Clases de tamaño
export const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-md",
  lg: "px-8 py-3 text-lg",
};

// Clases de color y variante
export const variantColorClasses: Record<Variant, Record<SchemeColor, string>> = {
  filled: {
    primary:
      "bg-primary border-4 border-primary hover:border-primary/75 hover:bg-primary/75 text-white",
    secondary:
      "bg-secondary border-4 border-secondary hover:border-secondary/75 hover:bg-secondary/75 text-white",
    accent:
      "bg-accent border-4 border-accent hover:border-accent/75 hover:bg-accent/75 text-white",
    danger:
      "bg-danger border-4 border-danger hover:border-danger/75 hover:bg-danger/75 text-white",
    success:
      "bg-success border-4 border-success hover:border-success/75 hover:bg-success/75 text-white",
    warning:
      "bg-warning border-4 border-warning hover:border-warning/75 hover:bg-warning/75 text-white",
    white:
      "bg-white text-black border-4 border-white hover:border-white/75 hover:bg-white/75",
    black:
      "bg-black text-white border-4 border-black hover:border-black/75 hover:bg-black/75",
  },
  outline: {
    primary: "border-4 border-primary text-primary hover:bg-primary hover:text-white",
    secondary:
      "border-4 border-secondary text-secondary hover:bg-secondary hover:text-white",
    accent: "border-4 border-accent text-accent hover:bg-accent hover:text-white",
    danger: "border-4 border-danger text-danger hover:bg-danger hover:text-white",
    success: "border-4 border-success text-success hover:bg-success hover:text-white",
    warning: "border-4 border-warning text-warning hover:bg-warning hover:text-white",
    white: "border-4 border-white text-white hover:bg-white hover:text-black",
    black: "border-4 border-black text-black hover:bg-black hover:text-white",
  },
  flushed: {
    primary:
      "border-4 border-transparent text-primary hover:underline hover:border-primary hover:bg-primary/15 hover:text-white",
    secondary:
      "border-4 border-transparent text-secondary hover:underline hover:border-secondary hover:bg-secondary/15 hover:text-white",
    accent:
      "border-4 border-transparent text-accent hover:underline hover:border-accent hover:bg-accent/15 hover:text-white",
    danger:
      "border-4 border-transparent text-danger hover:underline hover:border-danger hover:bg-danger/15 hover:text-white",
    success:
      "border-4 border-transparent text-success hover:underline hover:border-success hover:bg-success/15 hover:text-white",
    warning:
      "border-4 border-transparent text-warning hover:underline hover:border-warning hover:bg-warning/15 hover:text-white",
    white:
      "border-4 border-transparent text-white hover:underline hover:border-white hover:bg-white/25 hover:text-black",
    black:
      "border-4 border-transparent text-black hover:underline hover:border-black hover:bg-black/25 hover:text-white",
  },
  blur: {
    primary:
      "bg-primary/15 backdrop-blur-xl text-primary hover:bg-primary/65 hover:text-white",
    secondary:
      "bg-secondary/15 backdrop-blur-xl text-secondary hover:bg-secondary/65 hover:text-white",
    accent:
      "bg-accent/15 backdrop-blur-xl text-accent hover:bg-accent/65 hover:text-white",
    danger:
      "bg-danger/15 backdrop-blur-xl text-danger hover:bg-danger/65 hover:text-white",
    success:
      "bg-success/15 backdrop-blur-xl text-success hover:bg-success/65 hover:text-white",
    warning:
      "bg-warning/15 backdrop-blur-xl text-warning hover:bg-warning/65 hover:text-white",
    white: "bg-white/25 backdrop-blur-xl text-black hover:bg-white/65",
    black: "bg-black/25 backdrop-blur-xl text-white hover:bg-black/65",
  },
};

// Clases comunes
export const commonClasses = `
  inline-flex items-center justify-center 
  font-medium transition-colors 
  duration-300 ease-in-out 
  hover:shadow-lg hover:-translate-y-0.5
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:cursor-not-allowed disabled:opacity-50
  disabled:no-underline disabled:shadow-none disabled:translate-none
  disabled:bg-gray-300 disabled:text-gray-500 disabled:border-transparent 
`;
