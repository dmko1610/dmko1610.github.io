import React from "react";

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex items-center justify-center flex-col pt-20 pb-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Dmitry Kovalev
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer & JS Developer {' '}
        </p>
        <p className="text-sm max-w-xl mb6 font-bold">
          I am a Software Engineer with more that 6+ years overall experience in IT
          and 3+ years of experience as a JS Developer. I use React and React-Native
          for developing web and mobile applications. I have been awarded with bachelor's degree
          in Programming Engineering and with master's degree in Applied Informatics. I was involved 
          in 5 different projects as a React-Native Developer. Besides React and RN I also familiar 
          with NodeJS, Java, OracleSQL. As a version control system I prefer Git, but some time ago I worked with SVN (Tortoise client).
          I commited to the principles of XP (Extreme programming) like DRY, KISS and YANGI.
          <br/>//TODO Should write more 
        </p>
      </div>
    </section>
  )
}