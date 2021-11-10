// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  dataStartBtn: document.querySelector('.data-start'),
  dataDays: document.querySelector('.data-days'),
  dataHours: document.querySelector('.data-hours'),
  dataMinutes: document.querySelector('.data-minutes'),
  dataSeconds: document.querySelector('.data-seconds'),
  // startBtn: document.querySelector('button[data-action-start]'),
  // stopBtn: document.querySelector('button[data-action-stop]'),
  // clockFace: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.convertMs(deltaTime);
      this.onTick(time);
      //   updateClockFace(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.convertMs(0);
    this.onTick(time);
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.pad(Math.floor(ms / day));
    // Remaining hours
    const hours = this.pad(Math.floor(ms / day));
    // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});
// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       //   console.log('start -> currentTime', currentTime);
//       //   console.log('start -> startTime', startTime);
//       //   console.log(currentTime - startTime);
//       //   const deltaTime = currentTime - startTime;
//       const deltaTime = currentTime - startTime;
//       //   const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       const time = convertMs(deltaTime);
//       //   console.log(timeComponents);
//       //   console.log(`${days}::${hours}::${minutes}::${seconds}`);
//       updateClockFace(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };
// timer.start();

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.clockFace.textContent = `${days}::${hours}::${minutes}::${seconds}`;
}
refs.startBtn.addEventListener('click', () => {
  timer.start();
});
refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});
