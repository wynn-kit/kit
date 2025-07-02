import React, { useState, useEffect } from "react";
import {
  inputSizeClasses,
  inputBaseClasses,
  labelSizeClasses,
  inputColorClasses,
  inputBaseClassesStandard,
  labelTraslateYClasses,
  X3108BaseInpProps,
  variantColorClassesInput,
} from "./X3108-wynn-kit-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";
import { X3108EyeClose, X3108EyeOpen } from "../icon/X3108-wynn-kit-icon";
import { radiusClasses } from "../types/ui";

type InputValidation = {
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  customValidator?: (value: string) => string | null;
};

interface X3108inpProps extends X3108BaseInpProps {
  name: string;
  value?: string | number;
  type?: "text" | "password" | "email" | "number" | "tel" | "date";
  autoComplete?: "on" | "off";
  className?: string;
  validation?: InputValidation;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const X3108inp = React.forwardRef<HTMLInputElement, X3108inpProps>(
  (
    {
      name,
      label,
      type = "text",
      value = "",
      variant = "filled",
      size = "md",
      validation,
      error: externalError,
      showError = true,
      disabled = false,
      loading = false,
      autoComplete = "off",
      required = false,
      schemaColor = "primary",
      placeholder,
      radius = "lg",
      floatingLabel = false,
      onClick,
      onChange,
      onBlur,
      onFocus,
    },
  ) => {
    const [isFocused, _setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [internalError, setInternalError] = useState("");

    useEffect(() => {
      if (validation && typeof value === 'string') {
        validateInput(value);
      }
    }, [value, validation]);

    const validateInput = (inputValue: string) => {
      if (!validation) return;

      let errorMsg = "";

      if (validation.required && !inputValue.trim()) {
        errorMsg = "Este campo es requerido";
      } else if (validation.minLength && inputValue.length < validation.minLength) {
        errorMsg = `Mínimo ${validation.minLength} caracteres`;
      } else if (validation.maxLength && inputValue.length > validation.maxLength) {
        errorMsg = `Máximo ${validation.maxLength} caracteres`;
      } else if (validation.pattern && !validation.pattern.test(inputValue)) {
        errorMsg = "Formato inválido";
      } else if (validation.customValidator) {
        const customError = validation.customValidator(inputValue);
        if (customError) errorMsg = customError;
      }

      setInternalError(errorMsg);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const setIsFocused = (e: React.FocusEvent<HTMLInputElement>) => {
      _setIsFocused(true);
      if (onFocus) {
        onFocus?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      _setIsFocused(false);
      if (validation) validateInput(e.target.value);
      onBlur?.(e);
    };

    const error = externalError || internalError;
    const hasError = !!error;

    const ClassesInputBase = X3108MergeClasses(
      "flex items-center",
      radiusClasses[radius],
      inputSizeClasses[size],
      variantColorClassesInput[variant][schemaColor],
      floatingLabel ? inputBaseClasses : inputBaseClassesStandard,
      hasError ? "border-danger focus:ring-danger/30" : "",
      type === "password" ? "pr-8" : "",
      loading ? "cursor-wait animate-pulse" : "",
      disabled ? "cursor-not-allowed" : "",
    )

    return (
      <div className={`relative ${loading ? "cursor-wait animate-pulse" : ""}`}>
        {!floatingLabel && label && (
          <label htmlFor={name} className={`block ml-5 ${labelSizeClasses[size]} ${inputColorClasses[schemaColor]}`}>
            {label}
            {required && <span className="text-danger ml-1">*</span>}
          </label>
        )}

        <input
          //ref={ref}
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          placeholder={!floatingLabel ? placeholder || label : ""}
          onChange={handleChange}
          onFocus={setIsFocused}
          onBlur={handleBlur}
          onClick={onClick}
          autoComplete={autoComplete}
          disabled={disabled || loading}
          className={ClassesInputBase}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-2 -translate-y-8.5 hover:bg-gray-100/25 rounded-full`}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? (
              <X3108EyeOpen size={size} />
            ) : (
              <X3108EyeClose size={size} />
            )}
          </button>
        )}

        {floatingLabel && label && (
          <label
            htmlFor={name}
            className={`
            absolute left-3 top-1 px-2 transition-all ${labelSizeClasses[size]} ${inputColorClasses[schemaColor]}
            ${value || isFocused
                ? ``
                : ` ${labelTraslateYClasses[size]}`
              }
            `.replace(/\s+/g, ' ').trim()}
          >
            {label}
          </label>
        )}

        {showError && hasError && (
          <div id={`${name}-error`} className="mt-1 ml-2">
            <p className="text-danger text-sm">{error}</p>
          </div>
        )}
      </div>
    );
  }
);

X3108inp.displayName = "InputUI";

export { X3108inp };