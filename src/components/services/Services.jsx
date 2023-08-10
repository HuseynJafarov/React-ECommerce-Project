import React,{useEffect,useState} from 'react'
import axios from 'axios'


function Services() {
  const url = "https://localhost:7055";

  const [services, setServices] = useState([]);

  const getAllServices = async () => {
   try {
    await axios.get(`${url}/api/Services/GetAll`).then((res) => {
      setServices(res.data);
    });
   } catch (error) {
    alert(error);
   }
  };

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <div className="services page_section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title text-center">
            <h1>Our Services</h1>
          </div>
        </div>
      </div>
      <div className="row services_row">
      {services.map((servic,i) => (
        <div key={i} className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
          <div className="icon_container d-flex flex-column justify-content-end">
            <img src={`data:image/svg+xml;base64,${servic.image}`} alt="servic"/>
          </div>
          <h3>{servic.title}</h3>
          <p>{servic.description}</p>
        </div>
      ))}
     
      </div>
    </div>
  </div>
  )
}

export default Services