import React from "react";

function ConfirmationPage({ bookingDetails }) {
  return (
    <section className="confirmation-page">
      <h1>Booking Confirmed ✔</h1>
      <p>Thank you for reserving a table at Little Lemon!</p>

      {bookingDetails && (
        <div className="confirmation-box">
          <p><strong>Name:</strong> {bookingDetails.name}</p>
          <p><strong>Date:</strong> {bookingDetails.date}</p>
          <p><strong>Time:</strong> {bookingDetails.time}</p>
          <p><strong>Guests:</strong> {bookingDetails.guests}</p>
        </div>
      )}
    </section>
  );
}

export default ConfirmationPage;
