import { showDialog, showProjects, showNumberProjects, showNavigation, showSkills, } from "./show.js";

showProjects();
showNumberProjects();
showDialog();
showSkills();

document.querySelector('nav').addEventListener('click', (event) => showNavigation(event));