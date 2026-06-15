import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { router } from './routes/router'
import './index.css'

document.documentElement.setAttribute("data-theme", "mindfulNude")

// Retrieve the Clerk publishable key from your .env file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Please check your .env file.")
}

// A wrapper component to dynamically inject Clerk's auth state into the TanStack Router context
function AppProvider() {
  const auth = useAuth() // Contains isSignedIn, isLoaded, user, etc.

  return (
    <RouterProvider
      router={router}
      context={{ auth }}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppProvider />
    </ClerkProvider>
  </React.StrictMode>,
)