import React from "react";
import { useParams, useSearch, useNavigate } from "@tanstack/react-router";
import { diaryData } from "../data/diaryData";
import Button from "../components/atoms/Button";

export default function DiaryDetail() {
  const { noteId } = useParams({ strict: false });
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const isEditMode = search.mode === "edit";

  // Шукаємо потрібну нотатку в нашому масиві даних за ID з URL
  const note = diaryData.find((n) => n.id === noteId);

  if (!note) {
    return (
      <div className="text-center py-10 text-error bg-error/10 rounded-2xl">
        The note with ID “{noteId}” was not found!
      </div>
    );
  }

  return (
    <div className="bg-base-200 p-6 rounded-3xl border border-base-300 space-y-4">
      <div className="flex justify-between items-center">
        <span className="badge badge-primary badge-outline uppercase text-xs tracking-wider px-3 py-2">
          {note.category}
        </span>
        <span className="text-xs opacity-60">{note.date}</span>
      </div>

      {isEditMode ? (
        /* Режим редагування (якщо в URL є ?mode=edit) */
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral">Edit Entry (Demo)</h3>
          <input
            type="text"
            defaultValue={note.title}
            className="input input-bordered w-full bg-base-100 rounded-xl"
          />
          <textarea
            defaultValue={note.content}
            className="textarea textarea-bordered w-full h-32 bg-base-100 rounded-xl"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="accent" onClick={() => navigate({ search: { mode: undefined } })}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => navigate({ search: { mode: undefined } })}>
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        /* Звичайний режим перегляду нотатки */
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral tracking-tight">{note.title}</h2>
          <p className="text-sm opacity-80 leading-relaxed whitespace-pre-line bg-base-100 p-4 rounded-2xl">
            {note.content}
          </p>

          <div className="flex justify-between items-center pt-4">
            <Button variant="accent" onClick={() => navigate({ to: "/diary" })}>
              ← Back
            </Button>
            {/* Кнопка перемикає Search Param в mode=edit */}
            <Button variant="primary" onClick={() => navigate({ search: { mode: "edit" } })}>
              Edit note ✏️
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}