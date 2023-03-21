const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/test', (req, res) => {
    res.redirect('/');
});

app.get('/goo', (req, res) => {
    res.redirect('https://XXXXX-XXXXXXX-XXXXXXX.com');
});

app.get('/render', (req, res) => {
    res.render('test.ejs', {prop1: {d1: 1, d2: 3, d3: 4, d5: 10}});
});

app.listen(3000);