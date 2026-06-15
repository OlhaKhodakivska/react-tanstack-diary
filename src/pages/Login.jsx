import { SignIn } from '@clerk/clerk-react';
import { useSearch } from '@tanstack/react-router';

export default function Login() {
  // Отримуємо збережену адресу з параметрів пошуку URL (?redirect=...)
  const search = useSearch({ from: '/login' });

  // Якщо користувач прийшов сюди через редірект (наприклад, намагався відкрити /diary/42),
  // Clerk після успішного входу поверне його саме туди. Інакше — на головну щоденника.
  const fallbackRedirect = search.redirect || '/diary';

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <SignIn
        signUpUrl="#" // Clerk автоматично перемикатиметься на SignUp всередині віджета
        forceRedirectUrl={fallbackRedirect}
      />
    </div>
  );
}