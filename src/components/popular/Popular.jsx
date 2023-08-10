import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Popular() {

  const url = "https://localhost:7055";

  const [carts, setCarts] = useState([]);

  const getAllCarts = async () => {
   try {
    await axios.get(`${url}/api/Cart/GetAll`).then((res) => {
      setCarts(res.data);
    });
   } catch (error) {
    alert(error);
   }
  };

  useEffect(() => {
    getAllCarts();
  }, []);
  return (
    <>
      <div className="popular page_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h1>Popular Courses</h1>
            </div>
          </div>
        </div>
        <div className="row course_boxes">
          {carts.map((item,index) => (
            <div key={index} className="col-lg-4 course_box">
            <div className="card">
              <img className="card-img-top" src={`data:image/jpg;base64,${item.image}`} alt="https://unsplash.com/@kellybrito"/>
              <div className="card-body text-center">
                <div className="card-title"><a href="courses.html">{item.title}</a></div>
                <div className="card-text">{item.description}</div>
              </div>
              <div className="price_box d-flex flex-row align-items-center">
                <div className="course_author_image">
                  <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                </div>
                <div className="course_author_name">{item.authorName} <span>Author</span></div>
                <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>${item.price}</span>
                </div>
              </div>
            </div>
          </div>
          ))};
        </div>
      </div>
    </div>
    </>
  )
}

export default Popular