import React, { ChangeEvent } from "react";
import { X3108BaseInpProps, checkboxSizeClasses, inputBaseClassesStandard, labelSizeClasses, variantColorClassesInput } from "./X3108-wynn-kit-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";

interface X0707CheckboxSingleProps extends Omit<X3108BaseInpProps, 'onChange'> {
     option: { value: string | number; label: string };
     checked?: boolean;
     onChange?: (value: string | number, checked: boolean) => void;
     type?: "checkbox" | "radio";
}

export const X3108chk = React.forwardRef<HTMLInputElement, X0707CheckboxSingleProps>(
     ({
          name,
          option,
          checked = false,
          onChange,
          disabled,
          size = "md",
          schemaColor = "primary",
          type = "checkbox",
          variant = "filled",
          error = "",
          loading = false,
     }, ref) => {

          const hasError = !!error;

          const ClassesInputBase = X3108MergeClasses(
               "flex items-center rounded-lg py-1.5 px-2.5 ",
               inputBaseClassesStandard,
               labelSizeClasses[size],
               variantColorClassesInput[variant][schemaColor],
               hasError ? "border-danger focus:ring-danger/30" : "",
               loading ? "cursor-wait animate-pulse" : "",
               disabled ? "cursor-not-allowed" : "",
          );

          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
               onChange?.(option.value, e.target.checked);
          };

          return (
               <label className={`${ClassesInputBase}`}>
                    <input
                         ref={ref}
                         type={type}
                         name={name}
                         value={option.value}
                         checked={checked}
                         onChange={handleChange}
                         disabled={disabled}
                         className={checkboxSizeClasses[size]}
                    />
                    <span className={`${labelSizeClasses[size]} select-none`}>{option.label}</span>
               </label>
          );
     }
);

X3108chk.displayName = "CheckBoxUI";