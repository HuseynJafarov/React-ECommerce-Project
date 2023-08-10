import React from 'react'
import { Link } from 'react-router-dom';

// import axios from "axios";

function Archives() {
  // const url = "https://localhost:7055";

  // const [archives, setArchives] = useState([]);

  // const getAll = async () => {

  // }
  return (
    <>
      <div className="sidebar_section" data-aos="fade-up" data-aos-duration="1200">
      <div className="sidebar_section_title">
        <h3>Archives</h3>
      </div>
      <ul className="sidebar_list">
        <li className="sidebar_list_item"><Link>Design Courses</Link></li>
        <li className="sidebar_list_item"><Link>All you need to know</Link></li>
        <li className="sidebar_list_item"><Link>Uncategorized</Link></li>
        <li className="sidebar_list_item"><Link>About Our Departments</Link></li>
        <li className="sidebar_list_item"><Link>Choose the right course</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Archives