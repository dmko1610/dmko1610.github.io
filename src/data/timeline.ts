export type TimelineItemType = {
  id: number;
  year: number | string;
  title: string;
  duration: string;
  details: string;
}

export default [
  {
    id: 1,
    year: 2016,
    title: "Jr. Software Engineer at NetCracker",
    duration: "2 years",
    details:
      `Worked on the Enterprise Resource Planning department.
      Took part in several internal projects. 
      Had experience with Java 7, OracleSQL, Jenkins, SVN`,
  },
  {
    id: 2,
    year: 2018,
    title: "Software Engineer at NetCracker",
    duration: "1 year",
    details:
      `Participated in IFRS15 project. Worked in a large team, about 25-30 people. 
      Implemented xml forms as a part of front-end, worked with TOMS framework, created a lot of SQL queries. 
      Also took part in developing Pivot tables.
      Had experience with Java 7, OracleSQL, JavaScript, Jenkins, SVN`,
  },
  {
    id: 3,
    year: 2019,
    title: "JS Developer at Haulmont",
    duration: "2 years",
    details:
      `Took part in developing mobile app based on Thesis EDSM web application.
      Worked in a small team. Developed new features, resolved a lot of bug issues, 
      implemented a cool personalization menu and dark theme. Besides work routines made some changes
      to the open source libraries like react-native-color-picker.
      Had experience with Typescript, React, React-Native, Lerna, REST API, Github Actions, Git`,
  },
  {
    id: 4,
    year: 2021,
    title: "JS Developer at AndersenLab",
    duration: "1 year",
    details:
      `Took part in developing and supporting several web & mobile apps on Yonoton project.
      Worked in cross techonology agile mid-size team. During the work on this project I updated libraries on 2 applications,
      developed some new features, made bugfixing, did code reviews, was mentoring junior teammates.
      Had experience with Typescript, React, React-Native, Jest, Detox, REST API, Bitrise, Vercel, Git`,
  },
  {
    id: 5,
    year: "2022",
    title: "Technical Assistant at AndersenLab",
    duration: "6 months",
    details:
      `I allocated as a technical assistant on Yonoton project. 
      The list of my responsibilites inclues: making calls with my padawan, consulting of component refactoring,
      help in case of deadlock issues.`,
  },
  {
    id: 6,
    year: "2022",
    title: "JS Developer at AndersenLab",
    duration: "2 years 3 months",
    details:
      `I was allocated as a JavaScript developer on the Emilia project.
      During my time on the project, I contributed to the development of various features, mentored new team members, and participated in beta and production releases.
      As a team we were committed to the Test Driven Design approach and thorough code review process.
      Technologies I used: JavaScript, React, React Native, Jest, React-Native-Testing-Library, Postgres, GraphQL, CircleCI, Git.`,
  },
  {
    id: 7,
    year: "2025",
    title: "Looking for a job!",
    duration: "Present time",
    details: "",
  }
]
