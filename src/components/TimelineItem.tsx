interface IProps {
  year: number | string;
  title: string;
  duration: string;
  details: string;
}

export default function TimelineItem(props: IProps) {
  const { year, title, duration, details } = props
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full bg-stone-400 mt-1.5 -left-1.5 border border-stone-300" />
      <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
        <span className="inline-block px-2 py-1 font-semibold text-stone-300 bg-stone-800 rounded-md">{year}</span>
        <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
        <p className="text-sm my-1 font-normal text-stone-500 leading-none ">{duration}</p>
      </div>
      <p className="my-2 text-base font-normal text-stone-600">{details}</p>
    </li>
  )
}