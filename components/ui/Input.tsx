import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id;

    return (
      <div className="w-full space-y-2">
        <label
          htmlFor={inputId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
        >
          {label}
        </label>

        <input
          id={inputId}
          ref={ref}
          className={`
            flex h-12 w-full rounded-lg border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors 
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            disabled:cursor-not-allowed disabled:opacity-50
            ${
              error
                ? "border-destructive focus-visible:ring-destructive"
                : "border-input"
            }
            ${className}
          `}
          {...props}
        />

        {error && (
          <span className="text-xs font-medium text-destructive animate-pulse">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
