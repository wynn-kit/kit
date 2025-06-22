import React, { useState, useEffect } from "react";
import { BaseInputProps } from "./X3108-wynn-kit-constant";
import { X3108chk } from "./X3108-wynn-kit-chk";

interface CheckboxOption {
  value: string;
  label: string;
}

interface X0707CheckboxGroupProps extends Omit<BaseInputProps, 'value' | 'onChange'> {
  options: CheckboxOption[];
  value?: string | string[];
  onChange?: (values: string | string[]) => void;
  layout?: 'horizontal' | 'vertical';
  multiSelect?: boolean;
}

export const X3108chkm = React.forwardRef<HTMLDivElement, X0707CheckboxGroupProps>(
  ({
    name,
    label,
    options = [],
    value = [],
    onChange,
    size = "md",
    schemaColor = "primary",
    disabled = false,
    required = false,
    error,
    showError = true,
    layout = 'horizontal',
    multiSelect = false,
  }, ref) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
      Array.isArray(value) ? value : value ? [value] : []
    );

    useEffect(() => {
      if (multiSelect) {
        setSelectedValues(Array.isArray(value) ? value : []);
      } else {
        setSelectedValues(value ? [value as string] : []);
      }
    }, [value, multiSelect]);

    const handleChange = (itemValue: string | number, isChecked: boolean) => {
      let newValues: string[];

      if (multiSelect) {
        newValues = isChecked
          ? [...selectedValues, itemValue.toString()]
          : selectedValues.filter(v => v !== itemValue.toString());
      } else {
        newValues = isChecked ? [itemValue.toString()] : [];
      }

      setSelectedValues(newValues);

      if (onChange) {
        if (multiSelect) {
          onChange(newValues);
          return;
        }
        onChange(newValues.length > 0 ? newValues[0] : '');

      }
    };

    const containerClasses = `flex ${layout === 'horizontal' ? 'flex-wrap gap-4' : 'flex-col gap-2'}`;

    return (
      <div ref={ref} className="space-y-2">
        {label && (
          <label className={`block`}>
            {label}
            {required && <span className="text-danger ml-1">*</span>}
          </label>
        )}

        <div className={containerClasses}>
          {options.map(option => (
            <X3108chk
              key={option.value}
              name={name}
              option={option}
              checked={selectedValues.includes(option.value)}
              onChange={handleChange}
              disabled={disabled}
              size={size}
              schemaColor={schemaColor}
              type={multiSelect ? "checkbox" : "radio"}
            />
          ))}
        </div>

        {showError && error && (
          <div className="mt-1 text-sm text-danger">{error}</div>
        )}
      </div>
    );
  }
);

X3108chkm.displayName = "CheckBoxMultiUI";