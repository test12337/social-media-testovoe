import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({modalChange, modalSubmit, error}) => {
    const [newPost, setNewPost] = useState({
        id : '',
        title : '',
        body : '',
    });
    const inputHandler = (e) => {
        setNewPost({...newPost, [e.target.name] : e.target.value})
    };
    return (error) ? (
        <div className="modal">
            <div className="modal_wrapper">
                <div className="modal_header">
                    <h2 className="modal_title">Error</h2>
                    <button className="close" onClick={() => modalChange(false)}></button>
                </div>
                <div className="modal_body">
                    Something gone wrong...error type:{error}
                </div>
            </div>
        </div>
    )
    :
    (
        <div className="modal">
            <div className="modal_wrapper">
                <div className="modal_header">
                    <h2 className="modal_title">Hello</h2>
                    <button className="close" onClick={() => modalChange(false)}></button>
                </div>
                <div className="modal_body">
                    <form>
                        <div className="form_group">
                            <p>Header</p>
                            <textarea required className="form_input" name="title" onChange={inputHandler} placeholder="Post header..." type="text"/>
                        </div>
                        <div className="form_group">
                            <p>Post</p>
                            <textarea required className="form_input" name="body" onChange={inputHandler} placeholder="Post body..." type="text"/>
                        </div>
                    </form>
                </div>
                <div className="modal_footer">
                    <button className="success" onClick={() => {
                        modalSubmit(newPost)
                        modalChange(false)
                    }
                    }>Save</button>
                    <button onClick={() => modalChange(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export { Modal };