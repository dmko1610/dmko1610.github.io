import { useEffect, useState } from "react"

export default function ThemeToggler() {
  const [theme, setTheme] = useState("")
  const root = document.documentElement

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="fixed p-1 z-10 right-10 top-4 text-lg bg-violet-300 dark:bg-orange-300 rounded-md">
      {
        theme === "dark"
          ? <img src="./day.svg" alt="icon" />
          : <img src="./night.svg" alt="icon" />
      }
    </button>
  )
}