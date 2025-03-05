const bookingModel = require("./Models/bookingModel");

class DbBookingMethods {
  addBookingData = async (data) => {
    try {
      return await bookingModel.insertOne(data);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = DbBookingMethods;
