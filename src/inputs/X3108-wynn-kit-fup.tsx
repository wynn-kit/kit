import React, { useState, useEffect } from "react";
import {
  inputSizeClasses,
  inputBaseClassesStandard,
  inputColorClasses,
  labelSizeClasses,
  X3108BaseInpProps,
  variantColorClassesInput,
} from "./X3108-wynn-kit-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";

interface X312FileInputProps extends X3108BaseInpProps {
  description?: string[];
  fileWeightMB?: number;
  formats?: string[];
  value?: File | string | null;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: File | null } }
  ) => void;
  selectItem?: (file: File) => void;
  width?: number;
  height?: number;
}

export const X3108fup = ({
  name,
  label,
  variant = "outline",
  size = "md",
  value = null,
  description = [],
  fileWeightMB = 5,
  formats = ["image/jpeg", "image/png", "application/pdf"],
  error,
  showError = true,
  disabled = false,
  loading = false,
  required = false,
  schemaColor = "primary",
  floatingLabel = false,
  width,
  height,
  onChange,
  touched = false,
}: X312FileInputProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [internalError, setInternalError] = useState("");

  useEffect(() => {
    let urlToRevoke: string | null = null;

    if (value instanceof File && value.type.startsWith("image")) {
      const url = URL.createObjectURL(value);
      setPreviewUrl(url);
      urlToRevoke = url;
    } else if (typeof value === "string" && /\.(jpg|jpeg|png|svg)$/.test(value)) {
      setPreviewUrl(value);
    } else {
      setPreviewUrl(null);
    }

    return () => {
      if (urlToRevoke) URL.revokeObjectURL(urlToRevoke);
    };
  }, [value]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > fileWeightMB * 1024 * 1024) {
      setInternalError(`El archivo no debe superar ${fileWeightMB} MB.`);
      onChange({ ...e, target: { ...e.target, name: name ?? "", value: "" } });
      return;
    }

    if (!formats.includes(file.type)) {
      setInternalError(`Formato inválido. Permitidos: ${formats.join(", ")}`);
      onChange({ ...e, target: { ...e.target, name: name ?? "", value: "" } });

      return;
    }

    if (file.type.startsWith("image") && (width || height)) {
      try {
        const dimensionsValid = await new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = URL.createObjectURL(file);
          img.onload = () => {
            const validWidth = !width || img.width === width;
            const validHeight = !height || img.height === height;
            URL.revokeObjectURL(img.src);
            resolve(validWidth && validHeight);
          };
          img.onerror = () => resolve(false);
        });

        if (!dimensionsValid) {
          setInternalError(
            `La imagen debe tener dimensiones${width ? ` de ancho ${width}px` : ''}${height ? `${width ? ' y' : ''} de alto ${height}px` : ''}.`
          );
          onChange({ ...e, target: { ...e.target, name: name ?? "", value: "" } });

          return;
        }
      } catch {
        setInternalError("Error al procesar la imagen");
        onChange({ ...e, target: { ...e.target, name: name ?? "", value: "" } });
        return;
      }
    }

    setInternalError("");
    onChange({ ...e, target: { ...e.target, name: name ?? "", value: file } });
  };

  const hasError = !!(touched && (error || internalError));

  const ClassesInput = X3108MergeClasses(
    inputBaseClassesStandard,
    inputSizeClasses[size],
    variantColorClassesInput[variant][schemaColor],
    hasError ? "border-danger focus:ring-danger/30" : "",
    loading ? "cursor-wait animate-pulse" : "",
    disabled ? "cursor-not-allowed" : "",
  );

  return (
    <div className="relative">
      {!floatingLabel && label && (
        <label htmlFor={name} className={`block ml-2 ${labelSizeClasses[size]} ${inputColorClasses[schemaColor]}`}>
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <label htmlFor={name} className={`${ClassesInput} cursor-pointer`}>
        <input
          id={name}
          name={name}
          type="file"
          accept={formats.join(",")}
          onChange={handleChange}
          disabled={disabled}
          className="hidden"
        />
        {previewUrl ? (
          <img src={previewUrl} alt="preview" className="max-w-20 rounded-md" />
        ) : (
          <span className="text-sm text-gray-500">Seleccionar archivo</span>
        )}
      </label>

      {description?.map((text, i) => (
        <p key={i} className="text-xs text-gray-400 mt-1 ml-2">{text}</p>
      ))}

      {showError && hasError && (
        <div className="mt-1 ml-2">
          <p className="text-danger text-sm">{internalError || error}</p>
        </div>
      )}
    </div>
  );
};

X3108fup.displayName = "FileInputUI";