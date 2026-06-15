import React from "react";
import Button from "../atoms/Button";

export default function DiaryCard({ title, date, category, onDetailClick }) {
  return (
    <div className="card bg-base-200 shadow-sm rounded-2xl p-5 border border-base-300">
      <div className="flex justify-between items-start">
        <span className="badge badge-primary badge-outline text-xs uppercase tracking-wider px-2 py-1">
          {category}
        </span>
        <span className="text-xs opacity-60">{date}</span>
      </div>
      <h2 className="card-title text-neutral my-3 text-lg font-semibold">{title}</h2>
      <div className="card-actions justify-end mt-2">
        <Button variant="accent" onClick={onDetailClick}>
          Read more →
        </Button>
      </div>
    </div>
  );
}