import React from "react"
import ThemeToggleButton from "./components/theme-toggle/ThemeToggleButton"
import Logo from "@/lib/components/Logo"

const AppNavigate = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 px-1 pt-1 bg-background font-work-sans sm:bg-transparent">
        <div className="flex items-center justify-between">
          <a href="https://on-running.com" target="_blank" rel="noopener noreferrer">
            <Logo />
          </a>
          <div className="flex items-center gap-1">
            <ThemeToggleButton />
          </div>
        </div>
      </header>
    </>
  )
}

export default AppNavigate
