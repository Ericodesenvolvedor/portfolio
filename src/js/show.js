import DATABASE_PROJECTS from "./database_projects.js";
import { DATABASE_SKILLS } from "./database_skills.js";
import { project, modal, skills } from "./layout.js";
import styles from "./styles.js";

export function showProjects() {
  const container = document.querySelector("main .projects");

  if(container === null) {
    return;
  }

  DATABASE_PROJECTS.forEach(({image, title, description, links}) => {
    container.innerHTML += project(image, title, description, links); 
  })
}

export function showSkills() {
  const container = document.querySelector("main .skills");

  if(container === null) {
    return;
  }

  DATABASE_SKILLS.forEach(({icon, title, time}) => {
    container.innerHTML += skills(icon, title, time); 
  })
}

export function showDialog() {
  const dialogOpenButton = document.querySelectorAll(".actions button");
  const dialog = document.querySelector("dialog");

  dialogOpenButton.forEach(button => 
    button.addEventListener("click", (event) => {
      const textWrapper = event.target.closest('.actions').parentElement;
      const title = textWrapper.querySelector('h3').innerText;
      dialog.showModal();
      dialog.innerHTML = modal(title, DATABASE_PROJECTS);
  
      dialog.querySelector('.close').addEventListener("click", () => {
        dialog.close();
        dialog.innerHTML = "";
      })
    })  
  )
}

export function showNumberProjects() {
  const projects = document.querySelector('.projects');
  
  if (projects === null) {
    return;
  }

  const text = document.querySelector('.number-projects');
  text.textContent = projects.childElementCount;
}

export function showNavigation(event) {
  const clickedElement = event.target;
  const clickedElementText = clickedElement.textContent;
  const projectsContainer = document.querySelector('.projects');
  const skillsContainer = document.querySelector('.skills');
  const [projectButton, skillsButton] = document.querySelectorAll("nav button");
  
  if(clickedElementText === "Projetos") {
    styles(projectsContainer, "display", "grid");
    styles(skillsContainer, "display", "none");
    styles(projectButton, "backgroundColor", "#0C151D");
    styles(skillsButton, "backgroundColor", "transparent");
  }
  
  if(clickedElementText === "Habilidades") {
    styles(skillsContainer, "display", "grid");
    styles(projectsContainer, "display", "none");
    styles(skillsButton, "backgroundColor", "#0C151D");
    styles(projectButton, "backgroundColor", "transparent");
  }
}