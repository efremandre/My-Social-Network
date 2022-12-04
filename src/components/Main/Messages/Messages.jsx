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

    const dialogsData = [
        {id: 1, name: 'Dymich', avatar: 'https://www.blast.hk/attachments/68493/',},
        {id: 2, name: 'Andrey', avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg',},
        {id: 3, name: 'Sveta', avatar: 'https://demotivation.ru/wp-content/uploads/2021/10/3-32.jpg',},
        {id: 4, name: 'Valera', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7ktobmis68f6L18AowLqKzIAFN-16Je2q5v2fyaeW7e3M9EHZkPDxg9qPIYjpSWW4wE&usqp=CAU',},
        {id: 5, name: 'Anna', avatar: 'https://img.freepik.com/premium-vector/avatars-with-different-emotions-girl-with-pink-curlers-and-yellow-patches-fashion-avatar-in-flat-vector-art_427567-1535.jpg',},
        {id: 6, name: 'Max', avatar: 'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg',},
    ]

    const Dialog = dialogsData.map(d => <DialogItems id={d.id} name={d.name} avatar={d.avatar} />);

    const messagesData = [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'Hello!',},
        {id: 3, message: 'How are you?',},
        {id: 4, message: 'I fine! Thank you!',},
    ]

    const Message = messagesData.map(m => <MessageItems id={m.id} message={m.message} />);

    return (
            <div className='wrapper-component'>
                <h2 className={c.title}>Messages</h2>
                <div className={c.dialogs}>
                    <div className={c.dialogsItems}>
                        <ul>
                            {Dialog}
                        </ul>
                    </div>
                    <div className={c.messages}>
                        {Message}
                    </div>
                </div>
            </div>
    )
}

export default Messages;