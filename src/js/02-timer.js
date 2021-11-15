import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  datetimePicker: document.querySelector('input[type="text"]'),
  dataStartBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let STEP = 1000;
let intervalId = null;
let selectedTime = null;
refs.dataStartBtn.disabled = true;

refs.dataStartBtn.addEventListener('click', () => {
  startTimer();
});

function startTimer() {
  refs.datetimePicker.disabled = true;
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;
    const time = convertMs(deltaTime);
    updateTime(time);
    if (deltaTime < STEP) {
      clearInterval(intervalId);
    }
    updateTime(time);
  }, STEP);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.dataStartBtn.disabled = false;
      selectedTime = selectedDates[0].getTime();
    }
  },
};

const calendar = flatpickr(refs.datetimePicker, options);

function updateTime({ days, hours, minutes, seconds }) {
  refs.dataDays.innerText = days;
  refs.dataHours.innerText = hours;
  refs.dataMinutes.innerText = minutes;
  refs.dataSeconds.innerText = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
