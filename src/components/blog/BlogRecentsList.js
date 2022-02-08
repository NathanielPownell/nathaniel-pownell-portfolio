import React, { useState, useEffect } from 'react';
import './BlogRecentsList.css';
import axios from 'axios'
import BlogRecentCard from './BlogRecentCard';

function BlogRecentsList(props) {
  const [dataSet, setDataSet] = useState([])

  let data

  useEffect(() => {
    axios.get('http://localhost:8000/posts/').then((res) => {
      data = res.data
      setDataSet(data)

    }
    )
  }, [])
  const handleBlogClick = (blogid) => {
    props.setCurrentPost(blogid)
    console.log(blogid)
  }
  return (
    <div className='blogrecents'>
      <h1>Recent Blog Posts</h1>
      <div className="postholder">

        {dataSet.length > 0 &&
          dataSet.map((post, id) =>
            <BlogRecentCard setCurrentPost={props.setCurrentPost} key={id} post={post} onClick={handleBlogClick} className='post'>


            </BlogRecentCard>
          )
        }
      </div>
    </div>
  );
}

export default BlogRecentsList;
