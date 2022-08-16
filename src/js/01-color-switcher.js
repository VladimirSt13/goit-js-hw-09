const DELAY = 1000;
let intervalId = null;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', startToChangingColor);
refs.stopBtn.addEventListener('click', stopToChangingColor);

refs.stopBtn.disabled = true;

function startToChangingColor() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function stopToChangingColor() {
  clearInterval(intervalId);

  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
