import React from "react";

export default function Impressum() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-3xl shadow-sm mt-10 border border-base-300">
      <h2 className="text-2xl font-bold text-neutral mb-4">Impressum</h2>
      <div className="text-xs opacity-70 space-y-2 leading-relaxed">
        <p className="font-semibold">Angaben gemäß § 5 TMG:</p>
        <p>
          Olha Khodakivska<br />
          DCI Student Project<br />
          Deutschland
        </p>
        <p className="font-semibold mt-4">Kontakt:</p>
        <p>E-Mail: olhakhodakivska@gmail.com</p>
        <p className="mt-4 text-[10px] opacity-50">
          Haftungsausschluss: Dies ist ein reines Ausbildungsprojekt im Rahmen des Web Development Kurses.
        </p>
      </div>
    </div>
  );
}