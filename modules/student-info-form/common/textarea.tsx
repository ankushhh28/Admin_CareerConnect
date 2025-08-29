import React from "react";

interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  rows = 3,
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all resize-none"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
