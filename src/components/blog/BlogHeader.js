import React, {useState} from 'react';
import './BlogHeader.css'
import bloglogo from './bloglogo.png'

const BlogHeader = () => {
    const [displayPwdAlrt, setDisplayPwdAlrt] = useState([true])


    const togglePsswdChange = () => {
        setDisplayPwdAlrt(false)
      }
    

    return <div className='navbar'>
        <div className='navbar_inner'>
            <div className='logo'> <img src={bloglogo} /></div>
            <ul>
                <li><a href="/blog">Home </a> </li>
                <li><a href="/">Portfolio</a></li>
            </ul>
            
        </div>
    </div>;
};

export default BlogHeader;
