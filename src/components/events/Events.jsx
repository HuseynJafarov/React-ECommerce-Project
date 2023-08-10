import React,{useState, useEffect} from 'react'
import axios from "axios";
import moment from 'moment';



function Events() {
  const url = "https://localhost:7055";
  const [event, setEvents] = useState([]);

  const getAll = async () => {
    try {
      await axios.get(`${url}/api/Event/GetAll`).then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
   <>
  
      <div className="events page_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h1>Upcoming Events</h1>
            </div>
          </div>
        </div>
        <div className="event_items">
        
        {event.map((event,i) => (
          <div className="row event_item" key={i}>
            <div className="col">
              <div className="row d-flex flex-row align-items-end">
                <div className="col-lg-2 order-lg-1 order-2">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    {/* <div className="event_day">{moment(evebt.updateDate).format('DD-MM-YYYY HH:mm:ss')}</div> */}
                    <div className="event_month">{moment(event.date).format('DD-MM-YYYY')}</div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-3">
                  <div className="event_content">
                    <div className="event_name">
                    <a className="trans_200">{event.title}</a>
                    </div>
                    <div className="event_location">{event.location}</div>
                    <p>{event.description}</p>
                  </div>
                </div>
                <div className="col-lg-4 order-lg-3 order-1">
                  <div className="event_image">
                    <img  src={`data:image/jpeg;base64,${event.image}`} alt="https://unsplash.com/@theunsteady5"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),)}
        </div>
      </div>
    </div>
   </>
  )
}

export default Events