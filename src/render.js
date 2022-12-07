import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/STATE";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntreTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    );
}
