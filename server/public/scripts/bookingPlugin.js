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
window.onload = async () => {
  try {
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

    // Fetch booked slots from the server
    const response = await fetch("/getSlots");
    const bookedSlots = await response.json();

    // Extract booked time slots from the response
    const bookedTimes = bookedSlots.map((slot) => slot.timeSlot);

    // Filter available slots
    const availableSlots = allSlots.filter(
      (slot) => !bookedTimes.includes(slot)
    );

    // Populate the  dropdown
    const selectTag = document.getElementById("timeSlot");
    selectTag.innerHTML = availableSlots
      .map((slot) => `<option value="${slot}">${slot}</option>`)
      .join("");
  } catch (error) {
    console.error("Error fetching slots:", error);
  }
};
