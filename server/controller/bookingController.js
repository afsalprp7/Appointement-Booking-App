const BookingServices = require("../services/bookingServices");

class BookingController{
    constructor(){
        this.bookingService = new BookingServices() ;
    }

    getBookingInterface = (req,res)=>{
        try {
            res.render("bookingInterface",{title : 'Booking Appointment'})
        } catch (error) {
            console.log(error)
        }
    }

    addBookingData = async(req,res)=>{
        try {
            const data = req.body ;
            await this.bookingService.addBookingDetails(data);
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BookingController