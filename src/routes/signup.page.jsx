import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
    // Після успішної реєстрації користувач потрапляє на домашню сторінку
    // base URL: /react-tanstack-diary/ задано у vite.config.js
    return (
        <div className="flex min-h-[80vh] items-center justify-center p-4">
            <SignUp signInUrl="/signin" forceRedirectUrl="/react-tanstack-diary/" />
        </div>
    );
}
