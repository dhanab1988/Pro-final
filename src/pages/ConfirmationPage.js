import { useLocation, useNavigate, Link } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ Use router state first, fallback to localStorage
  const bookingData =
    state ||
    JSON.parse(localStorage.getItem("bookings"))?.slice(-1)[0];

  // ✅ Correct condition
  if (!bookingData) {
    return (
      <section className="confirmation-page">
        <h2>No booking data found</h2>
        <button onClick={() => navigate("/booking")}>
          Make a Reservation
        </button>
      </section>
    );
  }

  // ✅ Destructure from bookingData (NOT state)
  const {
    name,
    email,
    date,
    time,
    guests,
    occasion,
    seating,
    message,
  } = bookingData;

  return (
    <section className="confirmation-page">
      <h1>Booking Confirmed ✔</h1>
      <p>Thank you for reserving a table at Little Lemon!</p>

      <table className="confirmation-table">
        <tbody>
          <tr>
            <td className="label">Name</td>
            <td className="value">{name}</td>
          </tr>
          <tr>
            <td className="label">Email</td>
            <td className="value">{email}</td>
          </tr>
          <tr>
            <td className="label">Date</td>
            <td className="value">{date}</td>
          </tr>
          <tr>
            <td className="label">Time</td>
            <td className="value">{time}</td>
          </tr>
          <tr>
            <td className="label">Guests</td>
            <td className="value">{guests}</td>
          </tr>
          <tr>
            <td className="label">Occasion</td>
            <td className="value">{occasion}</td>
          </tr>
          <tr>
            <td className="label">Seating</td>
            <td className="value">{seating}</td>
          </tr>
          {message && (
            <tr>
              <td className="label">Special Requests</td>
              <td className="value">{message}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 🔙 Navigation Actions */}
      <div className="confirmation-actions">
        <button onClick={() => navigate("/booking", { state: bookingData })}>
          Edit Reservation
        </button>

        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmationPage;
