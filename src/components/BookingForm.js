import React, { useState, useEffect } from "react";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm,
  initialData,
}) {
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

  /* Pre-fill form when editing reservation */
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  /* Update available times when date changes */
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: formData.date });
  }, [formData.date, dispatch]);

  /* Reset time if unavailable */
  useEffect(() => {
    const allTimes = [
      ...availableTimes.lunch,
      ...availableTimes.dinner,
    ];

    if (
      formData.time &&
      !allTimes.some((t) => t.time === formData.time)
    ) {
      setFormData((prev) => ({ ...prev, time: "" }));
    }
  }, [availableTimes, formData.time]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table Reservation Form">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        min={today}
        onChange={handleChange}
        required
      />

      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select Time</option>

        {availableTimes.lunch.length > 0 && (
          <optgroup label="🍽️ Lunch">
            {availableTimes.lunch.map((slot) => (
              <option key={slot.time} value={slot.time}>
                {slot.label}
              </option>
            ))}
          </optgroup>
        )}

        {availableTimes.dinner.length > 0 && (
          <optgroup label="🍕 Dinner">
            {availableTimes.dinner.map((slot) => (
              <option key={slot.time} value={slot.time}>
                {slot.label}
              </option>
            ))}
          </optgroup>
        )}
      </select>

      <select
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
        <option value="Family Dinner">Family Dinner</option>
        <option value="Business Meeting">Business Meeting</option>
      </select>

      <select
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

      <fieldset className="seating-options full-width">
        <legend>Seating Options</legend>

        <label>
          <input
            type="radio"
            name="seating"
            value="Indoor"
            checked={formData.seating === "Indoor"}
            onChange={handleChange}
            required
          />
          Indoor
        </label>

        <label>
          <input
            type="radio"
            name="seating"
            value="Outdoor"
            checked={formData.seating === "Outdoor"}
            onChange={handleChange}
          />
          Outdoor
        </label>
      </fieldset>

      <textarea
        name="message"
        className="full-width"
        placeholder="Special Requests (optional)"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Reserve Table</button>
    </form>
  );
}

export default BookingForm;
