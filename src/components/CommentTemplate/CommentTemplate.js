import React, {useState} from "react";
import './CommentTemplate.scss';
import { ToolBox } from "../ToolBox/ToolBox";
const CommentTemplate = ({text, onCommentChange, onCommentDelete, id, postId}) => {
    const [contentEditable, setContentEditable] = useState(false);
    const [editComment, setEditComment] = useState({
        id : id,
        postId : postId,
        text : text,
        previousState : text
    });
    const inputHandler = (e) => {
       setEditComment({...editComment, [e.target.name] : e.target.value});
    };
    return (
        <div className="comment">
            {(contentEditable) ? 
            <textarea required onChange={inputHandler} name="text" value={editComment.text}/>
            : 
            <span>{editComment.text}</span>}
            <ToolBox
            comments
            setContentEditable={setContentEditable}
            contentEditableStatus={contentEditable}
            deleteHandler={() => onCommentDelete(id)} 
            editHandler={() => {
            onCommentChange(editComment, id)}
            }
            returnStateHandler={() => setEditComment({
                ...editComment, text : editComment.previousState
            })}
            editStateOnSave={() => setEditComment({
                ...editComment, previousState : editComment.text
            })}
            />
        </div>
    )
}

export { CommentTemplate };