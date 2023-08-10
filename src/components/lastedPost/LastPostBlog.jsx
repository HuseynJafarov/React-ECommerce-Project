import React,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


function LastPostBlog() {
const url = "https://localhost:7055";

const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${url}/api/Blog/GetAll`);
      setPosts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const getLastPosts = () => {
    const lastPosts = posts.filter((post, index) => index < 5);
    return lastPosts;
  };

  const lastPosts = getLastPosts();


  return (
    <>
      <div className="sidebar_section">
        <div className="sidebar_section_title">
          <h3>Latest posts</h3>
        </div>

        <div className="latest_posts">
      {lastPosts.length > 0 ? (
        lastPosts.map((post) => (
          <div
            key={post.id}
            className="latest_post"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <div className="latest_post_image">
              <img src={`data:image/jpg;base64,${post.image}`} alt="" />
            </div>
            <div className="latest_post_title">
              <Link >{post.title}</Link> 
              {/* //to={`/news/${post.id}`} dataile getmek ucun */}
            </div>
            <div className="latest_post_meta">
              <span className="latest_post_author">
                <a href="#">By {post.authorId}</a>
              </span>
              <span>|</span>
              <span className="latest_post_comments">
                <p> Comments</p>
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </div>
    </>
  );
}

export default LastPostBlog;
