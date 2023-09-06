import React from "react";
import Popular from "../../components/popular/Popular";
import  Navbar from "../../components/layout/Header";

function Courses() {
  const [basketcount, setbasketcount] = React.useState(0);
  return (
    <>
    <Navbar basketcount={basketcount}  />
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
      <Popular setbasketcount={setbasketcount}/>
    </>
  );
}

export default Courses;
