import DATABASE_PROJECTS from "./database_projects.js";
import { project, modal } from "./layout.js";

export function showProjects() {
  const container = document.querySelector("main ul");

  DATABASE_PROJECTS.forEach(({image, title, description, links}) => {
    container.innerHTML += project(image, title, description, links); 
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