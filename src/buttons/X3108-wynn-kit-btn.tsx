
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";
import { X3108Loading } from "../icon/X3108-wynn-kit-icon";
import {
  ButtonProps,
  sizeClasses,
  variantColorClasses,
  commonClasses,
  radiusClasses
} from "./X3108-wynn-kit-types";

const X3108btn = ({
  children,
  disabled = false,
  type = "button",
  loading = false,
  onClick,
  variant = "filled",
  schemaColor = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  radius = "xl",
}: ButtonProps) => {

  const variantClass = variantColorClasses[variant]?.[schemaColor] || variantColorClasses.filled.primary;
  const sizeClass = sizeClasses[size];
  const focusRingClass = `focus:ring-${schemaColor}-300`;
  const radiusClass = radiusClasses[radius];

  const allClasses = X3108MergeClasses(
    commonClasses,
    variantClass,
    sizeClass,
    focusRingClass,
    radiusClass,
    fullWidth ? "w-full" : "",
    className
  );

  return (
    <div className={`${fullWidth ? "w-full" : "inline-block"} m-1.5`}>
      <button
        type={type}
        className={allClasses}
        onClick={onClick}
        disabled={disabled || loading}
        aria-busy={loading}
      >
        <div className="flex items-center justify-center">
          <span className={X3108MergeClasses(
            "transition-opacity duration-200 ease-in-out",
            loading ? "opacity-0 invisible" : "opacity-100 visible"
          )}>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
          </span>
          {loading && (
            <span className="absolute animate-[--animate-fade-in-scale]">
              <X3108Loading size={size} />
            </span>
          )}
        </div>

      </button>
    </div>
  );
};

X3108btn.displayName = "ButtonUI";

export { X3108btn };