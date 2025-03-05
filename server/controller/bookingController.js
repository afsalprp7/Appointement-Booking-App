const BookingServices = require("../services/bookingServices");

class BookingController {
  constructor() {
    this.bookingService = new BookingServices();
  }

  getBookingInterface = (req, res) => {
    try {
      res.render("bookingInterface", { title: "Booking Appointment" });
    } catch (error) {
      console.log(error);
    }
  };

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

  getAvailableSlots = async(req,res) => {
    try {
      const availableSlots = await this.bookingService.getAvailbaleSlots();
      res.status(200).json(availableSlots);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = BookingController;
