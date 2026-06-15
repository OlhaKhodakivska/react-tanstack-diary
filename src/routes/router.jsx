import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import MainLayout from '../layouts/MainLayout';
import DiaryLayout from '../layouts/DiaryLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Impressum from '../pages/Impressum';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';

// 1. Створюємо корінь, який буде рендерити головний макет (з навбаром і футером)
const rootRoute = createRootRoute({
  component: MainLayout,
});

// 2. Публічні сторінки
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });

const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });

const impressumRoute = createRoute({ getParentRoute: () => rootRoute, path: '/impressum', component: Impressum });

// 3. Сторінка Щоденника (використовує свій DiaryLayout як другий Layout)
const diaryLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/diary',
  component: DiaryLayout,
});

// Вкладений роут: Список нотаток (буде доступний за адресою /diary)
// Тут приймаємо Search Params для фільтрації (?search=...)
const diaryIndexRoute = createRoute({
  getParentRoute: () => diaryLayoutRoute,

  path: '/',
  validateSearch: (search) => ({
    search: search.search || '', // Валідація параметра пошуку
  }),
  component: Diary,
});

// Вкладений динамічний роут: Деталі нотатки (буде за адресою /diary/$noteId)
// Тут ми поєднуємо динамічний ID ($noteId) та Search Params (?mode=view)
const diaryDetailRoute = createRoute({
  getParentRoute: () => diaryLayoutRoute,
  path: '/$noteId',
  validateSearch: (search) => ({
    mode: search.mode || 'view', // Параметр: view або edit
  }),
  component: DiaryDetail,
});

// Збираємо дерево роутів докупи
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  impressumRoute,
  diaryLayoutRoute.addChildren([diaryIndexRoute, diaryDetailRoute]),
]);

export const router = createRouter({ routeTree });