function attachTitle(string) {
  return `DR. ${string}`;
}

new Promise((resolver, reject) => resolver("MANHATTAN"))
  .then(attachTitle)
  .then(console.log);
