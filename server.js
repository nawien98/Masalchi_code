const express = require('express')
const mongoose = require('mongoose')
const app = express()

// change db name and set model attributes
mongoose.connect('mongodb://localhost/work_db')

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    res.render('index',{text: 'Welcome Masalchi group'})
  })

app.get('/vals',  (req, res) => {
  // fetch valuse from db according to request
  res.send(JSON.stringify({key:"vals"}));
})

app.listen(8080)