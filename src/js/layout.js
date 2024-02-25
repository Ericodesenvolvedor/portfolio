// container.innerHTML = project(image, title, description, website);

export function project(image, title, description, links) {
  return `
    <li>
        <img src=${image.src} alt=${image.alt} />
        <div class="text-wrapper">
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="actions">
            <button title="Abrir modal">Ver mais</button>
            <a href=${links.website} target="_blank">Website</a>
          </div>
        </div>
    </li>
  `
}

export function modal(search, database) {
  const [{ image, title, description, links, tech }] = database.filter(item => {
    return item.title === search;
  })

  const icons = tech.map(linguage => {
    return ` 
      <i class="ph ph-file-${linguage}"></i>
    `
  }).join("");

  return `
    <div class="container">
      <img src=${image.src} alt=${image.alt}>
      
      <div class="text-wrapper">
        <div class="header">
          <h3>${title}</h3>
          <div class="techs">
            ${icons}
          </div>
        </div>

        <p>${description}</p>
        
        <div class="links-wrapper">
          <a href=${links.website} target="_blank">
            <i class="ph ph-link"></i>
            Website
          </a>
          <a href=${links.repository} target="_blank">
            <i class="ph ph-link"></i>
            Repositorio
          </a>
        </div>
      </div>

      <button class="close" title="Fechar Modal">X</button>
    </div>`
}