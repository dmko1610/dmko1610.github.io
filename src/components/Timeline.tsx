import { useTranslation } from "react-i18next"
import { timelineEng, TimelineItemType } from "../data/timeline_en"
import { timelineRus } from '../data/timeline_ru'
import TimelineItem from "./TimelineItem"
import Title from "./Title"

const sortCb = (itemA: TimelineItemType, itemB: TimelineItemType) => (itemB.id - itemA.id)

export default function Timeline() {
  const { t, i18n } = useTranslation()

  const timeline = i18n.language === 'en' ? timelineEng : timelineRus

  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>
          {t("timeline")}
        </Title>
        <ol className="flex flex-col relative border-l border-stone-400 dark:border-stone-700">
          {timeline.sort(sortCb).map((item) => {
            return (
              <TimelineItem
                key={item.id}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details} />
            )
          })}
        </ol>
      </div>
    </div>
  )
}