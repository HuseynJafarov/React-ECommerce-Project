import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const url = "https://localhost:7055";

  const [blog, setBlog] = useState([]);
  const getAll = async () => {
    try {
      await axios.get(`${url}/api/Blog/GetAll`).then((res) => {
        setBlog(res.data);
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
      {blog.map((item, index) => (
        <div key={index}>
          {
            <div
              className="news_post"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="news_post_image">
                <img src={`data:image/jpg;base64,${item.image}`} alt="" />
              </div>
              <div className="news_post_top d-flex flex-column flex-sm-row">
                <div className="news_post_date_container">
                  <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                    <div>18</div>
                    <div>dec</div>
                  </div>
                </div>
                <div className="news_post_title_container">
                  <div className="news_post_title">
                    <a href="news_post.html">{item.Title}</a>
                  </div>
                  <div className="news_post_meta">
                    <span className="news_post_author">
                      <Link></Link>
                    </span>
                    <span>|</span>
                    <span className="news_post_comments">
                      <Link>3 Comments</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="news_post_text">
                <p>{item.Description}</p>
              </div>
              <div className="news_post_button text-center trans_200">
                <a href="news_post.html">Read More</a>
              </div>
            </div>
          }
        </div>
      ))}
    </>
  );
}

export default Blog;
