const express = require('express');

const parser = require('body-parser');
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.get('/', (req,res) => {
  res.redirect(301, 'https://discord.gg/f4Q4Se4HNP')
})
app.use(function(req, res, next) {
  res.redirect(301, 'https://discord.gg/f4Q4Se4HNP')
});

const listen = (s, u) => {
  app.get(`/${s}`, (req, res) => {
    res.redirect(301, 'https://discord.gg/f4Q4Se4HNP')
  })
};
app.listen(3000, () => {console.log('ready')});