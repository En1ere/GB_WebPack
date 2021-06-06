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