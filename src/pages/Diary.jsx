import React, { useState } from "react";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { diaryData as initialData } from "../data/diaryData";
import DiaryList from "../components/organisms/DiaryList";
import SearchInput from "../components/atoms/SearchInput";
import AddNoteForm from "../components/molecules/AddNoteForm"; // Імпортуємо форму

export default function Diary() {
  // Робимо дані динамічними через useState
  const [notes, setNotes] = useState(initialData);

  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const searchQuery = search.search || "";
  const categoryFilter = search.category || "";

  // Функція додавання нової нотатки
  const handleAddNote = ({ title, content }) => {
    const newNote = {
      id: String(notes.length + 1), // Генеруємо простий ID
      title,
      content,
      date: new Date().toISOString().split('T')[0], // Поточна дата у форматі YYYY-MM-DD
      category: "mindfulness" // Дефолтна категорія
    };

    setNotes([newNote, ...notes]); // Додаємо нову нотатку на початок списку
  };

  // Фільтруємо нотатки з нашого стейту notes (а не зі статичного файлу)
  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter ? note.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-neutral tracking-tight">Diary 📖</h2>
          <p className="text-xs opacity-60">Your thoughts and memories in a safe place</p>
        </div>

        <SearchInput
          value={searchQuery}
          onChange={(e) => navigate({ search: (old) => ({ ...old, search: e.target.value }) })}
        />
      </div>

      {/* Вставляємо нашу форму для створення нотаток */}
      <AddNoteForm onAddNote={handleAddNote} />

      {filteredNotes.length === 0 ? (
        <div className="text-center py-10 bg-base-200 rounded-2xl opacity-60 text-sm">
          No results found for your search...
        </div>
      ) : (
        <DiaryList
          notes={filteredNotes}
          onNoteClick={(id) => navigate({ to: `/diary/${id}` })}
        />
      )}
    </div>
  );
}