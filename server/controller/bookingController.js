const BookingServices = require("../services/bookingServices");

class BookingController{
    constructor(){
        this.bookingService = new BookingServices() ;
    }
}