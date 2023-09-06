import React, { useState,useEffect, useContext  } from 'react'
import { JwtContext } from '../../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { mdiBasketOutline } from '@mdi/js';
import Icon from '@mdi/react';
import axios from "axios";
import Swal from "sweetalert2";
import '../../assets/scss/header.scss'





function Header(props) {


  const url = 'https://localhost:7055';

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');
  const [course, setCourse] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { ParseJwt } = useContext(JwtContext);


  const token = JSON.parse(localStorage.getItem("token"));

  let userName = "";

  if(token != null){
      userName = ParseJwt(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
  }

  const handleOpen = () => {
    setIsLoggedIn(token != null);
  }

  useEffect(() => {
    handleOpen();
  }, []);

  const Logout = async (e) => {
    e.preventDefault();

    let removeToken =  localStorage.removeItem("token");
    
    if(removeToken == null || removeToken == undefined){
      setIsLoggedIn(false)
      navigate("/");
      Swal.fire("", "Logout successfully", "success");
      window.location.reload();
    }else{
       Swal.fire("", "Logout failed", "error");
    }


  }

  const handleSearch = () => {
    axios.get(`${url}/api/Cart/Search?searchText=${searchText}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const handleKeyUp = (event) => {
    setSearchText(event.target.value);
    if (event.target.value === '') {
      setCourse([]);
    } else {
      handleSearch();
    }
  };


  const style = {
    color: 'black'
  }

  const showCourse = course.slice(0, 5);
  return (
    <>
      <header className="header d-flex flex-row">
        <div className="header_content d-flex flex-row align-items-center">

          <div className="col-3 logo_container">
            <div className="logo">
              <img src="images/logo.png" alt="" />
              <span>course</span>
            </div>
          </div>

          <div className='col-2 d-flex search-input'>

            <input type="text" placeholder=" Search by Courses" onKeyUp={handleKeyUp} />


            <ul className="search-ul-li">
              {showCourse.map(course => {
                const truncatedName = course.title.length > 20
                  ? course.title.slice(0, 20) + "..."
                  : course.title;

                return (
                  <li key={course.id}>
                    <Link to={`/courses/`}>
                      <div className="d-flex">

                        <div ><img style={{ width: '80px', height: '80px' }}
                          src={`data:image/jpeg;base64,${course.image}`}
                          alt=""
                        />
                        </div>

                        <div>
                          <p className="name"> {truncatedName}</p>
                          <p className="price">{course.price}$</p>

                        </div>

                      </div>

                    </Link>
                  </li>
                );
              })}
            </ul>


          </div>
          <nav className="col-7 main_nav_container">
            <div className="main_nav">
              <ul className="main_nav_list">
                <li className="main_nav_item"><Link to="/">Home</Link></li>
                <li className="main_nav_item"><Link to="/About">About us</Link></li>
                <li className="main_nav_item"><Link to="/courses">Courses</Link></li>
                <li className="main_nav_item"><Link to="/news">News</Link></li>
                <li className="main_nav_item"><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <Dropdown>
          <Dropdown.Toggle className='btn btn-light' id="dropdown-basic">
            My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {isLoggedIn ? (
              <>
                <Dropdown.Item ><Link style={style}>{userName}</Link></Dropdown.Item>
                <Dropdown.Item onClick={(e) => Logout(e)}><Link style={style}>Logout</Link></Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item>
                  <Link style={style} to="/login">Login</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link style={style} to="/register">Register</Link>
                </Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <div className="basket">
            <Link to={"/Basket"}>
              <Icon path={mdiBasketOutline} size={1.5} className='icon icon2' color="white" />
              <sup className="icon-design">{props.basketcount}</sup>
            </Link>
          </div>
      </div>
      <div className="hamburger_container">
        <i className="fas fa-bars trans_200"></i>
      </div>

      </header>


    </>
  )
}

export default Header