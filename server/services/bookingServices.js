const DbBookingMethods = require("../repository/DbBookingMethods")

class BookingServices{
    constructor(){
        this.dbBookingMethods = new DbBookingMethods() ;
    }
    bookSlot = ()=>{

    }
}

module.exports = BookingServices