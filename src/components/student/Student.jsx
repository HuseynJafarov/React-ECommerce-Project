import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";


function Student() {
  const url = "https://localhost:7055";

  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    await axios.get(`${url}/api/Student/GetAll`).then((res) => {
      setStudents(res.data);
    });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div
      className="testimonials page_section"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="testimonials_background_container prlx_parent">
        <div
          className="testimonials_background prlx"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/testimonials_background.jpg)`,
          }}
        ></div>
      </div>
      <div className="container">
        {/* <Title sectionTitle="What our students say" /> */}

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="testimonials_slider_container">
              <div className="owl-carousel owl-theme testimonials_slider">
                <Carousel
                // nextIcon={directButtons("d-none")}
                // prevIcon={directButtons("d-none")}
                >
                  {students.map((student, i) => (
                    <Carousel.Item key={i}>
                      <div className="owl-item">
                        <div className="testimonials_item text-center">
                          <div className="quote">“</div>
                          <p className="testimonials_text">
                          {student.info}
                          </p>
                          <div className="testimonial_user">
                            <div className="testimonial_image mx-auto">
                              <img src={`data:image/jpeg;base64,${student.image}`} alt="" />
                            </div>
                            <div className="testimonial_name">{student.fullName}</div>
                            <div className="testimonial_title">
                              {student.isGraduated ? "Graduated" : "Student"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
