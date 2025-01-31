export default function Footer() {

  const renderIcon = (url: string, imgSrc: string, alt: string) => {
    return (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={url}
        className="bg-stone-500 p-2 rounded-full">
        <img
          className="w-5 w-5 fill-current"
          src={imgSrc}
          alt={alt} />
      </a>
    )
  }

  return (
    <div className="py-5 text-center">
      <div className="flex flex-wrap justify-center gap-2">
        {renderIcon("https://github.com/dmko1610", "./github.svg", "github")}
        {renderIcon("https://www.linkedin.com/in/dmitry-kovalev-68791517a/", "./linkedin.svg", "linkedin")}
        {renderIcon("https://t.me/dmitrykovalev94", "./telegram.svg", "telegram")}
      </div>
      <p className="text-sm dark:text-stone-300 mt-2 opacity-50">
        ©
        2025
        Dmitry Kovalev. All rights reserved.
      </p>
    </div>
  )
}
