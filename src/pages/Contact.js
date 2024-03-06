import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="form-container">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              className="form-control"
              placeholder="Enter full name..."
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="form-control"
              placeholder="Enter email..."
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              className="form-control"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
