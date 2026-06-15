import React, { useState } from "react";
import Button from "../atoms/Button";

export default function AddNoteForm({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        // Передаємо дані в батьківський компонент
        onAddNote({ title, content });

        // Очищаємо поля після відправки
        setTitle("");
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-base-200 p-6 rounded-3xl border border-base-300 space-y-4 shadow-sm mb-8"
        >
            <h3 className="text-lg font-bold text-neutral tracking-tight">New post ✍️</h3>

            <div className="form-control">
                <input
                    type="text"
                    placeholder="Title..."
                    className="input input-bordered w-full bg-base-100 rounded-xl border-none text-neutral"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-control">
                <textarea
                    placeholder="What's on your mind? Share it with the paper..."
                    className="textarea textarea-bordered w-full h-24 bg-base-100 rounded-xl border-none text-neutral"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className="flex justify-end">
                <Button variant="primary" type="submit">
                    Save Note
                </Button>
            </div>
        </form>
    );
}
