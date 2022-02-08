import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './CommentList.css'

const CommentList = (props) => {
    const [dataSet, setDataSet] = useState([])
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    let data

    const getData = () => {
        axios.get(`http://localhost:8000/comment/${props.postid}/`).then((res) => {
            data = res.data
            console.log(data)
            setDataSet(data)

        }
        )
        // return data
    }
    

    useEffect(() => {
        axios.get(`http://localhost:8000/comment/${props.postid}/`).then((res) => {
            data = res.data
            console.log(data)
            setDataSet(data)

        }) 
    }, [props.postid])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/comment/${props.postid}/`, {
            name: name,
            comment_body: comment,
            post: props.postid,
        })
        .then((res) => {
            setComment("")
            setName("")
            getData()
        })
        .catch((err) => { });
    }

    const handleChange = (e) =>{
        if (e.target.name === 'name'){
            setName(e.target.value)
        } else {
            setComment(e.target.value)
        }
    }

    return (
        <div id="comments" className='commentsection'>
            <div>
                <h2>Write a comment:</h2>
                <form onSubmit={handleSubmit} className='commentform'>
                    <label htmlFor='name'>Your Name:</label>
                    <input type="text" name='name' placeholder="Adam" value={name} onChange={handleChange} />
                    <label htmlFor='comment'>Comment:</label>
                    <textarea type="textarea" placeholder="Add a comment..." name='comment' value={comment} onChange={handleChange} />
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='commentList'>
                <h2>Comments:</h2>
                {dataSet &&
                    dataSet.map((comment, id) =>
                        <div key={id} className='comment'>

                            <h3>{comment.name} <span>{comment.post_date}</span></h3>
                            <p>{comment.comment_body}</p>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default CommentList;
