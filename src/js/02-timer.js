import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = selectedDates[0];
    checkIsValidDate(date);
  },
  onOpen() {
    clearInterval(intervalId);
    onStarted = false;
    refs.startBtn.disabled = true;
    updateTimer(0);
  },
};

const refs = {
  inputTime: document.querySelector('input'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('.timer [data-days]'),
  hours: document.querySelector('.timer [data-hours]'),
  minutes: document.querySelector('.timer [data-minutes]'),
  seconds: document.querySelector('.timer [data-seconds]'),
};
const currentTime = new Date();
const DELAY = 1000;
let intervalId = null;
let onStarted = false;

refs.startBtn.disabled = true;

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', clickOnBtnStart);

function clickOnBtnStart() {
  if (!onStarted) {
    onStarted = true;
    // updateTimer(countDelay(date, currentTime));
    startTimer();
    return;
  }
  Notify.failure('Timer working');
}

function startTimer() {
  intervalId = setInterval(() => {
    const delay = countDelay(date, new Date());
    updateTimer(delay);
    if (delay < 1000) {
      clearInterval(intervalId);
      onStarted = false;
      return;
    }
  }, DELAY);
}

function checkIsValidDate(date) {
  if (date.getTime() > currentTime.getTime()) {
    refs.startBtn.disabled = false;
    Notify.success('You choose a correct date');
    return;
  }
  Notify.failure('Please choose a date in future');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function countDelay(inputTime, currentTime) {
  return inputTime.getTime() - currentTime.getTime();
}

function updateTimer(currentDelay) {
  const { days, hours, minutes, seconds } = convertMs(currentDelay);
  refs.days.textContent = addSecondDidgit(days);
  refs.hours.textContent = addSecondDidgit(hours);
  refs.minutes.textContent = addSecondDidgit(minutes);
  refs.seconds.textContent = addSecondDidgit(seconds);
}

function addSecondDidgit(value) {
  return String(value).padStart(2, '0');
}
