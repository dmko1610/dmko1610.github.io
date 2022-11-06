import { useState } from "react"

export default function ThemeToggler() {
  const [dark, setDark] = useState(false)
  const root = document.documentElement

  const handleToggleTheme = () => {
    if (!dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    setDark(!dark)
  }

  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="fixed p-1 z-10 right-10 top-4 text-lg bg-violet-300 dark:bg-orange-300 rounded-md">
      {
        dark
          ? <img src="./day.svg" alt="icon" />
          : <img src="./night.svg" alt="icon" />
      }
    </button>
  )
}