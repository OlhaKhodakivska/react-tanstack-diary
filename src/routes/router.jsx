import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';
import MainLayout from '../layouts/MainLayout';
import DiaryLayout from '../layouts/DiaryLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Impressum from '../pages/Impressum';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';
import Login from '../pages/Login'; // Імпортуємо нову сторінку логіну

// 1. Створюємо корінь, який буде рендерити головний макет
const rootRoute = createRootRoute({
  component: MainLayout,
});

// 2. Публічні сторінки
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const impressumRoute = createRoute({ getParentRoute: () => rootRoute, path: '/impressum', component: Impressum });

// Новий роут для сторінки логіну. Він приймає опціональний параметр пошуку ?redirect=...
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  validateSearch: (search) => ({
    redirect: search.redirect || '',
  }),
  component: Login,
});

// 3. Сторінка Щоденника (Захищений батьківський роут)
const diaryLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/diary',
  component: DiaryLayout,

  // ЦЕНТРАЛЬНИЙ ГАРД ДЛЯ ВСЬОГО ЩОДЕННИКА
  beforeLoad: ({ context, location }) => {
    // Якщо Clerk ще завантажується (перевіряє куки/сесію) — нічого не робимо
    if (!context.auth?.isLoaded) return;

    // Якщо користувач НЕ увійшов в акаунт — перенаправляємо на сторінку /login
    if (!context.auth?.isSignedIn) {
      throw redirect({
        to: '/login',
        search: {
          // Запам'ятовуємо точну адресу сторінки, куди юзер хотів потрапити 
          redirect: location.href,
        },
      });
    }
  },
});

// Вкладений роут: Список нотаток (/diary)
const diaryIndexRoute = createRoute({
  getParentRoute: () => diaryLayoutRoute,
  path: '/',
  validateSearch: (search) => ({
    search: search.search || '',
  }),
  component: Diary,
});

// Вкладений динамічний роут: Деталі нотатки (/diary/$noteId)
const diaryDetailRoute = createRoute({
  getParentRoute: () => diaryLayoutRoute,
  path: '/$noteId',
  validateSearch: (search) => ({
    mode: search.mode || 'view',
  }),
  component: DiaryDetail,
});

// Збираємо дерево роутів докупи (додали сюди loginRoute)
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  impressumRoute,
  loginRoute,
  diaryLayoutRoute.addChildren([diaryIndexRoute, diaryDetailRoute]),
]);

// Створюємо роутер та вказуємо початковий пустий контекст для auth
export const router = createRouter({
  routeTree,
  context: {
    auth: undefined, // Передаватиметься динамічно з main.jsx
  }
});