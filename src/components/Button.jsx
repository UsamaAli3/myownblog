import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={` ${className} px-4 py-2 mr-2 hover:bg-gradient-to-r rounded-3xl  backdrop-blur-sm hover: ${bgColor} ${textColor} `}
      {...props}
    >
      {children}
    </button>
  );
}
