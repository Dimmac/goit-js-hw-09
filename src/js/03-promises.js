function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const refs = {
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),
  submit: document.querySelector('.submit'),
};
console.log(refs.delay);

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
