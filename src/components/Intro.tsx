import { useTranslation } from "react-i18next"

export default function Intro() {
  const { t } = useTranslation()

  return (
    <section
      id="intro"
      className="flex items-center justify-center flex-col pt-20 pb-6">
      <div className="text-center">
        <h1 className="text-4xl dark:text-stone-300 md:text-7xl mb-1 md:mb-3 font-bold">
          {t('owner_name')}
        </h1>
        <p className="text-base dark:text-stone-300 md:text-xl mb-3 font-medium">
          {t("specialization")}
        </p>
        <p className="text-sm dark:text-stone-300 max-w-xl mb6 font-bold">
          {t("summary")}
        </p>
      </div>
    </section>
  )
}
