import { Link } from '@tanstack/react-router';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200 px-4 flex justify-between items-center shadow-sm">
      {/* ЛІВА ЧАСТИНА: Навігаційні посилання */}
      <div className="flex gap-4">
        {/* Публічні лінки, які видно завжди й усім */}
        <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
        <Link to="/about" className="btn btn-ghost btn-sm">About</Link>

        {/* 📔 Показувати лінк на Щоденник ТІЛЬКИ якщо користувач залогінений (Extension Task 2) */}
        <SignedIn>
          <Link to="/diary" className="btn btn-primary btn-sm">My Diary</Link>
        </SignedIn>
      </div>

      {/* ПРАВА ЧАСТИНА: Кнопки авторизації / Профіль */}
      <div className="flex items-center gap-4">
        {/* Якщо юзер НЕ залогінений — показуємо кнопки Входу та Реєстрації */}
        <SignedOut>
          <Link to="/signin" className="btn btn-outline btn-sm">Sign In</Link>
          <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
        </SignedOut>

        {/* Якщо залогінений — Clerk сам малює матову круглу аватарку з меню виходу (Task 2) */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}