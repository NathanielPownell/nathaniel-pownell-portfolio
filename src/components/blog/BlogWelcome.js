import React from 'react';
import './BlogWelcome.css'
import coffeeimg from './coffeeimg.png'

const BlogWelcome = () => {
  return <div className='blogwelcome'>
    <div className='welcomhero'>

    <div className='welcomheader'>
      <h1>Hi 👋</h1>
      <h1>Welcome to my blog.</h1>
      <p>I post here about  <b>current trends</b>, <b>tutorials</b>,
      and <b> basically anything else!</b>
      </p>
    </div>

      <div className='coffee'>
        <img src={coffeeimg}/>
      </div>
    </div>
  </div>;
};

export default BlogWelcome;
