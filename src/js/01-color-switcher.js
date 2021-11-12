const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleClick = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
};

const stopClick = () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
};

refs.startBtn.addEventListener('click', handleClick);
refs.stopBtn.addEventListener('click', stopClick);
