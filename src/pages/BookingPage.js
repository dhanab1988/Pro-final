import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Booking data when coming back from Confirmation (Edit Reservation)
  const bookingData = location.state || null;

  const submitForm = (formData) => {
  if (typeof window.submitAPI === "function") {
    const success = window.submitAPI(formData);

    if (success) {
      // 1️⃣ Get existing bookings
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      // 2️⃣ Add new booking
      const updatedBookings = [...existingBookings, formData];

      // 3️⃣ Save back to localStorage
      localStorage.setItem(
        "bookings",
        JSON.stringify(updatedBookings)
      );

      // 4️⃣ Navigate to confirmation
      navigate("/confirmation", { state: formData });
    } else {
      alert("Submission failed.");
    }
  }
};


  return (
    <section className="booking-page">
      <div className="booking-content-wrapper">
        <div className="cta-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <h6>Find a Table for any occasion</h6>

          <div className="b-img">
            <img src="/Assets/restaurant.jpg" alt="Cozy indoor seating" />
            <img
              src="/Assets/restaurant chef B.jpg"
              alt="Outdoor patio seating"
            />
          </div>
        </div>

        <div className="booking-page-content">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            initialData={bookingData}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
