import { useTranslation } from "react-i18next"

export default function LocationSwitcher() {
  const { t, i18n } = useTranslation()

  return (
    <button
      className="fixed z-10 left-10 top-4 py-1 px-2 
      text-gray-900 dark:text-stone-300 text-xl font-bold
      border border-gray-900 dark:border-stone-300 rounded"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")}
    >
      {i18n.language === "en" ? "RU" : "EN"}
    </button>
  )
}