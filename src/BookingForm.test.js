import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";


const availableTimes = {
  lunch: [{ time: "12:00", label: "12:00 PM" }],
  dinner: [{ time: "18:00", label: "6:00 PM" }],
};

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe("BookingForm", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  /* ---------------- STEP 1: HTML5 VALIDATION ---------------- */

  test("HTML5 validation attributes are applied", () => {
    expect(screen.getByPlaceholderText("Full Name")).toBeRequired();
    expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "email");
    expect(screen.getByPlaceholderText("Email")).toBeRequired();
    expect(screen.getByDisplayValue("Select Time")).toBeRequired();
    expect(screen.getByDisplayValue("Number of Guests")).toBeRequired();
    expect(screen.getByLabelText("Indoor")).toBeRequired();
  });

  /* ---------------- STEP 2: JS VALIDATION ---------------- */

  test("shows errors when submitting empty form", () => {
    fireEvent.click(screen.getByText("Reserve Table"));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Time is required")).toBeInTheDocument();
    expect(screen.getByText("Guests required")).toBeInTheDocument();
    expect(screen.getByText("Seating required")).toBeInTheDocument();
  });

  test("submits correctly when all required fields are filled", () => {
    fireEvent.change(screen.getByPlaceholderText("Full Name"), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByDisplayValue("Select Time"), {
      target: { value: "12:00" },
    });

    fireEvent.change(screen.getByDisplayValue("Number of Guests"), {
      target: { value: "2" },
    });

    fireEvent.click(screen.getByLabelText("Indoor"));

    fireEvent.click(screen.getByText("Reserve Table"));

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "John Doe",
        email: "john@example.com",
        guests: "2",
        seating: "Indoor",
        time: "12:00",
      })
    );
  });
});
