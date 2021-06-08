import { showMessage, hideMessage } from "./utils.js";
import timerAlarm from '../assets/alarm.mp3'

const timerInput = document.getElementById("time");
const timerText = document.querySelector('#timerInfo')
const buttonStop = document.getElementById("timerStopBtn");
const timerShow = document.getElementById("timer");

export function timerStart() {

    if (!(+timerInput.value.match(/^[0-9]+/g))) {
        timerText.innerHTML = showMessage("Введите время!");
    } else {
        let timeSeconds = +timerInput.value;
        hideMessage(timerText);
        if (!timeSeconds) {
            timerText.innerHTML = showMessage("Введите время!");
        } else {
            const timer = setInterval(function () {
                let audio = new Audio(timerAlarm);
                audio.autoplay = false;
                audio.loop = false;
                let strTimer = '';
                let timeMinutes = timeSeconds / 60 % 60;
                let timeHour = timeMinutes / 60 / 60 % 60;
                --timeSeconds;
                if (timeSeconds <= 0) {
                    strTimer = `${Math.trunc(timeHour)}:${Math.trunc(timeMinutes)}:${timeSeconds}`;
                    timerShow.innerHTML = strTimer;
                    clearInterval(timer);
                    hideMessage(timerText);
                    timerText.innerHTML = showMessage("Время закончилось!");
                    audio.play();
                    buttonStop.addEventListener('click', () => { audio.pause() })
                } else {
                    strTimer = `${Math.trunc(timeHour)}:${Math.trunc(timeMinutes)}:${timeSeconds}`;
                    timerShow.innerHTML = strTimer;
                }
            }, 1000)
            buttonStop.addEventListener('click', () => { clearInterval(timer) })
        }
    }
}

export function timerListener() {
    const buttonRun = document.getElementById("timerStartBtn");
    buttonRun.addEventListener('click', function () { timerStart() });
}