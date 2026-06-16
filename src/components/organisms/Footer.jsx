import React from "react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content text-xs opacity-70">
      <aside>
        <p>&copy; 2026 MindfulSpace - All rights reserved</p>
      </aside>

      <aside>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
      </aside>

      <aside>
        <Link to="/impressum" className="link link-hover">Impressum</Link>
      </aside>
    </footer>
  );
}