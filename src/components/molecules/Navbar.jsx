import { Link, useNavigate } from '@tanstack/react-router';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

export default function Navbar() {
  const navigate = useNavigate();
  const clerk = useClerk();

  const handleLogout = async () => {
    await clerk.signOut();
    navigate({
      to: '/',
      replace: true,
    }); // Після виходу перенаправляємо на домашню сторінку
  };

  return (
    <nav className="navbar bg-base-200 px-4 flex justify-between items-center shadow-sm">
      {/* ЛІВА ЧАСТИНА: Навігаційні посилання */}
      <div className="flex gap-1 md:gap-4">
        {/* Публічні лінки, які видно завжди й усім */}
        <Link to="/" className="btn px-2 btn-ghost btn-sm">Home</Link>
        <Link to="/about" className="btn px-2 btn-ghost btn-sm">About</Link>

        {/* Показувати лінк на Щоденник ТІЛЬКИ якщо користувач залогінений */}
        <SignedIn>
          <Link to="/diary" className="btn btn-primary btn-sm">My Diary</Link>
        </SignedIn>
      </div>

      {/* ПРАВА ЧАСТИНА: Кнопки авторизації / Профіль */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Якщо юзер НЕ залогінений — показуємо кнопки Входу та Реєстрації */}
        <SignedOut>
          <Link to="/signin" className="btn px-2 btn-outline btn-sm">Sign In</Link>
          <Link to="/signup" className="btn px-2 btn-primary btn-sm">Sign Up</Link>
        </SignedOut>

        {/* Якщо залогінений — Clerk сам малює матову круглу аватарку з меню виходу */}
        <SignedIn>
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm"
          >
            Logout
          </button>

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}