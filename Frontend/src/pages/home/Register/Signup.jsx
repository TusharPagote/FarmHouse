import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/register.css";
import signin from "../../../assets/images/signupNew.png";
// import ShowDetailModal from "../../../components/modal/ShowDetailModal";
import Swal from "sweetalert2";
import { addData } from "../../../assets/data/http";

export default function Signup() {
  // const dialog = useRef();
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

    // Call sendEnquiry function to send data to the backend
    addData(data, "userlist")
      .then((success) => {
        if (success) {
          console.log("Success to send data to enqyuries...");
          // userdata sent successfully
          // Open modal or show success message
          // dialog.current.open();
          Swal.fire({
            icon: "success",
            title: "Done !!",
            text: "Your userdata has been sent successfully",
          });
        } else {
          console.log("Falied to send data to enqyuries...");
          // Failed to send userdata
          // Handle error (e.g., show error message)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => {
        // Handle error (e.g., show error message)
        console.error("Error sending userdata:", error);
      });

    // Log the data
    // console.log(data);
    console.log(data);
    // open modal
    // dialog.current.open();
    // clear form after submission
    setPasswordsAreNotEqual(false);
    formRef.current.reset();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have succsessfuly signed up !",
      showConfirmButton: true,
      timer: 3000,
    });
  }

  return (
    <>
      {/* <ShowDetailModal ref={dialog} /> */}
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
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="fullName"
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
