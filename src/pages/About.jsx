import React from "react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-3xl shadow-sm mt-10 border border-base-300">
      <h2 className="text-3xl font-bold text-neutral mb-4 tracking-tight">Mindful Diary 🌿</h2>
      <p className="text-md opacity-90 leading-relaxed mb-4">
        Your personal space for thoughts and mental peace.
      </p>
      <p className="text-sm tracking-wide opacity-80 leading-relaxed">
        This diary is designed for those seeking stillness amidst the daily chaos. It is more than just a digital notebook – it is a safe, minimalist sanctuary where you can organize your thoughts, capture key moments of your day, and spend time alone with yourself.
      </p>
      <p className="text-sm tracking-wide opacity-80 leading-relaxed mt-4">
         The interface is intentionally stripped of unnecessary visual noise, ensuring that nothing distracts you from what truly matters: your inner state.
      </p>
    </div>
  );
}