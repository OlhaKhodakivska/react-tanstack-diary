# 🌿 Mindful Diary

A safe, cozy, and minimalist digital sanctuary designed to help users organize their thoughts, capture daily moments, and cultivate mental peace. This project focuses on high-performance architecture, clean code structure, and a premium, soft matte user experience (`mindfulNude` theme).

---

## ✨ Features

*   **Secure Authentication:** Integrated with **Clerk Auth** for seamless, rock-solid login/logout experiences and protected user sessions.
*   **Smart Navigation & Route Guards:** Powered by **TanStack Router**, implementing efficient, zero-flicker client-side routing.
*   **Deep Route Protection:** Advanced authentication verification using `beforeLoad` hooks to block unauthorized access at the routing level before rendering occurs.
*   **Smooth UX Redirection:** Smartly remembers the exact URL an unauthenticated user intended to visit and automatically redirects them there immediately after a successful login.
*   **Search & View Filters:** Robust state validation for searching and switching between reading and editing modes via verified URL Search Params.
*   **Atomic Design System:** Highly modular, scannable, and reusable architecture split logically into `atoms`, `molecules`, and `organisms`.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library:** React 19
*   **Routing Engine:** TanStack Router (Code-based routing trees)
*   **Authentication-as-a-Service:** Clerk Auth
*   **Styling & UI Components:** Tailwind CSS + DaisyUI (`mindfulNude` custom matte palette)
*   **Build Tool:** Vite

### 📂 Directory Structure

The project strictly adheres to **Atomic Design** principles combined with modern modular React patterns:

```text
src/
├── assets/             # Global static media and fonts
├── components/         # Atomic Design System
│   ├── atoms/          # Smallest design pieces (buttons, inputs)
│   ├── molecules/      # Combined atoms (navbar items, search bars)
│   └── organisms/      # Complex interface blocks (footer, card grids)
├── context/            # Global React Context providers
├── data/               # Local mock data and constants
├── layouts/            # Shared structure layouts (MainLayout, DiaryLayout)
├── pages/              # Self-contained page views
└── routes/             # TanStack routing configuration and guards
```

## 🚀 Getting Started
1. Clone the repository
git clone [[https://github.com/your-username/react-tanstack-diary.git](https://github.com/OlhaKhodakivska/react-tanstack-diary.git)]
cd react-tanstack-diary

## 2. Install dependencies
npm install

## 3. Environment Configuration
Create a `.env` file in the root directory of the project and add your Clerk Publishable Key:
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...your_actual_clerk_key...

## 4. Run the development server
npm run dev

Open http://localhost:5173 in your browser to explore the app.


### 💡 Technical Highlights
Intelligent Routing with beforeLoad
Unlike traditional route protection using wrapper components that cause layout flashing, this project leverages TanStack's native beforeLoad lifecycle method. The application pre-validates the user's login state via Clerk’s hook context before the component tree even starts loading data or rendering elements:

```javascript
const diaryLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/diary',
  component: DiaryLayout,
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.isLoaded) return;
    if (!context.auth?.isSignedIn) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
});
```


📝 License
This project was built for educational and professional growth purposes as part of the Digital Career Institute (DCI) curriculum.


