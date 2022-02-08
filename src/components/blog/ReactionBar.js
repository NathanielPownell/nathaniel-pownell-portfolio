import React, { useState } from 'react';
import './ReactionBar.css'
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CommentIcon from '@mui/icons-material/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThumbUp, Comment, Visibility } from '@material-ui/icons';
const ReactionBar = (props) => {
    

    return (

        <div className={`reactionbarContainer ${props.type ? "topbar" : ""}`}>

            <div className='reactionbar'>
                <div className='viewsCounter'>

                <Visibility />
                {props.views}
                </div>
                <form onSubmit={props.Like}>

                    <button type='submit' onClick={props.handleClick} className={`${props.clicked ? 'clicked' : ''}`} > <ThumbUp /> {props.likes}  </button>
                </form>
                <a href="#comments"> <Comment /> {props.comments} </a>
            </div>
        </div>
    )
};

export default ReactionBar;
