import { SchemeColor, Size, Variant } from "../types/ui";

export const inputSizeClasses: Record<Size, string> = {
  sm: "py-0.5 px-3 text-sm",
  md: "py-1.5 px-2 text-md",
  lg: "py-2.5 px-5 text-lg",
};

export const labelSizeClasses: Record<Size, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export const labelTraslateYClasses: Record<Size, string> = {
  sm: "translate-y-7.5",
  md: "translate-y-8.5",
  lg: "translate-y-9.5",
};

export const labelSizeClassesSelect: Record<Size, string> = {
  sm: "text-sm translate-y-8.5",
  md: "text-base translate-y-9.5",
  lg: "text-lg translate-y-10.5",
};

export const checkboxSizeClasses: Record<Size, string> = {
  sm: "scale-100",
  md: "scale-130",
  lg: "scale-160",
};

export const toggleSizeClasses: Record<Size, string> = {
  sm: "w-12 h-6.5",
  md: "w-14 h-7.5",
  lg: "w-16 h-8.5",
};

export const toggleSizecircleClasses: Record<Size, string> = {
  sm: "w-4 h-4 m-1",
  md: "w-5 h-5 m-1",
  lg: "w-6 h-6 m-1",
};

export const toggleColorClasses: Record<SchemeColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  accent: "bg-accent",
  white: "bg-white",
  black: "bg-black",
};

export const inputColorClasses: Record<SchemeColor, string> = {
  primary: "text-primary border-primary focus:ring-primary",
  secondary: "text-secondary border-secondary focus:ring-secondary",
  accent: "text-accent border-accent focus:ring-accent",
  danger: "text-red-600 border-red-600 focus:ring-red-600",
  success: "text-green-600 border-green-600 focus:ring-green-600",
  warning: "text-yellow-500 border-yellow-500 focus:ring-yellow-500",
  white: "text-white border-white focus:ring-white",
  black: "text-black border-black focus:ring-black",
};

export const iconSizeClass: Record<Size, string> = {
  sm: "w-6 h-6",
  md: "w-7 h-7",
  lg: "w-8 h-8",
};

export const iconColorClass: Record<SchemeColor, string> = {
  primary:
    "text-primary rounded-lg px-0.5 py-1 transition-all duration-200 hover:bg-primary/25",
  secondary:
    "text-secondary rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-secondary/25",
  accent:
    "text-accent rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-accent/25",
  danger:
    "text-danger rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-danger/25",
  success:
    "text-success rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-success/25",
  warning:
    "text-warning rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-warning/25",
  white:
    "text-white rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-white/25",
  black:
    "text-black rounded-lg px-1.5 py-1 transition-all duration-200 hover:bg-black/25",
};

export const inputBgColorClasses: Record<SchemeColor, string> = {
  primary:
    "bg-primary/25 text-primary border-primary focus:ring-primary hover:bg-primary/20",
  secondary:
    "bg-secondary/25 text-secondary border-secondary focus:ring-secondary hover:bg-secondary/20",
  accent: "bg-accent/25 text-accent border-accent focus:ring-accent hover:bg-accent/20",
  danger: "bg-red-300/25 text-red-600 border-red-600 focus:ring-red-600 hover:bg-red-300",
  success:
    "bg-green-300/25 text-green-600 border-green-600 focus:ring-green-600 hover:bg-green-300",
  warning:
    "bg-yellow-300/25 text-yellow-500 border-yellow-300 focus:ring-yellow-500 hover:bg-yellow-300",
  white: "bg-white/25 text-white border-white focus:ring-white hover:bg-white/20",
  black: "bg-black/25 text-black border-black focus:ring-black hover:bg-black/20",
};

export const inputVariantClasses: Record<Variant, string> = {
  outline: "border bg-transparent",
  filled: "border border-transparent focus:ring-2",
  flushed: "border-0 border-b bg-transparent rounded-none",
  blur: "backdrop-blur bg-white/55 border-transparent focus:ring-2",
};

export const inputBaseClasses = `
  w-full mt-8 transition-all duration-200
  focus:outline-none rounded-lg
 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60
`;

export const inputBaseClassesStandard = `
     w-full mt-1 transition-all duration-300 pl-4
     focus:outline-none rounded-lg
     disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60
`;

export interface BaseInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  size?: Size;
  variant?: Variant;
  schemaColor?: SchemeColor;
  error?: string;
  showError?: boolean;
  disabled?: boolean;
  required?: boolean;
  floatingLabel?: boolean;
  touched?: boolean;
  onBlur?: (e: React.FocusEvent<any>) => void;
}
