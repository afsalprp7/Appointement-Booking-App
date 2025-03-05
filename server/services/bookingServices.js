const DbBookingMethods = require("../repository/DbBookingMethods");
const bookingModel = require("../repository/Models/bookingModel");

class BookingServices {
  constructor() {
    this.dbBookingMethods = new DbBookingMethods();
  }

  addBookingDetails = async (data) => {
    try {
      const bookingExists = await bookingModel.findOne({
        name: data.name,
        phone: data.phone,
        date: data.date,
      });
      if (bookingExists) {
        return "Already have an appointment";
      } else {
        return await this.dbBookingMethods.addBookingData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getAvailbaleSlots = async (date) => {
    try {
      const slots = await bookingModel.find(
        { date: date },
        { timeSlot: 1, _id: 0 }
      );
      return slots;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BookingServices;
