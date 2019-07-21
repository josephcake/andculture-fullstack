import express from 'express';
import Brewery from '../models/brewery.model.js'
var router = express.Router();

router.get('/', function(req, res, next) {
  Brewery.find()
  .then(breweries => res.json(breweries))
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err));
    // res.send('breweriesAPI: Working');
});

router.get('/:id', function(req, res) {
  Brewery.findById(req.params.id)
  .then(brewery => res.json(brewery))
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err));
    // res.send('breweriesAPI: Working');
});
router.delete('/:id', function(req, res) {
  Brewery.findByIdAndDelete(req.params.id)
  .then(() => res.json('brewery deleted'))
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err));
    // res.send('breweriesAPI: Working');
});
router.post('/update/:id', function(req, res) {
  Brewery.findById(req.params.id)
  .then(brewery => {
    brewery.name = req.body.name;
    brewery.breweryType = req.body.breweryType;
    brewery.street = req.body.street;
    brewery.city = req.body.city;
    brewery.state = req.body.state;
    brewery.postal = req.body.postal;
    brewery.longitude = req.body.longitude;
    brewery.latitude = req.body.latitude;
    brewery.phone = req.body.phone;
    brewery.url = req.body.url;

    brewery.save()
    .then(() => res.json("brewery updated"))
    .catch(err => res.status(400).json('Error: ' + err));
  })
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err))
    // res.send('breweriesAPI: Working');
});

router.post('/post', function(req, res, next) {
  const name = req.body.name;
  const breweryType = req.body.breweryType;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const postal = req.body.postal;
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const phone = req.body.phone;
  const url = req.body.url;

  const newBrewery = new Brewery({
    name,
    breweryType,
    street,
    city,
    state,
    postal,
    longitude,
    latitude,
    phone,
    url
  })

  newBrewery.save()
  .then(() => res.json("User added"))
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err))
})


module.exports = router;
