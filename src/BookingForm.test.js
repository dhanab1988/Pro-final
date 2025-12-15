import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const mockAvailableTimes = {
  lunch: [
    { time: "12:00", label: "12:00 PM", available: true },
    { time: "12:30", label: "12:30 PM", available: true },
  ],
  dinner: [
    { time: "18:00", label: "6:00 PM", available: true },
    { time: "18:30", label: "6:30 PM", available: true },
  ],
};

describe("BookingForm component", () => {
  test("renders the Reserve Table button", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const reserveButton = screen.getByText("Reserve Table");
    expect(reserveButton).toBeInTheDocument();
  });

  test("renders Full Name input field", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const nameInput = screen.getByPlaceholderText("Full Name");
    expect(nameInput).toBeInTheDocument();
  });

  test("renders Reservation Date input", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const today = new Date().toISOString().split("T")[0];
    const dateInput = screen.getByDisplayValue(today);
    expect(dateInput).toBeInTheDocument();
  });
});
