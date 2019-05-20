let resolvedPromise = Promise.resolve("Good response");
let rejectedPromise = Promise.reject(new Error("Rejected response"));

rejectedPromise.catch(error => console.log(error.message));
