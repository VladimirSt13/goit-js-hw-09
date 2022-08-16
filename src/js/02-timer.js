import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      console.log('Please choose date in future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

console.log('Hello');

const refs = {
  inputDate: document.querySelector('input'),
  startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.disabled = true;

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', clickOnBtnStart);

function clickOnBtnStart() {
  console.log(refs.inputDate.value);
}
