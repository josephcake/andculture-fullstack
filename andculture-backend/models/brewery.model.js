import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: String,
  breweryType: String,
  street: String,
  city: String,
  state:String,
  postal:String,
  longitude:Number,
  latitude:Number,
  phone:String,
  url:String
})
const Brewery = mongoose.model('Brewery', brewerySchema)
module.exports = Brewery
