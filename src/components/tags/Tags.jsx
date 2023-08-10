import React from "react";
import { Link } from 'react-router-dom';


function Tags() {
  return (
    <>
      <div
        className="sidebar_section"
        data-aos="fade-up"
        data-aos-duration="1600"
      >
        <div className="sidebar_section_title">
          <h3>Tags</h3>
        </div>
        <div className="tags d-flex flex-row flex-wrap">
          <div className="tag">
            <Link>Course</Link>
          </div>
          <div className="tag">
            <Link>Design</Link>
          </div>
          <div className="tag">
            <Link>FAQ</Link>
          </div>
          <div className="tag">
            <Link  >Teachers</Link>
          </div>
          <div className="tag">
            <Link  >School</Link>
          </div>
          <div className="tag">
            <Link  >Graduate</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags;
