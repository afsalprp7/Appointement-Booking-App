const mongoose = require('mongoose') ;

const bookingSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true
    },

    phone :{
        type : String,
        require : true
    },
    date : {
        tyep : Date,
        require : true
    },
    timeSlot :{
        type : String,
        required : true
    }
});

const bookingModel  = new mongoose.model('bookings',bookingSchema);

module.exports = bookingModel ;