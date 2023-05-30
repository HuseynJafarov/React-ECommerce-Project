import React from 'react'

function SliderBox() {
  return (
    <>
        <div className="hero_boxes">
      <div className="hero_boxes_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 hero_box_col">
              <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                <img src="images/earth-globe.svg" className="svg" alt=""/>
                <div className="hero_box_content">
                  <h2 className="hero_box_title">Online Courses</h2>
                  <a href="courses.html" className="hero_box_link">view more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 hero_box_col">
              <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                <img src="images/books.svg" className="svg" alt=""/>
                <div className="hero_box_content">
                  <h2 className="hero_box_title">Our Library</h2>
                  <a href="courses.html" className="hero_box_link">view more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 hero_box_col">
              <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                <img src="images/professor.svg" className="svg" alt=""/>
                <div className="hero_box_content">
                  <h2 className="hero_box_title">Our Teachers</h2>
                  <a href="teachers.html" className="hero_box_link">view more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SliderBox