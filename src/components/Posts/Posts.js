import './Posts.scss';
import { PostTemplate } from "../PostTemplate/PostTemplate"
const Posts = ({posts, deleteHandler, editHandler}) => {
    return (
        <section className="posts">
            <div className="container">
                {posts.map(e => (<PostTemplate
                id={e.id}
                key={e.id}
                title={e.title}
                body={e.body}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
                toolBox
                />))}
            </div>
        </section>
    )
}
export { Posts };