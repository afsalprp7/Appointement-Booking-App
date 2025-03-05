document
  .getElementById("booking-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
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

        
      } catch (error) {
        console.error(error);
        alert("something went wrong");
      }
    }
  });
