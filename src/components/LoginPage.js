import React, { useState } from "react";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged In ✔");
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
