import React from 'react';
import c from './Messages.module.css';
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    const path = '/messages/' + props.id;

    return (
        <li>
            <NavLink to={path} className={c.dialog}>
                <img src={props.avatar} alt="Avatar" className={c.avatar}/>
                <span className={c.userName}>{props.name}</span>
            </NavLink>
        </li>
    )
}

const MessageItems = (props) => {
    return (
        <div className={c.item}>
            <div className={c.userName}></div>
            <div className={c.message}>{props.message}</div>
        </div>
    )
}

const Messages = (props) => {
    const Dialogs = props.dialog.map((d, index) => <DialogItems key={index} id={d.id} name={d.name} avatar={d.avatar} />);
    const Messages = props.messages.map((m, index) => <MessageItems key={index} id={m.id} message={m.message} />);

    return (
            <div className='wrapper-component'>
                <h2 className={c.title}>Messages</h2>
                <div className={c.dialogs}>
                    <div className={c.dialogsItems}>
                        <ul>
                            {Dialogs}
                        </ul>
                    </div>
                    <div className={c.messages}>
                        {Messages}
                    </div>
                </div>
            </div>
    )
}

export default Messages;