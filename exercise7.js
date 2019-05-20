first()
  .then(response => {
    return second(response);
  })
  .then(console.log);
