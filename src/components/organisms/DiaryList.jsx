import React from "react";
import DiaryCard from "../molecules/DiaryCard";

export default function DiaryList({ notes, onNoteClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notes.map((note) => (
        <DiaryCard
          key={note.id}
          title={note.title}
          date={note.date}
          category={note.category}
          onDetailClick={() => onNoteClick(note.id)}
        />
      ))}
    </div>
  );
}