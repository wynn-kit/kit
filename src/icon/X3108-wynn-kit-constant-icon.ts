import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";
import { iconColorClass, iconSizeClass } from "../inputs/X3108-wynn-kit-constant";
import { SchemeColor, Size } from "../types/ui";

export interface PropsIcon {
  size: Size;
  color?: SchemeColor;
}

export const getIconClasses = ({ size, color }: PropsIcon) =>
  X3108MergeClasses(
    "rounded-lg px-1.5 py-1",
    iconSizeClass[size],
    color ? iconColorClass[color] : ""
  );
