const DbBookingMethods = require("../repository/DbBookingMethods")

class BookingServices{
    constructor(){
        this.dbBookingMethods = new DbBookingMethods() ;
    }
    addBookingDetails = async (data)=>{

       await this.dbBookingMethods.addBookingData(data)
       return ;
    }
}

module.exports = BookingServices