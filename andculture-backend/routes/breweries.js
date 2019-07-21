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
    brewery.brewery_type = req.body.brewery_type;
    brewery.street = req.body.street;
    brewery.city = req.body.city;
    brewery.state = req.body.state;
    brewery.postal_code = req.body.postal_code;
    brewery.longitude = req.body.longitude;
    brewery.latitude = req.body.latitude;
    brewery.phone = req.body.phone;
    brewery.website_url = req.body.website_url;

    brewery.save()
    .then(() => res.json("brewery updated"))
    .catch(err => res.status(400).json('Error: ' + err));
  })
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err))
    // res.send('breweriesAPI: Working');
});

router.post('/', function(req, res, next) {
  const _id = req.body.id;
  const name = req.body.name;
  const brewery_type = req.body.brewery_type;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const postal_code = req.body.postal_code;
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  const phone = req.body.phone;
  const website_url = req.body.website_url;

  const newBrewery = new Brewery({
    _id,
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    longitude,
    latitude,
    phone,
    website_url
  })

  newBrewery.save()
  .then(() => res.json("User added"))
  // .then(console.log)
  .catch(err => res.status(400).json("Error: " + err))
})


module.exports = router;
