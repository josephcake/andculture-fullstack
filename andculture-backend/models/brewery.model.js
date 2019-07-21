import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  _id:Number,
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state:String,
  postal_code:String,
  longitude:String,
  latitude:String,
  phone:String,
  website_url:String
})
const Brewery = mongoose.model('Brewery', brewerySchema)
module.exports = Brewery
