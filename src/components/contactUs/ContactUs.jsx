import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactUs() {
  const url = "https://localhost:7055";

  const [contactUs, setContact] = useState([]);

  const getAll = async () => {
    try {
      await axios.get(`${url}/api/Contact/GetAll`).then((res) => {
        setContact(res.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="contact_form">
                    <div className="contact_title">Get in touch</div>
                    <div className="contact_form_container">
                      <form action="post">
                        <input
                          id="contact_form_name"
                          className="input_field contact_form_name"
                          type="text"
                          placeholder="Name"
                          required="required"
                          data-error="Name is required."
                        />
                        <input
                          id="contact_form_email"
                          className="input_field contact_form_email"
                          type="email"
                          placeholder="E-mail"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <textarea
                          id="contact_form_message"
                          className="text_field contact_form_message"
                          name="message"
                          placeholder="Message"
                          required="required"
                          data-error="Please, write us a message."
                        ></textarea>
                        <button
                          id="contact_send_btn"
                          type="button"
                          className="contact_send_btn trans_200"
                          value="Submit"
                        >
                          send message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {contactUs.map((blog, index) => ( 
                  <div key={index} className="col-lg-4">
                    <div className="about">
                      <div className="about_title">Join Courses</div>
                      <p className="about_text">{blog.description}</p>
                      <div className="contact_info">
                        <ul>
                          <li className="contact_info_item">
                            <div className="contact_info_icon">
                              <img
                                src="images/placeholder.svg"
                                alt="https://www.flaticon.com/authors/lucy-g"
                              />
                            </div>
                            Blvd Libertad, 34 m05200 Arévalo
                          </li>
                          <li className="contact_info_item">
                            <div className="contact_info_icon">
                              <img
                                src="images/smartphone.svg"
                                alt="https://www.flaticon.com/authors/lucy-g"
                              />
                            </div>
                            0034 37483 2445 322
                          </li>
                          <li className="contact_info_item">
                            <div className="contact_info_icon">
                              <img
                                src="images/envelope.svg"
                                alt="https://www.flaticon.com/authors/lucy-g"
                              />
                            </div>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="c7afa2ababa887a4a8aab7a6a9bee9a4a8aa"
                            >
                              [email&#160;protected]
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))};
              </div>
              <div className="row">
                <div className="col">
                  <div id="google_map">
                    <div className="map_container">
                      <div id="map"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
