import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/register.css";
import signin from "../../../assets/images/signupNew.png";
import ShowDetailModal from "../../../components/modal/ShowDetailModal";


export default function Signup() {
  const dialog = useRef();
  const formRef = useRef();
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSignup(event) {
    event.preventDefault();

    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries());
    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }
    console.log(data);
    // open modal
    dialog.current.open();
    // clear form after submission
    setPasswordsAreNotEqual(false);
    formRef.current.reset();
  }

  return (
    <>
      <ShowDetailModal ref={dialog} />
      <section className="login-page">
        <div className="image-section">
          <img src={signin} alt="" />
        </div>
        <div className="login-section">
          <div className="">
            <form ref={formRef} className="form-signup" onSubmit={handleSignup}>
              <h2>Get Started With MAKER</h2>
              <p>Getting started is easy</p>
              <div className="control-row">
                <div className="control">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="full-name"
                    required
                  />
                </div>
              </div>
              <div className="control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="control-row">
                <div className="control">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    minLength={6}
                  />
                </div>

                <div className="control">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                    required
                  />
                  <div className="control-error">
                    {passwordsAreNotEqual && <p>Password must match</p>}
                  </div>
                </div>
              </div>
              <p className="form-actions">
                <button type="reset" className="form-button form-button-flat">
                  Reset
                </button>
                <button type="submit" className="form-button">
                  Sign up
                </button>
              </p>{" "}
              <p style={{ alignContent: "center", paddingTop: "10px" }}>
                Already register ? please <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
