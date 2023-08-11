import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


function Footer() {
  const url = "https://localhost:7055";

  const [contact, setContact] = useState([]);
  const [setting, setSetting] = useState([]);

  const getAllContact = async () => {
    try {
      await axios.get(`${url}/api/Contact/GetAll`).then((res) => {
        setContact(res.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  const getAllSetting = async () => {
    await axios.get(`${url}/api/Setting/GetAll`).then((res) => {
      setSetting(res.data);
    });
  };

  useEffect(() => {
    getAllSetting();getAllContact();
  }, []);
  return (
    <>
      <footer className="footer">
      <div className="container">

        <div className="newsletter">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <h1>Subscribe to newsletter</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col text-center">
              <div className="newsletter_form_container mx-auto">
                <form action="https://preview.colorlib.com/theme/course/post">
                  <div
                    className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                    <input id="newsletter_email" className="newsletter_email" type="email" placeholder="Email Address"
                      required="required" data-error="Valid email is required."/>
                    <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300"
                      value="Submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_content">
          <div className="row">
          {setting.map((item,index) => (
            <div key={index} className="col-lg-3 footer_col">
              <div className="logo_container">
                <div className="logo">
                  <img src="images/logo.png" alt=""/>
                  <span>{item.siteName}</span>
                </div>
              </div>
              <p className="footer_about_text">{item.description}</p>
            </div>
          ))}
          

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Menu</div>
              <div className="footer_column_content">
                <ul>
                  <li className="footer_list_item"><Link to="/">Home</Link></li>
                  <li className="footer_list_item"><Link to="/about">About Us</Link></li>
                  <li className="footer_list_item"><Link to="/courses">Courses</Link></li>
                  <li className="footer_list_item"><Link to="/news">News</Link></li>
                  <li className="footer_list_item"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Usefull Links</div>
              <div className="footer_column_content">
                {/* <ul>
                  <li className="footer_list_item"><Link >Testimonials</Link></li>
                  <li className="footer_list_item"><Link  >FAQ</Link></li>
                  <li className="footer_list_item"><Link  >Community</Link></li>
                  <li className="footer_list_item"><Link  >Campus Pictures</Link></li>
                  <li className="footer_list_item"><Link  >Tuitions</Link></li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Contact</div>
              {contact.map((item,index) => (
              <div key={index} className="footer_column_content">
                <ul>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div>
                    {item.location}
                  </li>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div>
                    {item.phone}
                  </li>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div>
                    <Link  className="__cf_email__"
                    target='_blank'
                    to="mailto:huseyn__ceferov@outlook.com">{item.email}
                    </Link>
                  </li>
                </ul>
              </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
          <div className="footer_copyright">
            <span>
              Copyright &copy;
              All rights reserved | This site is made
              with <i className="fa fa-heart" aria-hidden="true"></i> by  
              <Link 
                to="https://www.linkedin.com/in/gusicafar/" target="_blank"> Huseyn Jafarov
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
   

    </>
  )
}

export default Footer