const bookingModel = require("./Models/bookingModel");


class DbBookingMethods{
    addBookingData = async (data)=>{
        try {
        await bookingModel.insertOne(data);
        return ;
        } catch (error) {
            console.log(error)
        }
        

    }

}

module.exports = DbBookingMethods; 