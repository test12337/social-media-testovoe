import React, { useState } from "react"
const CommentInput = ({id, newCommentHandler}) => {
    const [newComment, setNewComment] = useState({
        id : '',
        postId : id,
        text : '',
    });
    const inputHandler = (e) => {
        setNewComment({...newComment, [e.target.name] : e.target.value})
    };
    return (<div className="comment_body">
        <textarea required onChange={inputHandler} value={newComment.text} placeholder="New comment" name="text"/>
        <i className="bi bi-upload" onClick={() => {
            newCommentHandler(newComment)
            setNewComment({
                id : '',
                postId : id,
                text : '',
            });
        }}></i>
    </div>)
}

export { CommentInput };