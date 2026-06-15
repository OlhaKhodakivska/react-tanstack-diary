import Navbar from "../components/molecules/Navbar";
import Footer from "../components/organisms/Footer";
import { Outlet } from "@tanstack/react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-neutral">
      <Navbar />
      <main className="grow container mx-auto px-4 py-8">
        <Outlet /> {/* Обов'язково! Сюди рендеряться сторінки */}
      </main>
      <Footer />
    </div>
  );
}