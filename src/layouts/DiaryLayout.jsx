import { Outlet, Link } from '@tanstack/react-router';

export default function DiaryLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Другий Layout: Простий Sidebar щоденника */}
      <aside className="w-full md:w-64 bg-base-200 p-4 rounded-2xl shadow-inner">
        <h2 className="text-xl font-bold mb-4 text-primary">My Diary</h2>
        <ul className="menu bg-base-200 w-full rounded-box gap-2">
          <li><Link to="/diary" search={{ search: '' }} activeClass="bg-primary text-white">📝 All notes</Link></li>
          <li><Link to="/about" activeClass="bg-primary text-white">🙋‍♀️ About me</Link></li>
        </ul>
      </aside>

      {/* Контент щоденника (список або деталі нотатки) */}
      <div className="grow bg-base-50 p-4 rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
}