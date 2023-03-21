const express = require('express');

const app = express();

function doWork(duration) {
  const start = Date.now();

  while (Date.now() - start < duration) {}
}

let run = true;
app.get('/', (req, res) => {
  if (run) {
    run = !run;
    doWork(5000);
  }

  res.send(`Hello there!! ${run}`);
});

app.listen(3000, () => {
  console.log('listening to the port!');
});
