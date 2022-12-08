import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateAddMessage, updateAddPost} from "./redux/STATE";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntreTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateAddPost={updateAddPost}
                 addMessage={addMessage}
                 updateAddMessage={updateAddMessage}/>
        </BrowserRouter>
    );
}
