import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';
import MainLayout from '../layouts/MainLayout';
import DiaryLayout from '../layouts/DiaryLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Impressum from '../pages/Impressum';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';
import Login from '../pages/Login';
import SignInPage from './signin.page';
import SignUpPage from './signup.page';

// 1. Створюємо корінь, який буде рендерити головний макет
const rootRoute = createRootRoute({
  component: MainLayout,
});

// 2. Публічні сторінки
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const impressumRoute = createRoute({ getParentRoute: () => rootRoute, path: '/impressum', component: Impressum });

// Роут для сторінки логіну (старий, редіректує на /signin)
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  validateSearch: (search) => ({
    redirect: search.redirect || '',
  }),
  component: Login,
});

// Роут для сторінки входу (SignIn)
const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signin',
  validateSearch: (search) => ({
    redirect: search.redirect || '',
  }),
  component: SignInPage,
});

// Роут для сторінки реєстрації (SignUp)
const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignUpPage,
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

    // Якщо користувач НЕ увійшов в акаунт — перенаправляємо на сторінку /signin
    if (!context.auth?.isSignedIn) {
      throw redirect({
        to: '/signin',
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

// Збираємо дерево роутів докупи
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  impressumRoute,
  loginRoute,
  signInRoute,
  signUpRoute,
  diaryLayoutRoute.addChildren([diaryIndexRoute, diaryDetailRoute]),
]);

// Створюємо роутер та вказуємо початковий пустий контекст для auth
export const router = createRouter({
  routeTree,
  context: {
    auth: undefined, // Передаватиметься динамічно з main.jsx
  }
});