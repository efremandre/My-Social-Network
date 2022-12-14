import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import state, {subscribe} from "./redux/STATE";

import App from "./App";
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

rerenderEntreTree(state);
subscribe(rerenderEntreTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
