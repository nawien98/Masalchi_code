const express = require('express')
const mongoose = require('mongoose')
const Item = require('./models/item')
const app = express()

// change db name and set model attributes
mongoose.connect('mongodb://localhost/work_db')

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    res.render('index',{text: 'Welcome Masalchi group'})
  })

app.get('/all', async (req, res) => {
  const itms = await Item.find();
  res.send(itms);
})

app.post('/add', async (req, res) => {
  const itm = new Item(req.body)
  try{
    await itm.save()
  }catch(e){
    res.body(e)
  }
})

app.listen(8080)