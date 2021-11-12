function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const promise = new Promise((resolve, reject) => {
  const canFulFill = Math.random() > 0.5;
  if (canFulFill) {
  }
});
console.log(promise);
