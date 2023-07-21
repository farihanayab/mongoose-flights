const Ticket= require("../model/ticket");
const Flight= require("../model/flight");

async function create(req,res) {
    const ticket = new Ticket(req.body)
    ticket["flight"] = req.params.id
    try{
        await ticket.save()

    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

module.exports = {
    create,
  };