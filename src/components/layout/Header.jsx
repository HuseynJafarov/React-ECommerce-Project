import React,{useState, useEffect, useContext} from 'react'
import { JwtContext } from '../../Context/Context';
import { Dropdown } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Header() {
  

  const url = 'https://localhost:7055';

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { ParseJwt } = useContext(JwtContext);


  const token = JSON.parse(localStorage.getItem("token"));
  let userName = "";
  if (token != null) {
    userName = ParseJwt(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
  }

  const handleOpen = () => {
    setIsLoggedIn(token != null);
  };

  useEffect(() => {
    handleOpen()
  }, [])

  const Logout = async (e) => {
    e.preventDefault();

    let removeToken = localStorage.removeItem("token");

    if (removeToken == null || removeToken == undefined) {
      setIsLoggedIn(false);
      navigate("/");
      swal.fire("", "Logout successfully", "success");
    }
    else swal.fire("", "Logout failed", "error");
  };

  const style = {
    color: 'black'
  }

  return (
    <>
      <header className="header d-flex flex-row">
        <div className="header_content d-flex flex-row align-items-center">

          <div className="logo_container">
            <div className="logo">
              <img src="images/logo.png" alt="" />
              <span>course</span>
            </div>
          </div>

          <nav className="main_nav_container">
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
          <Link ><SlBasket className='basketIcon' /></Link>
        </div>

        <div className="hamburger_container">
          <i className="fas fa-bars trans_200"></i>
        </div>
      </header>


    </>
  )
}

export default Header