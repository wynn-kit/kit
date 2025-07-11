import React from "react";
import { X3108BaseInpProps, inputColorClasses, labelSizeClasses, toggleColorClasses, toggleSizecircleClasses, toggleSizeClasses, variantColorClassesInput, } from "./X3108-wynn-kit-constant";
import { radiusClasses, Size } from "../types/ui";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";

interface X0707ToggleButtonProps extends Omit<X3108BaseInpProps, "onChange"> {
     value?: boolean;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const toggleTranslateClasses: Record<Size, string> = {
     sm: "translate-x-[1.5rem]",
     md: "translate-x-[1.75rem]",
     lg: "translate-x-[2rem]",
};

export const X3108tgl = ({
     name,
     label,
     value = false,
     onChange,
     disabled,
     size = "md",
     schemaColor = "primary",
     variant = "filled",
     error = "",
     loading = false,
}: X0707ToggleButtonProps) => {

     const classContenedor = X3108MergeClasses(
          toggleSizeClasses[size],
          variantColorClassesInput[variant][schemaColor],
          variant === "flushed" ? "rounded-t-lg px-1" : "rounded-full",
          variant === "filled" ? "px-1" : "",
          "flex relative overflow-hidden",
          loading ? "cursor-wait animate-pulse" : "",
          disabled ? "cursor-not-allowed" : "",
     );

     const classCircle = X3108MergeClasses(
          toggleSizecircleClasses[size],
          toggleColorClasses[schemaColor],
          variant === "filled" ? "-translate-y-0.5" : "",
          "rounded-full absolute transition-all duration-300 ease-in-out",
          value ? toggleTranslateClasses[size] : "translate-x-0"
     );

     return (
          <div className="flex flex-col">
               <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input
                         type="checkbox"
                         className="sr-only peer"
                         name={name}
                         checked={value}
                         onChange={onChange}
                         disabled={disabled}
                    />
                    <div
                         className={classContenedor}
                    >
                         <div
                              className={classCircle}
                         />
                    </div>
                    <span className={`${labelSizeClasses[size]} ${inputColorClasses[schemaColor]} ml-2`}>
                         {label}
                    </span>
               </label>

               {error && (
                    <div className="min-h-7 max-h-9 flex justify-end items-center mt-1">
                         <p className="text-red-400 text-sm font-medium leading-5">{error}</p>
                    </div>
               )}
          </div>
     );
}


X3108tgl.displayName = "ToggleUI";