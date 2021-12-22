import React from 'react'

const CustomLink = (props) => {
    return (
        <div onClick={open(props.link)}>
            {props.content}
        </div>
    )
}

export default CustomLink
