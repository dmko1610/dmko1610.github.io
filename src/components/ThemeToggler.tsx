import { useEffect, useState } from "react"

export default function ThemeToggler() {
  const [theme, setTheme] = useState("")
  const root = document.documentElement

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    setTheme(systemTheme)
  }, [])

  useEffect(() => {
    if (!theme) return

    document.documentElement.classList.toggle("dark", theme == "dark")
  }, [theme])

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="fixed p-1 z-10 right-10 top-4 text-lg 
      bg-violet-300 dark:bg-orange-300 rounded-md
      hover:bg-violet-500 hover:dark:bg-amber-600 
      active:bg-violet-400 active:dark:bg-orange-400">
      {
        theme === "dark"
          ? <img src="./day.svg" alt="icon" />
          : <img src="./night.svg" alt="icon" />
      }
    </button>
  )
}