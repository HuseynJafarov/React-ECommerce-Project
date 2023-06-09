import React from 'react'

function Header() {
  return (
    <>
      <header className="header d-flex flex-row">
      <div className="header_content d-flex flex-row align-items-center">

        <div className="logo_container">
          <div className="logo">
            <img src="images/logo.png" alt=""/>
            <span>course</span>
          </div>
        </div>

        <nav className="main_nav_container">
          <div className="main_nav">
            <ul className="main_nav_list">
              <li className="main_nav_item"><a href="#">home</a></li>
              <li className="main_nav_item"><a href="#">about us</a></li>
              <li className="main_nav_item"><a href="courses.html">courses</a></li>
              <li className="main_nav_item"><a href="elements.html">elements</a></li>
              <li className="main_nav_item"><a href="news.html">news</a></li>
              <li className="main_nav_item"><a href="contact.html">contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <img src="images/phone-call.svg" alt=""/>
        <span>+43 4566 7788 2457</span>
      </div>

      <div className="hamburger_container">
        <i className="fas fa-bars trans_200"></i>
      </div>
    </header>

    
    </>
  )
}

export default Header