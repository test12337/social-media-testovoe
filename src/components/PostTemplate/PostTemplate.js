import React, {useState} from 'react';
import { ToolBox } from '../ToolBox/ToolBox';
import { CommentTemplate } from '../CommentTemplate/CommentTemplate';
import { CommentInput } from '../CommentInput/CommentInput';
import { Link } from "react-router-dom";
import './PostTemplate.scss';
const PostTemplate = ({id, title, body, deleteHandler, editHandler, toolBox=false, extandable=false, comments=false, newCommentHandler, onCommentChange, onCommentDelete}) => {
    const [contentEditable, setContentEditable] = useState(false);
    const [editPost, setEditPost] = useState({
        id : id,
        title : title,
        body : body,
    });
    const inputHandler = (e) => {
        setEditPost({...editPost, [e.target.name] : e.target.value})
    }
    return (
        <div className={`post ${comments ? "extandable" : ""}`}>
            <div className="post_header">
                {contentEditable ? <textarea required rows="1" onChange={inputHandler} value={editPost.title} name="title"/> : <h2 className="post_title">{editPost.title}</h2>}
                {(toolBox) ? <ToolBox 
                setContentEditable={setContentEditable} 
                contentEditableStatus={contentEditable}
                deleteHandler={() => deleteHandler(id)} 
                editHandler={() => editHandler(editPost, id)}/> : null}
            </div>
            <div className="post_body">
                {contentEditable ? <textarea required rows="1" onChange={inputHandler} value={editPost.body} name="body"/> : <span className="post_content">{editPost.body}</span>}
            </div>
            <div className="post_footer">
            {(comments) ? 
                <>
                {comments.map(e => {
                return <CommentTemplate text={e.text} key={e.id} id={e.id} postId={id} onCommentChange={onCommentChange} onCommentDelete={onCommentDelete}/>}
                )}
                <CommentInput id={id} newCommentHandler={newCommentHandler}/>
                </>
                : <Link to={{
                pathname: `/posts/${id}`
            }}><span>Show more...</span>
            </Link>}
            </div>
        </div>
    )
}

export { PostTemplate };