import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn btn-${variant} rounded-xl font-medium`} {...props}>
      {children}
    </button>
  );
}