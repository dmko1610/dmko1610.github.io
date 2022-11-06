import timeline, { TimelineItemType } from "../data/timeline"
import TimelineItem from "./TimelineItem"

const sortCb = (itemA: TimelineItemType, itemB: TimelineItemType) => (itemB.id - itemA.id)

export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h1 className="text-2xl dark:text-stone-300 font-bold underline underline-offset-8 decoration-4 text-stone-800 mb-5">
          Timeline
        </h1>
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