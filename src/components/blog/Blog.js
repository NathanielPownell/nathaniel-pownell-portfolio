import React, { useState, useEffect } from 'react';
// import './App.css';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import BlogRecentsList from './BlogRecentsList';
import BlogWelcome from './BlogWelcome';
import './Blog.css'

function Blog() {
    const [currentPost, setCurrentPost] = useState()

  return (
    <div className='blog'>
      <BlogHeader />
      {currentPost == null &&

        <BlogWelcome />
      }
      {currentPost &&
        <BlogPost postid={currentPost} />
      }
      <BlogRecentsList setCurrentPost={setCurrentPost} />
    </ div>
  )
}

export default Blog;
