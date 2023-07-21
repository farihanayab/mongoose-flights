const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
        type: String,
        require: true,
        enum: ['AUS','DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {type: Date}
});
const flight = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    airport: {
        type: String,
        enum: ['AUS','DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        required: true, 
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return Date.setFullyear(Date.getFullYear() +1)
    },
},
destinations:[destinationSchema]

});

module.exports = mongoose.model('Flight', flight)
