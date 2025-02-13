export type TimelineItemType = {
  id: number;
  year: number | string;
  title: string;
  duration: string;
  details: string;
}

export const timelineRus = [
  {
    id: 1,
    year: 2016,
    title: "Младший инженер-программист в NetCracker",
    duration: "2 года",
    details:
      `Работал в отделе управления корпоративными ресурсами.
      Участвовал в нескольких внутренних проектах. 
      Технологии: Java 7, OracleSQL, Jenkins, SVN.`,
  },
  {
    id: 2,
    year: 2018,
    title: "Инженер-программист в NetCracker",
    duration: "1 год",
    details:
      `Участвовал в проекте IFRS15. Работал в большой команде (около 25-30 человек). 
      Реализовывал XML-формы в качестве части фронтенда, работал с TOMS фреймворком, писал множество SQL-запросов. 
      Также участвовал в разработке сводных таблиц.
      Технологии: Java 7, OracleSQL, JavaScript, Jenkins, SVN.`,
  },
  {
    id: 3,
    year: 2019,
    title: "Fronend-разработчик в Haulmont",
    duration: "2 года",
    details:
      `Участвовал в разработке мобильного приложения на основе веб-приложения Thesis EDSM.
      Работал в небольшой команде (до 10 человек). Разрабатывал новые функции, исправлял множество багов, 
      реализовал удобное меню персонализации и темную тему. Помимо основных задач, вносил изменения
      в open-source библиотеки, такие как react-native-color-picker.
      Технологии: TypeScript, React, React-Native, Lerna, REST API, Github Actions, Git.`,
  },
  {
    id: 4,
    year: 2021,
    title: "Frontend-разработчик в Andersen Lab",
    duration: "1 год",
    details:
      `Участвовал в разработке и поддержке нескольких веб и мобильных приложений в рамках проекта Yonoton.
      Работал в кросс-технологичной Agile-команде среднего размера. В ходе работы обновил библиотеки в двух приложениях,
      разрабатывал новые функции, исправлял баги, проводил code review, наставлял младших разработчиков.
      Технологии: TypeScript, React, React-Native, Jest, Detox, REST API, Bitrise, Vercel, Git.`,
  },
  {
    id: 5,
    year: "2022",
    title: "Технический ассистент в Andersen Lab",
    duration: "6 месяцев",
    details:
      `Был назначен техническим ассистентом на проекте Yonoton. 
      В мои обязанности входило: проведение звонков с моим подопечным, консультации по рефакторингу компонентов,
      помощь в случае блокирующих проблем.`,
  },
  {
    id: 6,
    year: "2022",
    title: "Frontend-разработчик в Andersen Lab",
    duration: "2 года 3 месяца",
    details:
      `Был назначен JavaScript-разработчиком на проект Emilia.
      За время работы на проекте участвовал в разработке различных функций, наставлял новых членов команды, 
      участвовал в бета и продакшн релизах.
      Команда следовала принципам Test Driven Design и процессу тщательного code review.
      Используемые технологии: JavaScript, React, React Native, Jest, React-Native-Testing-Library, Postgres, GraphQL, CircleCI, Git.`,
  },
  {
    id: 7,
    year: "2025",
    title: "В поисках работы!",
    duration: "Настоящее время",
    details: "",
  }
]

