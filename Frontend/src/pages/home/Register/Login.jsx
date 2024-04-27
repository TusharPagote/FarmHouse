import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import login from "../../../assets/images/loginNew.png";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

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
  }

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-main">
            <form className="form-login" onSubmit={handleSubmit}>
              <h2>Welcome Back</h2>
              <p>Login into your account</p>
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

              <p className="form-actions">
                <button type="reset" className="form-button form-button-flat">
                  Reset
                </button>
                <button className="form-button">Login</button>
              </p>
              <p style={{ alignContent: "center", paddingTop: "10px" }}>
                Dont have an account ? please <Link to="/signin">Register</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="image-section">
          <img src={login} alt="" />
        </div>
      </div>
    </>
  );
}
