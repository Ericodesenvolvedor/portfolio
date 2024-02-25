const DATABASE_PROJECTS = [
  {
    image: {
      src: "https://private-user-images.githubusercontent.com/100439353/304588929-211fc2c5-b5cc-4c4c-ba2a-c71bb94e235b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg4MzgzMTMsIm5iZiI6MTcwODgzODAxMywicGF0aCI6Ii8xMDA0MzkzNTMvMzA0NTg4OTI5LTIxMWZjMmM1LWI1Y2MtNGM0Yy1iYTJhLWM3MWJiOTRlMjM1Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyNVQwNTEzMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MmExODNiMmE1MWY4YThlYjE4MGVmYzc1M2UwMDM3NTcxMGZlYmQ2YzY0ZDY5MWM0ZWUzOTI5YzU0ODRiNjYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.YZltAnnfY0Qx6d74_8xFZN6Fjg0GTd_yJcxR5FD71zo",
      alt: "Visualização do site tech blog.",
    },
    title: "Tech Blog",
    description: "Um pequeno blog com noticias de tecnologia.",
    links: {
      website: "https://ericodesenvolvedor.github.io/tech-blog/",
      repository: "https://github.com/Ericodesenvolvedor/tech-blog"
    },
    tech: ["html", "css"]
  }, 

  {
    image: {
      src: "https://private-user-images.githubusercontent.com/100439353/303892899-6067e63a-2425-4cb4-8278-c87bf487a86b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg4Mzk0ODgsIm5iZiI6MTcwODgzOTE4OCwicGF0aCI6Ii8xMDA0MzkzNTMvMzAzODkyODk5LTYwNjdlNjNhLTI0MjUtNGNiNC04Mjc4LWM4N2JmNDg3YTg2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyNVQwNTMzMDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wM2VjYmVlZDU5ZDA4NjZjZWI3ZjY1MTI3YWQ0ZTc4YWE1Nzc1ODc4OGVjNmFlZWZiZmNiZDJlYTNiNjEyNjBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.d0DBa_T_CozAzYluR53d1Rm3k_nkjWdqKmaGGZ3r9bE",
      alt: "Visualização do site jordan shoes.",
    },
    title: "Jordan Shoes",
    description: "Um website para uma loja de tênis da marca Jordan.",
    links: {
      website: "https://ericodesenvolvedor.github.io/jordan-shoes/",
      repository: "https://github.com/Ericodesenvolvedor/jordan-shoes"
    },
    tech: ["html", "css"]
  }, 

  {
    image: {
      src: "https://private-user-images.githubusercontent.com/100439353/303367500-0cc97b3e-e020-458f-9817-646c693ac262.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg4Mzk2NjAsIm5iZiI6MTcwODgzOTM2MCwicGF0aCI6Ii8xMDA0MzkzNTMvMzAzMzY3NTAwLTBjYzk3YjNlLWUwMjAtNDU4Zi05ODE3LTY0NmM2OTNhYzI2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyNVQwNTM2MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZTc2NmEzZGQzZDc5ZjA1MjFlMGQzOTI1YmQ0ODFiZDkyMjFmNDMxODAzOTQwYjYxODJjMzdjMDE2YjZkOTQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.-PSEpHO0Xp1mAtQFsaWQI-5anqiMMagp7XU52L6jLDw",
      alt: "Visualização do site tech blog.",
    },
    title: "Blog",
    description: "Um blog simples com funcionalidade de buscar por postagens.",
    links: {
      website: "https://ericodesenvolvedor.github.io/blog/",
      repository: "https://github.com/Ericodesenvolvedor/blog"
    },
    tech: ["html", "css", "js"]
  } 
]

export default DATABASE_PROJECTS;