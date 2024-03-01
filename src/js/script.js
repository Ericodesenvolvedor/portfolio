import callAction from "./call-action.js";
import { showDialog, showProjects, showNumberProjects, showNavigation, showSkills, } from "./show.js";

callAction();
showProjects();
showNumberProjects();
showDialog();
showSkills();

document.querySelector('nav').addEventListener('click', (event) => showNavigation(event));