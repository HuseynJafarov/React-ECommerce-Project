import React from 'react'
import { Link } from 'react-router-dom';
import Blog from '../../components/blog/Blog'
import Archives from '../../components/archives/Archives';
import LastPost from '../../components/lastedPost/LastPostBlog'
import Tags from '../../components/tags/Tags'
import '../../assets/style/news.css'


function News() {
  return (
    <>
       
        <div className="home">
        <div className="home_background_container prlx_parent">
          <div
            className="home_background prlx"
            style={{
              background: `url(${process.env.PUBLIC_URL}/images/courses_background.jpg)`,
            }}
          ></div>
        </div>
        <div className="home_content">
          <h1>News</h1>
        </div>
      </div>
      <div className="news-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="news_posts">
            
                <Blog/>
              </div>
              <div className="news_page_nav">
                <ul>
                  <li className="active text-center trans_200"><Link>01</Link></li>
                  <li className="text-center trans_200"><Link>02</Link></li>
                  <li className="text-center trans_200"><Link>03</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <Archives/>
                <LastPost/>
                <Tags/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News