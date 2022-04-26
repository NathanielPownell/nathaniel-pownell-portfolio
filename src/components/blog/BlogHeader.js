import React, {useState} from 'react';
import './BlogHeader.css'
import bloglogo from './bloglogo.png'
import {useNavigate} from 'react-router-dom'
const BlogHeader = () => {
    const [displayPwdAlrt, setDisplayPwdAlrt] = useState([true])
    const navigate = useNavigate()

    const togglePsswdChange = () => {
        setDisplayPwdAlrt(false)
      }
    

    return <div className='navbar'>
        <div className='navbar_inner'>
            <div onClick={() => {navigate('/blog')}} className='logo'> <img src={bloglogo} /></div>
            <ul>
                <li><a href="/blog">Home </a> </li>
                <li><a href="/">Portfolio</a></li>
            </ul>
            
        </div>
    </div>;
};

export default BlogHeader;
