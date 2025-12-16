import { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Chicago from "./components/Chicago";
import OrderOnline from "./components/OrderOnline";
import LoginPage from "./components/LoginPage";
import MenuPage from "./pages/MenuPage";
import { categorizeTimes } from "./utils";
import ConfirmationPage from "./pages/ConfirmationPage";
import CheckoutConfirmationPage from "./pages/CheckoutConfirmationPage";



/* ---------------- Cache ---------------- */
const timesCache = {}; // Cache times per date

/* ---------------- Reducer ---------------- */
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    const date = action.date;

    if (!timesCache[date] && typeof window.fetchAPI === "function") {
      timesCache[date] = window.fetchAPI(date);
    }

    const timesArray = timesCache[date] || [];

    const lunch = [];
    const dinner = [];

    timesArray.forEach((time) => {
      const [hourStr, minute] = time.split(":");
      const hour = parseInt(hourStr, 10);

      const label = `${hour > 12 ? hour - 12 : hour}:${minute} ${
        hour >= 12 ? "PM" : "AM"
      }`;

      const slot = { time, label, available: true };

      if (hour >= 12 && hour < 18) lunch.push(slot);
      else if (hour >= 18) dinner.push(slot);
    });

    return { lunch, dinner };
  }

  return state;
}

/* ---------------- Initializer ---------------- */
export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];

  if (typeof window.fetchAPI === "function") {
    if (!timesCache[today]) {
      timesCache[today] = window.fetchAPI(today);
    }
    return categorizeTimes(timesCache[today]);
  }

  return { lunch: [], dinner: [] };
}

/* ---------------- Main ---------------- */
function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    // Ensure today's times are loaded
    const interval = setInterval(() => {
      if (typeof window.fetchAPI === "function") {
        dispatch({ type: "UPDATE_TIMES", date: today });
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        }
      />
      <Route path="/about" element={<Chicago />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
<Route path="/checkout-confirmation" element={<CheckoutConfirmationPage />} />

    </Routes>
  );
}

export default Main;
