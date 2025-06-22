import React from "react";
import { BaseInputProps, inputBgColorClasses, inputColorClasses, inputVariantClasses, labelSizeClasses, toggleColorClasses, toggleSizecircleClasses, toggleSizeClasses, } from "./constant-inputs";
import { Size } from "../types/ui";
import { X0707MergeClasses } from "../copile/ClsxCopile";

interface X0707ToggleButtonProps extends Omit<BaseInputProps, "onChange"> {
     value?: boolean;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const toggleTranslateClasses: Record<Size, string> = {
     sm: "translate-x-[1.5rem]",
     md: "translate-x-[1.75rem]",
     lg: "translate-x-[2rem]",
};

export const X0707ToggleButton = ({
     name,
     label,
     value = false,
     onChange,
     disabled,
     size = "md",
     schemaColor = "primary",
     variant = "filled",
     error = "",
}: X0707ToggleButtonProps) => {

     const classContenedor = X0707MergeClasses(
          toggleSizeClasses[size],
          inputVariantClasses[variant],
          inputBgColorClasses[schemaColor],
          "rounded-full flex relative overflow-hidden",
          disabled ? "opacity-50 cursor-not-allowed" : ""
     );

     const classCircle = X0707MergeClasses(
          toggleSizecircleClasses[size],
          toggleColorClasses[schemaColor],
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


X0707ToggleButton.displayName = "ToggleUI";