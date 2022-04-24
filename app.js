const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('hello');
})

app.get('/user', (req, res) => {
  res.json([
    {
      name: "tkc",
      age: 22
    },
    {
      name: "tkh",
      age: 18
    },
    {
      name: "lnc",
      age: 51
    },
    {
      name: "tks",
      age: 56
    }
  ]);
})

app.listen(process.env.PORT || 8000, () => {
  console.log('listen');
})