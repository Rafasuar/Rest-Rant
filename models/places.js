const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisine: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'It cant be that old can it?'],
    max: [new Date().getFullYear(),'Are you a time traveler or something?']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
module.exports = mongoose.model('Place', placeSchema)
