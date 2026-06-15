import React from "react";
import { Link } from "@tanstack/react-router";
import Button from "../components/atoms/Button";

export default function Home() {
  return (
    <div className="hero min-h-[60vh] bg-base-100 rounded-3xl">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-neutral tracking-tight">
            MindfulSpace 🌿
          </h1>
          <p className="py-6 text-sm tracking-wide opacity-80 leading-relaxed">
            Write down your thoughts, reflect on your mood, and stay in tune with yourself.
          </p>
          <Link to="/diary">
            <Button variant="primary">Open Diary</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}