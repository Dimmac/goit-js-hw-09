import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

function handleSubmit(event) {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  for (let i = 0; i <= amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, delay)
        .then(({ position, delay }) => {
          notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }),
        delay;
    });
    // delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

refs.form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log('це значення, введене в поле delay', event.currentTarget.elements.delay.value);
//   console.log('це значення, введене в поле step', event.currentTarget.elements.step.value);
//   console.log('це значення, введене в поле amount', event.currentTarget.elements.amount.value);
//   // const {
//   //   elements: { delay, step, amount },
//   // } = event.currentTarget;

//   const {
//     elements: { delay, step, amount },
//   } = event.currentTarget;
//   // console.log(elements);
//   console.log(
//     `значення ДІЛЕЙ: ${delay.value}, значення СТЕП: ${step.value}, значення ЕМАУНТ: ${amount.value}`,
//   );
// }
// console.log( event.currentTarget);
// console.log(refs.delay);
// console.log(refs.step);
// refs.delay.addEventListener('input', () => {
//   console.log(refs.delay);
// });

// refs.submit.addEventListener('click', () => {
//   function();
// });

// const promise = new Promise((resolve, reject) => {
//   const canFulFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulFill) {
//       resolve('Промис выполнился успешно, с результатом fulfilled');
//     }
//     reject('Промис виполнілся с ошібкой - отклонен, rejected');
//   }, 1000);
// });
// console.log(promise);

// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   },
// );
// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);
//     return 88;
//   })
//   .then(y => {
//     console.log(typeof y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виполнен в любом с лучае'));

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => console.log(error));
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Куку, єто Resolve');
//       }
//       reject('ITS A REJECT!!!');
//     }, 1000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
