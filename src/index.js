import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/STATE";

import App from "./App";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntreTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateAddPost={store.updateAddPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateAddMessage={store.updateAddMessage.bind(store)}/>
        </BrowserRouter>
    );
}

rerenderEntreTree(store.getState());
store.subscribe(rerenderEntreTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
