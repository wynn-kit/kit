import React, { useState } from "react";
import {
  inputBaseClasses,
  inputSizeClasses,
  inputVariantClasses,
  inputColorClasses,
  labelSizeClassesSelect,
  inputBgColorClasses,
  inputBaseClassesStandard,
  BaseInputProps,
} from "./constant-inputs";
import { X0707MergeClasses } from "../copile/ClsxCopile";

interface OptionType {
  value: string;
  label: string;
}

interface SelectInputProps extends BaseInputProps {
  id: string;
  options: OptionType[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setInfo?: (name: string) => void;
}


export const xasreFloatingsSelect = React.forwardRef<HTMLSelectElement, SelectInputProps>((props, ref) => {
  const {
    id,
    name,
    label = "",
    placeholder = "Seleccione una opción",
    value = "",
    options,
    onChange,
    onBlur,
    disabled = false,
    touched = false,
    error = "",
    showError = true,
    floatingLabel = false,
    size = "md",
    variant = "filled",
    schemaColor = "primary",
    required = false,
    setInfo,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const hasError = touched && !!error;

  if ((name === "segmentId" && value === "2") || (name === "bannerSectionId" && value === "1")) {
    setInfo?.(name!);
  }

  const classesSelectBase = X0707MergeClasses(
    "w-full appearance-none",
    floatingLabel ? inputBaseClasses : inputBaseClassesStandard,
    inputSizeClasses[size],
    inputVariantClasses[variant],
    inputBgColorClasses[schemaColor],
    hasError ? "border-danger focus:ring-danger/30" : "border-gray-300 focus:border-primary focus:ring-primary/30",
    floatingLabel ? "pr-10" : ""
  );
  const classesLabel = X0707MergeClasses(
    "absolute left-3 px-1 transition-all pointer-events-none",
    value || isFocused ? "" : labelSizeClassesSelect[size],
    inputColorClasses[schemaColor]
  );

  return (
    <div className="relative mt-1.5">
      {!floatingLabel && label && (
        <label htmlFor={id} className={`ml-5 ${labelSizeClassesSelect[size]} ${inputColorClasses[schemaColor]}`}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <select
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        disabled={disabled}
        className={classesSelectBase}
      >
        {floatingLabel && <option value="" disabled hidden />}
        <option value="0" >{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {floatingLabel && label && (
        <label
          htmlFor={id}
          className={classesLabel}
        >
          {label}
        </label>
      )}

      {showError && hasError && (
        <div className="h-6 flex justify-end items-center mt-1">
          <p className="text-red-400 text-sm font-medium leading-5">{error}</p>
        </div>
      )}
    </div>
  );
});

xasreFloatingsSelect.displayName = "SelectUi";
