export default function Title({ children }: any) {
  return (
    <h1 className="text-2xl dark:text-stone-300 font-bold underline underline-offset-8 decoration-4 text-stone-800 mb-5">
      {children}
    </h1>
  )
}