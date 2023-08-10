import React from "react";
import Popular from "../../components/popular/Popular";

function Courses() {
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
          <h1>Courses</h1>
        </div>
      </div>
      <Popular />
    </>
  );
}

export default Courses;
