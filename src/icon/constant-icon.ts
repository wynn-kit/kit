import { iconColorClass, iconSizeClass } from "../inputs/constant-inputs";
import { X0707MergeClasses } from "../copile/ClsxCopile";
import { SchemeColor, Size } from "../types/ui";

export interface PropsIcon {
  size: Size;
  color: SchemeColor;
}

export const getIconClasses = ({ size, color }: PropsIcon) =>
  X0707MergeClasses(
    "rounded-lg px-1.5 py-1 transition-all duration-200",
    iconSizeClass[size],
    iconColorClass[color]
  );
