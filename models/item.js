const mongoose = require('mongoose')

// random itemScema, item structure att
const itemSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  packageType: {
    type: String
  },
  packageName: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  speed: {
    type: Number
  },
  contractLength: {
    type: Number
  }
})

// item collection in db 
module.exports = mongoose.model('items', itemSchema)