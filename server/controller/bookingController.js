const BookingServices = require("../services/bookingServices");

class BookingController {
  constructor() {
    this.bookingService = new BookingServices();
  }
  //render the page
  getBookingInterface = (req, res) => {
    try {
      res.render("bookingInterface", { title: "Booking Appointment" });
    } catch (error) {
      console.log(error);
    }
  };

  //adding the data and sending the response
  addBookingData = async (req, res) => {
    try {
      const data = req.body;
      const result = await this.bookingService.addBookingDetails(data);
      res
        .status(200)
        .json(
          typeof result === "object" ? "Appointment added successfully" : result
        );
    } catch (error) {
      console.log(error);
    }
  };

  //giving available slots
  getAvailableSlots = async (req, res) => {
    try {
      const date = req.params.date;
      const availableSlots = await this.bookingService.getAvailbaleSlots(date);
      res.status(200).json(availableSlots);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = BookingController;
