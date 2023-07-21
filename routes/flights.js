const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flight');
const departure = require('../controllers/departure');
const ticket = require('../controllers/ticket');
// All actual paths start with "/flights"

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id
router.get('/:id', flightsCtrl.show);
// GET /flights/:id/edit 
router.get('/:id/edit', flightsCtrl.edit);
// POST /flights
router.post('/', flightsCtrl.create);
// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete);
// PUT /flights/:id
router.put('/:id', flightsCtrl.update);

 router.post('/:id', departure.newDestination);

router.post('/:id/new', ticket.create);

module.exports = router;