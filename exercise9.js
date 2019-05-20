function parsePromised(json) {
  return new Promise(function(resolve, reject) {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error.message);
    }
  });
}

parsePromised(process.argv[2])
  .then(console.log)
  .catch(console.log);
