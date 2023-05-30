import React from 'react'

function Footer() {
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
            <div className="col-lg-3 footer_col">
              <div className="logo_container">
                <div className="logo">
                  <img src="images/logo.png" alt=""/>
                  <span>course</span>
                </div>
              </div>
              <p className="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor
                nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Menu</div>
              <div className="footer_column_content">
                <ul>
                  <li className="footer_list_item"><a href="#">Home</a></li>
                  <li className="footer_list_item"><a href="#">About Us</a></li>
                  <li className="footer_list_item"><a href="courses.html">Courses</a></li>
                  <li className="footer_list_item"><a href="news.html">News</a></li>
                  <li className="footer_list_item"><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Usefull Links</div>
              <div className="footer_column_content">
                <ul>
                  <li className="footer_list_item"><a href="#">Testimonials</a></li>
                  <li className="footer_list_item"><a href="#">FAQ</a></li>
                  <li className="footer_list_item"><a href="#">Community</a></li>
                  <li className="footer_list_item"><a href="#">Campus Pictures</a></li>
                  <li className="footer_list_item"><a href="#">Tuitions</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_column_title">Contact</div>
              <div className="footer_column_content">
                <ul>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div>
                    Blvd Libertad, 34 m05200 Arévalo
                  </li>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div>
                    0034 37483 2445 322
                  </li>
                  <li className="footer_contact_item">
                    <div className="footer_contact_icon">
                      <img src="images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g"/>
                    </div><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__"
                      data-cfemail="89e1ece5e5e6c9eae6e4f9e8e7f0a7eae6e4">[email&#160;protected]</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
          <div className="footer_copyright">
            <span>
              Copyright &copy;
              <script data-cfasync="false"
                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
              <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
              with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com/"
                target="_blank">Colorlib</a>
            </span>
          </div>
          <div className="footer_social ml-sm-auto">
            <ul className="menu_social">
              <li className="menu_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
              <li className="menu_social_item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li className="menu_social_item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="menu_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li className="menu_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer