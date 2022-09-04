import "./contacts.scss";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // have to implement emailjs information

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );
    e.target.reset();
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="icon" />
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:email@email.com" target={"_blank"}>
              Send an email
            </a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className="icon" />
            <h4>LinkedIn</h4>
            <h5>Your Name</h5>
            <a href="https://www.linkedin.com/in/your-name/" target={"_blank"}>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="email@email.com" />
          <textarea
            name="message"
            rows="8"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
