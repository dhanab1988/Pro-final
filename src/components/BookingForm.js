import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm, initialData }) {
  const today = new Date().toISOString().split("T")[0];

  const defaultData = {
    name: "",
    email: "",
    date: today,
    time: "",
    guests: "",
    occasion: "",
    seating: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData || defaultData);
  const [errors, setErrors] = useState({});

  /* Update available times when date changes */
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: formData.date });
  }, [formData.date, dispatch]);

  /* Reset time if unavailable */
  useEffect(() => {
    const allTimes = [...availableTimes.lunch, ...availableTimes.dinner];
    if (formData.time && !allTimes.some((t) => t.time === formData.time)) {
      setFormData((prev) => ({ ...prev, time: "" }));
    }
  }, [availableTimes, formData.time]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* Client-side validation */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests) newErrors.guests = "Guests required";
    if (!formData.seating) newErrors.seating = "Seating required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      submitForm(formData);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time">Select Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Time</option>

            {availableTimes.lunch.length > 0 && (
              <optgroup label="Lunch">
                {availableTimes.lunch.map((slot) => (
                  <option key={slot.time} value={slot.time}>
                    {slot.label}
                  </option>
                ))}
              </optgroup>
            )}

            {availableTimes.dinner.length > 0 && (
              <optgroup label="Dinner">
                {availableTimes.dinner.map((slot) => (
                  <option key={slot.time} value={slot.time}>
                    {slot.label}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        {/* Occasion */}
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Family Dinner">Family Dinner</option>
            <option value="Business Meeting">Business Meeting</option>
          </select>
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests">Number of Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            <option value="">Number of Guests</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        {/* Seating */}
        <fieldset>
          <legend>Seating Options</legend>

          <label htmlFor="indoor">
            <input
              id="indoor"
              type="radio"
              name="seating"
              value="Indoor"
              checked={formData.seating === "Indoor"}
              onChange={handleChange}
              required
            />
            Indoor
          </label>

          <label htmlFor="outdoor">
            <input
              id="outdoor"
              type="radio"
              name="seating"
              value="Outdoor"
              checked={formData.seating === "Outdoor"}
              onChange={handleChange}
            />
            Outdoor
          </label>

          {errors.seating && <span className="error">{errors.seating}</span>}
        </fieldset>

        {/* Message */}
        <div>
          <label htmlFor="message">Special Requests</label>
          <textarea
            id="message"
            name="message"
            placeholder="Special Requests (optional)"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          aria-label="On Click"
          style={{
            backgroundColor: hasErrors ? "#ccc" : "#f4ce14",
            cursor: hasErrors ? "not-allowed" : "pointer",
            color: hasErrors ? "#666" : "#000",
          }}
        >
          Reserve Table
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
