import React from "react";
import { useId } from "react";

const input = React.forwardRef(function Input(
  { type = "text", label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div>
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
          htmlFor="{id"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default input;
