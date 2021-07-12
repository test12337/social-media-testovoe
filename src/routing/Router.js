import {
    BrowserRouter,
    Route,
    Redirect,
} from "react-router-dom";
import { App } from '../components/app/App';
import { ExtendedPost } from '../components/ExtendedPost/ExtendedPost';
const Router = () => {
    return (
        <BrowserRouter>
                <Route exact path="/">
                    <Redirect to="/posts"/>
                </Route>
                <Route exact path="/posts" component={App}/>
                <Route path="/posts/:id" render={({match}) => <ExtendedPost postId={match.params.id}/>} />
        </BrowserRouter>
    )
}

export { Router };