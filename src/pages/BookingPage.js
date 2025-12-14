import React from "react";
import BookingForm from "../components/BookingForm";


function BookingPage({ availableTimes, dispatch }) {
  const submitForm = (formData) => {
    if (typeof window.submitAPI === "function") {
      const success = window.submitAPI(formData);
      alert(success ? "Booking submitted!" : "Submission failed.");
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
            <img src="/Assets/restaurant chef B.jpg" alt="Outdoor patio seating" />
          </div>
        </div>

        <div className="booking-page-content">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
