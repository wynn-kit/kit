import React, { ChangeEvent } from "react";
import { BaseInputProps, checkboxSizeClasses, inputBaseClassesStandard, inputBgColorClasses, inputVariantClasses, labelSizeClasses } from "./X3108-wynn-kit-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";

interface X0707CheckboxSingleProps extends Omit<BaseInputProps, 'onChange'> {
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
          variant = "outline",
          error = "",
     }, ref) => {

          const hasError = !!error;

          const ClassesInputBase = X3108MergeClasses(
               "appearance-none rounded-md border py-1.5 px-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
               inputBaseClassesStandard,
               labelSizeClasses[size],
               inputVariantClasses[variant],
               inputBgColorClasses[schemaColor],
               hasError
                    ? "border-danger focus:ring-danger/30"
                    : "border-transparent focus:border-primary focus:text-primary focus:ring-primary/30"
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
                         className={`mr-2 transform ${checkboxSizeClasses[size]} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                              }`}
                    />
                    <span className={`${labelSizeClasses[size]} select-none`}>{option.label}</span>
               </label>
          );
     }
);

X3108chk.displayName = "CheckBoxUI";