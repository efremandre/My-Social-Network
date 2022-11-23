import React from 'react';
import c from './Messages.module.css';
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    const path = '/messages/' + props.id;

    return (
        <li>
            <NavLink to={path} className={c.dialog}>
                <img src={props.urlImg} alt="Avatar" className={c.avatar}/>
                <span className={c.userName}>{props.name}</span>
            </NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div className={c.item}>
            <div className={c.userName}></div>
            <div className={c.message}>{props.message}</div>
        </div>
    )
}

const Messages = (props) => {
    return (
            <div className='wrapper-component'>
                <h2 className={c.title}>Messages</h2>
                <div className={c.dialogs}>
                    <div className={c.dialogsItems}>
                        <ul>
                            <DialogItems name='Dymich' id='1' urlImg='https://www.blast.hk/attachments/68493/'/>
                            <DialogItems name='Andrey' id='2' urlImg='https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'/>
                            <DialogItems name='Sveta' id='3' urlImg='https://demotivation.ru/wp-content/uploads/2021/10/3-32.jpg' />
                            <DialogItems name='Valera' id='4' urlImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7ktobmis68f6L18AowLqKzIAFN-16Je2q5v2fyaeW7e3M9EHZkPDxg9qPIYjpSWW4wE&usqp=CAU' />
                            <DialogItems name='Anna' id='5' urlImg='https://img.freepik.com/premium-vector/avatars-with-different-emotions-girl-with-pink-curlers-and-yellow-patches-fashion-avatar-in-flat-vector-art_427567-1535.jpg' />
                            <DialogItems name='Max' id='6' urlImg='https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg' />
                        </ul>
                    </div>
                    <div className={c.messages}>
                        <Message message='Hi!' />
                        <Message message='Hello!' />
                        <Message message='How are you?' />
                        <Message message='Nice)' />
                    </div>
                </div>
            </div>
    )
}

export default Messages;