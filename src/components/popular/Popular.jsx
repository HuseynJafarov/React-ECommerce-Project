import React, { useEffect, useState,useRef } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../layout/Header';


function Popular(props) {
  const url = 'https://localhost:7055';

  const [carts, setCarts] = useState([]);

  const navigate = useNavigate();
  const ref = useRef(null);

  const [token, setToken] = React.useState();
  const [basketcount, setbasketcount] = useState(0);
  const [config, setConfig] = React.useState([]);



  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
    
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      }
      setConfig(config);
    }
    else {
      const config = null;
      setConfig(config);
    }

  }, [token]);

  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const getAllCarts = async () => {
    try {
      const response = await axios.get(`${url}/api/Cart/GetAll`);
      setCarts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllCarts();
  }, []);

 


  async function AddBasket(id) {
    try {
      if (config != null) {
        await axios
          .post(`${url}/api/Basket/AddBasket?id=${id}`, null, config)
          .then((res) => {
            if (res.data.status === "success" || res.status === 200) {
              Success.fire({
                icon: "success",
                title: "Product successfully added",
              });
              axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
                setbasketcount(res.data);
              });
            }
          });
      } else {
        navigate("/login");
      }

      ref.current?.scrollIntoView();
    } catch (error) {
      console.error(error);
    }
  }
  

  

  return (
    <>
      <Navbar basketcount={basketcount} />
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
            {carts.map((item, index) => (
              <div key={index} ref={ref} className="col-lg-4 course_box">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`data:image/jpg;base64,${item.image}`}
                    alt="https://unsplash.com/@kellybrito"
                  />
                  <div className="card-body text-center">
                    <div className="card-title">
                      <a href="courses.html">{item.title}</a>
                    </div>
                    <div className="card-text">{item.description}</div>
                  </div>
                  <div className="price_box d-flex flex-row align-items-center">
                    <div className="course_author_image">
                      <img src="images/author.jpg" alt="author" />
                    </div>
                    <div className="course_author_name">
                      {item.authorName} <span>Author</span>
                    </div>
                    <div className="course_price d-flex flex-column align-items-center justify-content-center">
                      <span>${item.price}</span>
                    </div>
              
                    <button
                      onClick={() => AddBasket(item.id)} 
                      className="btn btn-primary"
                    >
                      Add to Basket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
