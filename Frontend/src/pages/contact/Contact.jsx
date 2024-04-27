
import img from "../../assets/images/pricing.jpg";
import "../../assets/css/contact.css";
import Button from "../../components/Button";
import Back from "../../components/Back";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <Button>Submit Request</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
