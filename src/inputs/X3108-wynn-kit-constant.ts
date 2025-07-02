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

const dftlCheckboxSize = "mr-2.5 rounded-lg";

export const checkboxSizeClasses: Record<Size, string> = {
  sm: "w-4 h-4 " + dftlCheckboxSize,
  md: "w-5 h-5  " + dftlCheckboxSize,
  lg: "w-6 h-6 " + dftlCheckboxSize,
};

export const toggleSizeClasses: Record<Size, string> = {
  sm: "w-14 h-8",
  md: "w-16 h-9",
  lg: "w-20 h-10",
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

const vClass = {
  outline: "border-2 bg-transparent",
  filled: "border py-1 text-white",
  flushed: "border-b-4 rounded-b-none",
  blur: "backdrop-blur py-2.5 text-white",
};

export const variantColorClassesInput: Record<Variant, Record<SchemeColor, string>> = {
  outline: {
    primary: `${vClass.outline} border-primary text-white hover:bg-primary/15 focus:bg-primary/15 focus:ring-primary`,
    secondary: `${vClass.outline} border-secondary text-white hover:bg-secondary/15 focus:bg-secondary/15 focus:ring-secondary`,
    accent: `${vClass.outline} border-accent text-white hover:bg-accent/15 focus:bg-accent/15 focus:ring-accent`,
    danger: `${vClass.outline} border-danger text-white hover:bg-danger/15 focus:bg-danger/15 focus:ring-danger`,
    success: `${vClass.outline} border-success text-white hover:bg-success/15 focus:bg-success/15 focus:ring-success`,
    warning: `${vClass.outline} border-warning text-white hover:bg-warning/15 focus:bg-warning/15 focus:ring-warning`,
    white: `${vClass.outline} border-white text-black hover:bg-white/15 focus:bg-white/15 focus:ring-white`,
    black: `${vClass.outline} border-black text-white hover:bg-black/15 focus:bg-black/15 focus:ring-black`,
  },
  filled: {
    primary: `${vClass.filled} border-primary  bg-primary/45 hover:bg-primary/35 focus:bg-primary/45 focus:ring-primary`,
    secondary: `${vClass.filled} border-secondary bg-secondary/45 hover:bg-secondary/35 focus:bg-secondary/45 focus:ring-secondary`,
    accent: `${vClass.filled} border-accent bg-accent/45 hover:bg-accent/35 focus:bg-accent/45 focus:ring-accent`,
    danger: `${vClass.filled} border-danger bg-danger/45 hover:bg-danger/35 focus:bg-danger/45 focus:ring-danger`,
    success: `${vClass.filled} border-success bg-success/45 hover:bg-success/35 focus:bg-success/45 focus:ring-success`,
    warning: `${vClass.filled} border-warning bg-warning/45 hover:bg-warning/35 focus:bg-warning/45 focus:ring-warning`,
    white: `border py-1 border-white bg-white/45 text-black hover:bg-white/35 focus:bg-white/45 focus:ring-white`,
    black: `${vClass.filled} border-black bg-black/45 hover:bg-black/35 focus:bg-black/45 focus:ring-black`,
  },
  flushed: {
    primary: `${vClass.flushed} border-primary/45 hover:bg-primary/10 focus:ring-primary focus:bg-primary/10 text-primary`,
    secondary: `${vClass.flushed} border-secondary/45 hover:bg-secondary/10 focus:ring-secondary focus:bg-secondary/10 text-secondary`,
    accent: `${vClass.flushed} border-accent/45 hover:bg-accent/10 focus:ring-accent focus:bg-accent/10 text-accent`,
    danger: `${vClass.flushed} border-danger/45 hover:bg-danger/10 focus:ring-danger focus:bg-danger/10 text-danger`,
    success: `${vClass.flushed} border-success/45 hover:bg-success/10 focus:ring-success focus:bg-success/10 text-success`,
    warning: `${vClass.flushed} border-warning/45 hover:bg-warning/10 focus:ring-warning focus:bg-warning/10 text-warning`,
    white: `${vClass.flushed} border-white/45 hover:bg-white/10 focus:ring-white focus:bg-white/10 text-white`,
    black: `${vClass.flushed} border-black/45 hover:bg-black/10 focus:ring-black focus:bg-black/10 text-black`,
  },
  blur: {
    primary: `${vClass.blur} bg-primary/45 focus:ring-primary hover:bg-primary/45`,
    secondary: `${vClass.blur} bg-secondary/45 focus:ring-secondary hover:bg-secondary/45`,
    accent: `${vClass.blur} bg-accent/45 focus:ring-accent hover:bg-accent/45`,
    danger: `${vClass.blur} bg-danger/45 focus:ring-danger hover:bg-danger/45`,
    success: `${vClass.blur} bg-success/45 focus:ring-success hover:bg-success/45`,
    warning: `${vClass.blur} bg-warning/45 focus:ring-warning hover:bg-warning/45`,
    white: `backdrop-blur py-2.5 bg-white/45 text-black hover:bg-white/45`,
    black: `${vClass.blur} bg-black/45 hover:bg-black/45`,
  },
};

const inputBaseTailwind = `
  w-full md:min-w-52 pl-4 transition-all duration-300 focus:outline-none focus:ring-2 hover:shadow-md
  disabled:opacity-45  disabled:no-underline disabled:shadow-none disabled:translate-none
  disabled:bg-gray-200 disabled:text-gray-550 disabled:border-transparent 
`;

export const inputBaseClasses = `mt-8 ${inputBaseTailwind}`;

export const inputBaseClassesStandard = `mt-1 ${inputBaseTailwind}`;

export interface X3108BaseInpProps {
  id?: string;
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
}
