const sleep = ms => new Promise(r => setTimeout(r, ms));

async function sayMessageInOneSecond(message) {
  await sleep(300);
  console.log(message);
}

sayMessageInOneSecond("TIMED OUT!");
