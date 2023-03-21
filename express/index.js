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
    res.render('test.ejs', {prop1: 'Hello'});
});

app.listen(3000);