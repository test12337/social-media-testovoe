import React from "react";
import './App.scss';
import { Header } from "../Header/Header";
import { Posts } from "../Posts/Posts";
import { NoDataNotification } from "../../notifications/dataStatus/NoDataNotification";
import { useLocalStorage } from "../Hooks/useLocalStorage";
const App = () => {
  const [posts, setPosts] = useLocalStorage('posts', []);
  const onNewPost = (postProperties) => {
    let modifiedPost = postProperties;
    modifiedPost.id = posts[posts.length - 1] ? posts[posts.length - 1].id + 1 : 1;
    setPosts([...posts, modifiedPost])
  }
  const onPostChange = (postProperties, id) => {
    let modifiedPost = posts;
    modifiedPost[posts.findIndex(e => e.id === id)] = postProperties;
    setPosts(modifiedPost);
  }
  const onPostDelete = (id) => {
    const modifiedPosts = posts.filter(e => e.id !== id);
    setPosts(modifiedPosts);
  }
  return (
    <>
      <section className="main">
        <Header modalSubmit={onNewPost}/>
        {(posts.length) ? <Posts posts={posts} deleteHandler={onPostDelete} editHandler={onPostChange}/> : <NoDataNotification/>}
      </section>
    </>
  )
}
export { App };