import React,{useEffect,useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import './slider.scss';
import axios from "axios";


function Slider() {
  const url = "https://localhost:7055";

  const [sliders, setSliders] = useState([]);

  const getAllSliders = async () => {
    try {
      await axios.get(`${url}/api/Slider/GetAll`).then((res) => {
        setSliders(res.data);
      });
    } catch (error) {
      alert(error);
    }
  };
  
  useEffect(() => {
    getAllSliders();
  }, []);



  return (
    <>
      <div className="main">
      <Carousel>
     {sliders.map((slider,i) => (
      
      <Carousel.Item key={i}>
        <div className= "my-image">
        <img 
          className="d-block w-100"
          src={`data:image/jpeg;base64,${slider.image}`}
          alt="First slide"
        />
        </div>
       

        <Carousel.Caption>
          <h3>{slider.title}</h3>
          <p>{slider.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    
     ))}
      
    </Carousel>
      </div>
    </>
  );
}

export default Slider;
