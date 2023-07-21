const Flight = require("../model/flight")

async function newDestination(req, res) {
    const flight = await Flight.findById(req.params.id)
    flight.destinations.push(req.body)
    try {
        await flight.save()
    } catch(err){
        console.log(err)
    }
    res.redirect(`/flights/${flight.id}`);
  }
  
  module.exports = {
    newDestination, 
  }
  