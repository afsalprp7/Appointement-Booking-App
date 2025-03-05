const router = require("express").Router();
const BookingController = require("../controller/bookingController");
const bookingController = new BookingController();

router.get("/", bookingController.getBookingInterface);
router.post("/book", bookingController.addBookingData);
router.get("/getSlots/:date", bookingController.getAvailableSlots);

module.exports = router;
