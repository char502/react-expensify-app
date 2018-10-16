const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Pleco",
    //   age: 2
    // }); // passing an object into resolve, can then access these down below on 'data'
    //resolve("This is my resolved data");
    // resolve("This is my other resolved data"); // this will get ignored
    reject("Something went wrong!");
  }, 1500);
});

console.log("before");

// then can actually take 2 args (2 functions) - and can use this in lieu of catch

promise
  .then(data => {
    // .then is registering a callback. That callback is going to fire, when and if the promise resolves
    console.log("1", data);
  })
  .catch(error => {
    // can be called anything like (not just error)
    console.log("error: ", error); // from the reject call
  }); // catch is similar to then, is called with a single function (which fires when the promise rejects)

console.log("after");

// note with promises - a pro,ise can either be resolved or rejected
// You can't resolve AND reject a promise
// and you can only resolve and reject a single time (once resolved or rejected it can never be resolved or rejected again)

// can only pass a single argument to resolve or reject

// if need to resolve more than a single piece of information, will need to resolve an object

// then can actually take 2 args (2 functions) - and can use this in lieu of catch
promise.then(
  data => {
    // .then is registering a callback. That callback is going to fire, when and if the promise resolves (can be a bit more confusing than the explicit catch method)
    console.log("1", data);
  },
  error => {
    // passing a second argument into then (which will be treated as your catch handler)
    console.log("error: ", error);
  }
);
