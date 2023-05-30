import React from 'react'

function Events() {
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

          <div className="row event_item">
            <div className="col">
              <div className="row d-flex flex-row align-items-end">
                <div className="col-lg-2 order-lg-1 order-2">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <div className="event_day">07</div>
                    <div className="event_month">January</div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-3">
                  <div className="event_content">
                    <div className="event_name"><a className="trans_200" href="#">Student Festival</a></div>
                    <div className="event_location">Grand Central Park</div>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                      Proin quis mi malesuada, finibus tortor.</p>
                  </div>
                </div>
                <div className="col-lg-4 order-lg-3 order-1">
                  <div className="event_image">
                    <img src="images/event_1.jpg" alt="https://unsplash.com/@theunsteady5"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row event_item">
            <div className="col">
              <div className="row d-flex flex-row align-items-end">
                <div className="col-lg-2 order-lg-1 order-2">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <div className="event_day">07</div>
                    <div className="event_month">January</div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-3">
                  <div className="event_content">
                    <div className="event_name"><a className="trans_200" href="#">Open day in the Univesrsity campus</a></div>
                    <div className="event_location">Grand Central Park</div>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                      Proin quis mi malesuada, finibus tortor.</p>
                  </div>
                </div>
                <div className="col-lg-4 order-lg-3 order-1">
                  <div className="event_image">
                    <img src="images/event_2.jpg" alt="https://unsplash.com/@claybanks1989"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row event_item">
            <div className="col">
              <div className="row d-flex flex-row align-items-end">
                <div className="col-lg-2 order-lg-1 order-2">
                  <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <div className="event_day">07</div>
                    <div className="event_month">January</div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-3">
                  <div className="event_content">
                    <div className="event_name"><a className="trans_200" href="#">Student Graduation Ceremony</a></div>
                    <div className="event_location">Grand Central Park</div>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                      Proin quis mi malesuada, finibus tortor.</p>
                  </div>
                </div>
                <div className="col-lg-4 order-lg-3 order-1">
                  <div className="event_image">
                    <img src="images/event_3.jpg" alt="https://unsplash.com/@juanmramosjr"/>
                  </div>
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

export default Events