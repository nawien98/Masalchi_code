const express = require('express')
const mongoose = require('mongoose')
const app = express()

// change db name and set model attributes
mongoose.connect('mongodb://localhost/work_db')

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    res.render('index',{text: 'Welcome Masalchi group'})
  })

app.listen(8080)