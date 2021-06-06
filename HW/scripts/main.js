import { handleCalcDates } from "./datecalc.js";
import { timerStart } from "./timer.js";
import { activeWindow } from "./utils.js";


const dateCalcForm = document.getElementById("datecalc");
dateCalcForm.addEventListener("submit", handleCalcDates);

const buttonRun = document.getElementById("timerStartBtn");
buttonRun.addEventListener('click', function () { timerStart() });

const links = document.querySelectorAll('a');
links.forEach(block => block.addEventListener('click', ()=>{activeWindow(block)})); 