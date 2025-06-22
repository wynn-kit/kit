
import { X0707MergeClasses } from "../copile/ClsxCopile";
import { X0707Loading } from "../icon/x0707Loading";
import {
  ButtonProps,
  sizeClasses,
  variantColorClasses,
  commonClasses,
  radiusClasses
} from "./Btn310899-types";

const Btn310899 = ({
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

  const allClasses = X0707MergeClasses(
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
          <span className={X0707MergeClasses(
            "transition-opacity duration-200 ease-in-out",
            loading ? "opacity-0 invisible" : "opacity-100 visible"
          )}>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
          </span>
          {loading && (
            <span className="absolute animate-[--animate-fade-in-scale]">
              <X0707Loading />
            </span>
          )}
        </div>

      </button>
    </div>
  );
};

export { Btn310899 };