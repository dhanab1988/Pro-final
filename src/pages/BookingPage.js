import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookingForm from "../components/BookingForm";


function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || null;

  const submitForm = async (formData) => {
    if (typeof window.submitAPI === "function") {
      try {
        const success = await window.submitAPI(formData);

        if (success) {
          const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];
          const updatedBookings = [...existingBookings, formData];
          localStorage.setItem("bookings", JSON.stringify(updatedBookings));
          navigate("/confirmation", { state: formData });
        } else {
          alert("Submission failed.");
        }
      } catch (error) {
        console.error(error);
        alert("Submission failed.");
      }
    }
  };

  return (
    <section className="booking-page">
      <div className="booking-content-wrapper">
        {/* Left side: Images and headings */}
        <div className="cta-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <h6>Find a Table for any occasion</h6>
          <div className="b-img">
            <img
              src={process.env.PUBLIC_URL + "/Assets/restaurant.jpg"}
              alt="Cozy indoor seating"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/restaurant chef B.jpg"}
              alt="Outdoor patio seating"
            />
          </div>
        </div>

        {/* Right side: Booking Form */}
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
