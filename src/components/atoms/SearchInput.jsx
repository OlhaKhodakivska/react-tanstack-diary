import React from "react";

export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      className="input input-bordered w-full max-w-xs rounded-xl bg-base-200 border-none text-neutral"
      value={value}
      onChange={onChange}
    />
  );
}