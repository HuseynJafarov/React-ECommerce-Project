import React from "react";
import "../../assets/style/contact.css";
import ContactUs from "../../components/contactUs/ContactUs";

function Contact() {
  return (
    <>
      <div className="home">
        <div className="home_background_container prlx_parent">
          <div
            className="home_background prlx"
            style={{
background: `url(${process.env.PUBLIC_URL}/images/courses_background.jpg)`,
            }}
          ></div>
        </div>
        <div className="home_content">
          <h1>Contact</h1>
        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default Contact;
