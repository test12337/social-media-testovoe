import React, { useEffect, useState } from "react"
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { PostTemplate } from "../PostTemplate/PostTemplate";
const ExtendedPost = ({postId}) => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useLocalStorage('comments', []);
    useEffect(() => {
    setPost(JSON.parse(localStorage.getItem('posts'))[JSON.parse(localStorage.getItem('posts')).findIndex(e => e.id === postId)])
    setComments(JSON.parse(localStorage.getItem('comments')) ? (JSON.parse(localStorage.getItem('comments')).filter(e => e.postId === postId)) : []);
    }, [postId])
    postId = Number(postId);
    const onNewComment = (commentProperties) => {
        let modifiedPost = commentProperties;
        modifiedPost.id = comments[comments.length - 1] ? comments[comments.length - 1].id + 1 : 1;
        setComments([...comments, modifiedPost])
    }
    const onCommentChange = (postProperties, id) => {
        let modifiedPost = comments;
        modifiedPost[comments.findIndex(e => e.id === id)] = postProperties;
        setComments(modifiedPost)
    }
    const onCommentDelete = (id) => {
        const modifiedPosts = comments.filter(e => e.id !== id)
        setComments(modifiedPosts)
    }
    return (
        <>
        {(Object.keys(post).length) ? 
        <div className="container">
            <PostTemplate id={postId} title={post.title} body={post.body} comments={comments.filter(e => e.postId === postId)} 
            newCommentHandler={onNewComment}
            onCommentChange={onCommentChange}
            onCommentDelete={onCommentDelete}
            />
        </div>
         : 
        null}
        </>
    )
}

export { ExtendedPost };