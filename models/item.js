const mongoose = require('mongoose')

// random itemScema, item structure att
const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
})

// item table in db 
module.exports = mongoose.model('Item', itemSchema)