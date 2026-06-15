import React from "react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-3xl shadow-sm mt-10 border border-base-300">
      <h2 className="text-3xl font-bold text-neutral mb-4 tracking-tight">About me 🌿</h2>
      <p className="text-sm opacity-80 leading-relaxed mb-4">
        Hello! I am a frontend developer who created this cozy space.
        This project is not just an assignment for presentation, but an attempt to create something beautiful,
        minimalistic and useful for mental peace.
      </p>
      <p className="text-sm opacity-80 leading-relaxed">
        These modern technologies are used: <strong>React</strong>, <strong>TanStack Router</strong> for solid navigation,
        <strong>Tailwind CSS</strong> and <strong>DaisyUI</strong> components for a soft matte design.
      </p>
    </div>
  );
}