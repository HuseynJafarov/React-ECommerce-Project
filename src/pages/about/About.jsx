import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import "../../assets/style/about.css";

function About() {
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
          <h1>About</h1>
        </div>
      </div>
      <AboutUs />
    </>
  );
}

export default About;
