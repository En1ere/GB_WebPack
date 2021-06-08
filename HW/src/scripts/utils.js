import { dateListener } from "./datecalc.js";
import { timerListener } from "./timer.js";

export function startListeners() {
    dateListener();
    timerListener();
    linksListener();
}

export const showMessage = text => `
<span style="color: red;">
    ${text}
</span>`;

export const hideMessage = el => { el.innerHTML = '' };

export const activeWindow = el => {
    const dateCalcLink = document.querySelector('.link__datecalc');
    const timerLink = document.querySelector('.link__timer');
    const dateCalcBlock = document.querySelector('.block__dates');
    const timerBlock = document.querySelector('.block__timer');

    if (el === dateCalcLink) {
        dateCalcBlock.classList.remove('hidden');
        dateCalcLink.classList.add('active');
        timerBlock.classList.add('hidden');
        timerLink.classList.remove('active');
    } else {
        timerBlock.classList.remove('hidden');
        timerLink.classList.add('active');
        dateCalcBlock.classList.add('hidden');
        dateCalcLink.classList.remove('active');
    }
}

export function linksListener() {
    const links = document.querySelectorAll('a');
    links.forEach(block => block.addEventListener('click', () => { activeWindow(block) }));
}