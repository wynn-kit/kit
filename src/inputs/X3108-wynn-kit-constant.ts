import { Radius, SchemeColor, Size, Variant } from "../types/ui";

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

const createInputColorClasses = (color: string) =>
  `mt-0.5 border-${color} focus:ring-${color} focus:bg-${color}/20`;

export const inputColorClasses: Record<SchemeColor, string> = {
  primary: createInputColorClasses("primary") + " text-white",
  secondary: createInputColorClasses("secondary") + " text-white",
  accent: createInputColorClasses("accent") + " text-white",
  danger: createInputColorClasses("danger") + " text-white",
  success: createInputColorClasses("success") + " text-white",
  warning: createInputColorClasses("warning") + " text-white",
  white: createInputColorClasses("white") + " text-black",
  black: createInputColorClasses("black") + " text-white",
};

export const iconSizeClass: Record<Size, string> = {
  sm: "w-6 h-6",
  md: "w-7 h-7",
  lg: "w-8 h-8",
};

const createIconColorClasses = (color: string) => `text-white rounded-full px-1.5 `;

export const iconColorClass: Record<SchemeColor, string> = {
  primary: createIconColorClasses("primary"),
  secondary: createIconColorClasses("secondary"),
  accent: createIconColorClasses("accent"),
  danger: createIconColorClasses("danger"),
  success: createIconColorClasses("success"),
  warning: createIconColorClasses("warning"),
  white: createIconColorClasses("white"),
  black: createIconColorClasses("black"),
};

export const variantColorClassesInput: Record<Variant, Record<SchemeColor, string>> = {
  outline: {
    primary:
      "border-4 bg-transparent border-primary text-white hover:bg-primary/15 focus:bg-primary/15 focus:ring-primary",
    secondary:
      "border-4 bg-transparent border-secondary text-white hover:bg-secondary/15 focus:bg-secondary/15 focus:ring-secondary",
    accent:
      "border-4 bg-transparent border-accent text-white hover:bg-accent/15 focus:bg-accent/15 focus:ring-accent",
    danger:
      "border-4 bg-transparent border-danger text-white hover:bg-danger/15 focus:bg-danger/15 focus:ring-danger",
    success:
      "border-4 bg-transparent border-success text-white hover:bg-success/15 focus:bg-success/15 focus:ring-success",
    warning:
      "border-4 bg-transparent border-warning text-white hover:bg-warning/15 focus:bg-warning/15 focus:ring-warning",
    white:
      "border-4 bg-transparent border-white text-black hover:bg-white/15 focus:bg-white/15 focus:ring-white",
    black:
      "border-4 bg-transparent border-black text-white hover:bg-black/15 focus:bg-black/15 focus:ring-black",
  },
  filled: {
    primary:
      "border-4 border-primary bg-primary/20 text-white hover:bg-primary/10 focus:bg-primary/25 focus:ring-primary",
    secondary:
      "border-4 border-secondary bg-secondary/20 text-white hover:bg-secondary/10 focus:bg-secondary/25 focus:ring-secondary",
    accent:
      "border-4 border-accent bg-accent/20 text-white hover:bg-accent/10 focus:bg-accent/25 focus:ring-accent",
    danger:
      "border-4 border-danger bg-danger/20 text-white hover:bg-danger/10 focus:bg-danger/25 focus:ring-danger",
    success:
      "border-4 border-success bg-success/20 text-white hover:bg-success/10 focus:bg-success/25 focus:ring-success",
    warning:
      "border-4 border-warning bg-warning/20 text-white hover:bg-warning/10 focus:bg-warning/25 focus:ring-warning",
    white:
      "border-4 bg-white/20 border-white text-black hover:bg-white/25 focus:bg-white/25 focus:ring-white",
    black:
      "border-4 bg-black/20 border-black text-white hover:bg-black/25 focus:bg-black/25 focus:ring-black",
  },
  flushed: {
    primary:
      "border-b-4 border-primary rounded-b-none focus:border-primary focus:ring-primary focus:bg-primary/10 text-primary",
    secondary:
      "border-b-4 border-secondary rounded-b-none focus:border-secondary focus:ring-secondary focus:bg-secondary/10 text-secondary",
    accent:
      "border-b-4 border-accent rounded-b-none focus:border-accent focus:ring-accent focus:bg-accent/10 text-accent",
    danger:
      "border-b-4 border-danger rounded-b-none focus:border-danger focus:ring-danger focus:bg-danger/10 text-danger",
    success:
      "border-b-4 border-success rounded-b-none focus:border-success focus:ring-success focus:bg-success/10 text-success",
    warning:
      "border-b-4 border-warning rounded-b-none focus:border-warning focus:ring-warning focus:bg-warning/10 text-warning",
    white:
      "border-b-4 border-white rounded-b-none focus:border-white focus:ring-white focus:bg-white/10 text-white",
    black:
      "border-b-4 border-black rounded-b-none focus:border-black focus:ring-black focus:bg-black/10 text-black",
  },
  blur: {
    primary:
      "backdrop-blur bg-primary/55 text-white focus:ring-primary hover:bg-primary/45 py-2.5",
    secondary:
      "backdrop-blur bg-secondary/55 text-white focus:ring-secondary hover:bg-secondary/45 py-2.5",
    accent:
      "backdrop-blur bg-accent/55 text-white focus:ring-accent hover:bg-accent/45 py-2.5",
    danger:
      "backdrop-blur bg-danger/55 text-white focus:ring-danger hover:bg-danger/45 py-2.5",
    success:
      "backdrop-blur bg-success/55 text-white focus:ring-success hover:bg-success/45 py-2.5",
    warning:
      "backdrop-blur bg-warning/55 text-white focus:ring-warning hover:bg-warning/45 py-2.5",
    white: "backdrop-blur bg-white/55 border-white text-black hover:bg-white/45 py-2.5",
    black: "backdrop-blur bg-black/55 border-black text-white hover:bg-black/45 py-2.5",
  },
};

const createColorClasses = (color: string) =>
  `bg-${color}/55 border-${color} focus:ring-${color} hover:bg-${color}/15 focus:bg-${color}/25`;

export const inputBgColorClasses: Record<SchemeColor, string> = {
  primary: createColorClasses("primary") + " text-white",
  secondary: createColorClasses("secondary") + " text-white",
  accent: createColorClasses("accent") + " text-white",
  danger: createColorClasses("danger") + " text-white",
  success: createColorClasses("success") + " text-white",
  warning: createColorClasses("warning") + " text-white",
  white: createColorClasses("white") + " text-black",
  black: createColorClasses("black") + " text-white",
};

export const inputVariantClasses: Record<Variant, string> = {
  outline: "border-4 bg-transparent",
  filled: "border-4 ",
  flushed: "border-0 border-b-4 bg-transparent rounded-b-none rounded-t-lg",
  blur: "backdrop-blur bg-white/55 border-4 border-transparent",
};

const inputBaseTailwind = `
  w-full md:min-w-52 pl-4 transition-all duration-300
  focus:outline-none focus:ring-2 rounded-xl
  disabled:cursor-not-allowed disabled:opacity-50
  disabled:no-underline disabled:shadow-none disabled:translate-none
  disabled:bg-gray-300 disabled:text-gray-500 disabled:border-transparent 
`;

export const inputBaseClasses = `
   mt-8 
  ${inputBaseTailwind}
`;

export const inputBaseClassesStandard = `
  mt-1
  ${inputBaseTailwind}
`;

export interface X3108BaseInpProps {
  name?: string;
  label?: string;
  placeholder?: string;
  size?: Size;
  radius?: Radius;
  variant?: Variant;
  schemaColor?: SchemeColor;
  error?: string;
  showError?: boolean;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  floatingLabel?: boolean;
  touched?: boolean;
  onBlur?: (e: React.FocusEvent<any>) => void;
}
