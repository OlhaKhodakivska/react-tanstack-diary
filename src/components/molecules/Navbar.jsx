import React from "react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-6 py-4 shadow-sm border-b border-base-200">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold tracking-wide text-neutral">
          MindfulSpace 🌿
        </Link>
      </div>
      <div className="flex-none gap-6 text-sm font-medium text-neutral/80">
        <Link to="/" className="hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-bold px-2">
          Home
        </Link>
        <Link to="/diary" className="hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-bold px-2">
          Diary
        </Link>
        <Link to="/about" className="hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-bold px-2">
          About
        </Link>
        <Link to="/impressum" className="hover:text-primary transition-colors [&.active]:text-primary [&.active]:font-bold px-2">
          Impressum
        </Link>
      </div>
    </div>
  );
}