const Flight = require("../model/flight");
const Ticket = require("../model/ticket");


async function show(req, res) {
    const flight  = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight:req.params.id})
    res.render("flights/show", {
    title: "Flight Details",
    flight, tickets
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight" });
}

async function index(req, res) {
    var flights= await Flight.find({})
  res.render("flights/index", {
    flights, 
    title: "All-Flights",
  });
}

async function create(req, res) {
  await Flight.create(req.body);

  res.redirect("/flights");
}

function deleteFlight(req, res) {
  Flight.deleteOne(req.params.id);

  res.redirect("/flights");
}

function edit(req, res) {
  const flight = Flight.getOne(req.params.id);
  res.render("flights/edit", {
    title: "Edit Flights",
    flight,
  });
}

function update(req, res) {
  req.body.done = !!req.body.done;
  Flight.update(req.params.id, req.body);
  res.redirect(`/flights/${req.params.id}`);
}


module.exports = {
  index,
  show,
  new: newFlight,
  create,
  delete: deleteFlight,
  edit,
  update,
};

