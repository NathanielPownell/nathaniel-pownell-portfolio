import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './BlogPost.css'
import ReactionBar from './ReactionBar';
import CommentList from './CommentList';

const BlogPost = (props) => {
    const [dataSet, setDataSet] = useState([])
    const [likes, setLikes] = useState()
    const [views, setViews] = useState()
    const [clicked, setClicked] = useState(false)
    const [comments, setComments] = useState()
    const handleLikeClick = () => {
        setClicked(true)
    }
    let data

    const getCommentData = () => {
        axios.get(`http://localhost:8000/comment/${props.postid}/`).then((res) => {
            data = res.data
            setComments(data.length)
        }
        )
        return data
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/posts/${props.postid}/`).then((res) => {
            data = res.data
            console.log(data)
            setDataSet(data)
            getLikes()
            setViews(data.views)
        })
        axios({
            method: 'put',
            url: `http://localhost:8000/addviews/${props.postid}/`, 
            data: {
                id: 1,
                views: views+1,
            }
        }
        )
        axios.get(`http://localhost:8000/comment/${props.postid}/`).then((res) => {
            data = res.data
            setComments(data.length)
        }
        )
        return data
    }, [props.postid])

    const getLikes = () => {
        axios.get(`http://localhost:8000/addlikes/${props.postid}/`).then((res) => {
            data = res.data
            console.log(data)
            setLikes(data[0].likes)
        
        }
        )
    }

    const Like = (e) => {
        e.preventDefault()
        
        axios({
            method: 'put',
            url: `http://localhost:8000/addlikes/${props.postid}/`, 
            data: {
                id: 1,
                likes: likes+1,
            }
        }
        ).then((res) => {
            getLikes()
        }
        ).catch((err) => { });
    }

    

    return (
        <>
            {dataSet != null &&
                <>
                    <div className='blogpost' id="blogpost">
                        <div className='blogpost_top'>

                            <div style={{ backgroundImage: `url(${dataSet.banner})` }}>
                                <div className='blogpost_top_details'>
                                    <div>
                                        <h1 className='blogtitle'> {dataSet.title}</h1>
                                        <p className='namedate'>{dataSet.author_name} &nbsp; | &nbsp; Published: &nbsp; {dataSet.post_date}</p>
                                        <h3>{dataSet.brief}</h3>
                                        <ReactionBar type="titlebar" comments={comments} handleClick={handleLikeClick} views={views} clicked={clicked} Like={Like} likes={likes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br />
                        <div className='blogpostContentContainer'>
                            <div dangerouslySetInnerHTML={{ __html: dataSet.body }} className='blogContent'>
                            </div>
                        </div>
                    </div>
                    <ReactionBar comments={comments} handleClick={handleLikeClick} views={views} clicked={clicked} Like={Like} likes={likes} />
                    <CommentList id="comments" getData={getCommentData} postid={props.postid} />
                </>
            }
        </>
    )
};

export default BlogPost;
