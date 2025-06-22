import { useState, useEffect, useRef } from "react";
import { X3108inp } from "./X3108-wynn-kit-inp";
import { BaseInputProps } from "./X3108-wynn-kit-constant";

interface ListDropdown {
  name: string;
  [key: string]: any;
}

interface X3108autosProps extends BaseInputProps {
  name: string;
  value?: string;
  data: ListDropdown[];
  className?: string;
  setFetchInput?: (query: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const X3108autos = ({
  label,
  name,
  placeholder,
  value = "",
  error = "",
  touched = false,
  disabled = false,
  showError = true,
  data = [],
  setFetchInput,
  onChange,
  onBlur,
}: X3108autosProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        setFetchInput?.(query);
        setResults(data);
        setDropdownVisible(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
    //setSelected(e.target.value);
  };

  const handleResultClick = (result: any) => {
    setQuery(result.name);
    setDropdownVisible(false);
  };

  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} className="w-full my-2">
      <X3108inp
        name={name}
        type="text"
        placeholder={placeholder}
        value={query}
        className="w-full px-4 py-2 mt-1 text-sm text-[#393e3f] bg-white/60 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#008BDA] focus:border-[#008BDA] disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
        onChange={onChange}
        onClick={handleChange}
        autoComplete="off"
        disabled={disabled}
        onFocus={() => setDropdownVisible(true)}
        onBlur={onBlur}
      />
      {dropdownVisible && results.length > 0 && (
        <ul className="absolute bg-white border border-slate-400 w-1/4 z-10">
          {results.map((result: any, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result)}
              className="cursor-pointer p-1 text-[#393e3f] text-sm hover:bg-blue-600 hover:text-white"
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
      {showError && (
        <div className="min-h-7 max-h-9 flex justify-end items-center mt-1">
          {touched && (
            <p className="text-red-400 text-sm font-mediun leading-5">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};
X3108autos.displayName = "AutoCompleteUI";