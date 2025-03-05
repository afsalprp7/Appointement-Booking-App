document
  .getElementById("booking-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dateInput = document.getElementById("date").value;
    const date = new Date(dateInput).toISOString().split("T")[0];
    const timeSlot = document.getElementById("timeSlot").value;
    if (!name || !phone || !date || !timeSlot) {
      alert("Please fill all fields");
      return;
    } else {
      const bookingData = { name, phone, date, timeSlot };
      try {
        const response = await fetch("/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });
        const result = await response.json();
        console.log(result);
        if (response.ok) {
          alert(result);
        }
      } catch (error) {
        console.error(error);
        alert("something went wrong");
      }
    }
  });

//fetching booked slots
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const timeSlotSelect = document.getElementById("timeSlot");

  // Disable past dates
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  // Fetch slots when the user selects a date
  dateInput.addEventListener("change", async function () {
    const selectedDate = this.value;
    if (!selectedDate) return; // Do nothing if no date is selected

    try {
      // Fetch booked slots from the server
      const response = await fetch(`/getSlots/${selectedDate}`);
      const bookedSlots = await response.json();

      // Define all available slots
      const allSlots = [
        "09:00 - 09:30",
        "09:30 - 10:00",
        "10:00 - 10:30",
        "10:30 - 11:00",
        "11:30 - 12:00",
        "12:30 - 01:00",
        "02:00 - 02:30",
        "02:30 - 03:00",
        "03:30 - 04:00",
        "04:00 - 04:30",
        "04:30 - 05:00",
      ];

      // Extract booked time slots
      const bookedTimes = bookedSlots.map((slot) => slot.timeSlot);

      // Filter available slots
      const availableSlots = allSlots.filter(
        (slot) => !bookedTimes.includes(slot)
      );

      // Populate the dropdown
      timeSlotSelect.innerHTML = availableSlots.length
        ? availableSlots
            .map((slot) => `<option value="${slot}">${slot}</option>`)
            .join("")
        : "<option>No slots available</option>";
    } catch (error) {
      console.error("Error fetching slots:", error);
      timeSlotSelect.innerHTML = "<option>Error loading slots</option>";
    }
  });
});
