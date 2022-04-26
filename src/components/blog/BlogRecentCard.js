import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogRecentCard = (props) => {
    const navigate = useNavigate()
    const handleBlogClick = () => {
        props.setCurrentPost(props.post.id)
        console.log(props.post.id)
        // navigate(`/blog/${props.post.id}`)
        window.scrollTo(0,0)
      }

  return <div onClick={handleBlogClick} className='post'>
  <img className='banner' src={props.post.banner} />
  <div className='post_info'>
    <h3>{props.post.title}</h3>
    <small>{props.post.author_name} &nbsp; | &nbsp; {props.post.post_date}</small>
    <p>{props.post.brief}</p>
  </div>


</div>
};

export default BlogRecentCard;
