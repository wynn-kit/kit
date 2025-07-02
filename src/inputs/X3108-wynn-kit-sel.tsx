import React, { useState } from "react";
import {
  inputBaseClasses,
  inputSizeClasses,
  inputColorClasses,
  labelSizeClassesSelect,
  inputBaseClassesStandard,
  X3108BaseInpProps,
  variantColorClassesInput,
} from "./X3108-wynn-kit-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";
import { radiusClasses } from "../types/ui";

interface OptionType {
  value: string;
  label: string;
}

interface SelectInputProps extends X3108BaseInpProps {
  options: OptionType[];
  value?: string;
  setInfo?: (name: string) => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}


export const X3108sel = React.forwardRef<HTMLSelectElement, SelectInputProps>((props, ref) => {
  const {
    id,
    name,
    label = "",
    placeholder = "Seleccione una opción",
    value = "",
    options,
    onChange,
    onBlur,
    loading = false,
    disabled = false,
    touched = false,
    error = "",
    showError = true,
    floatingLabel = false,
    size = "md",
    variant = "filled",
    schemaColor = "primary",
    required = false,
    radius = "lg",
    setInfo,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const hasError = touched && !!error;

  if ((name === "segmentId" && value === "2") || (name === "bannerSectionId" && value === "1")) {
    setInfo?.(name!);
  }

  const classesSelectBase = X3108MergeClasses(
    "w-full appearance-none",
    floatingLabel ? inputBaseClasses : inputBaseClassesStandard,
    inputSizeClasses[size],
    floatingLabel ? "pr-8" : "",
    radiusClasses[radius],
    variantColorClassesInput[variant][schemaColor],
    hasError ? "border-danger focus:ring-danger/30" : "",
    loading ? "cursor-wait animate-pulse" : "",
    disabled ? "cursor-not-allowed" : "",
  );

  const classesLabel = X3108MergeClasses(
    "absolute left-3 px-1 transition-all pointer-events-none",
    value || isFocused ? "" : labelSizeClassesSelect[size],
    inputColorClasses[schemaColor]
  );

  return (
    <div className={`relative ${loading ? "cursor-wait animate-pulse" : ""}`}>
      {!floatingLabel && label && (
        <label htmlFor={id} className={`ml-5 ${labelSizeClassesSelect[size]} ${inputColorClasses[schemaColor]}`}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        disabled={disabled || loading}
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

X3108sel.displayName = "SelectUi";
