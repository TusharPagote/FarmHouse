import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/register.css";

export default function AdminLogin() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log(enteredEmail, enteredPassword);

    // Check your condition here
    if (
      enteredEmail === "admin@example.com" &&
      enteredPassword === "password"
    ) {
      // Navigate to the signup page if the condition is met
      navigate("/admin");
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-main">
            <form className="form-login" onSubmit={handleSubmit}>
              <h2>Admin Login</h2>
              <div className="control-row">
                <div className="control no-margin">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" ref={email} />
                  <div className="control-error">
                    {emailIsInvalid && (
                      <p>Please enter a valid email address</p>
                    )}
                  </div>
                </div>

                <div className="control no-margin">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    ref={password}
                  />
                </div>
              </div>

              <p className="form-actions" style={{ width: "100%" }}>
                <button
                  type="submit"
                  className="form-button"
                  style={{ width: "100%", padding: "1.2rem" }}
                >
                  Login
                </button>
              </p>
              <p style={{ alignContent: "center", paddingTop: "10px" }}>
                <Link to="/signin">Not an admin ?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
