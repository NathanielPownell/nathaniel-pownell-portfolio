import React from 'react'

import './Badge.css';

const Badge = (props) => {
    return (
        <div className='badge'>
            <img src={props.image} />
        </div>
    )
}

export default Badge
