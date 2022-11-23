import React from 'react';
import c from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className='wrapper-component'>
            <h2 className={c.title}>Messages</h2>
            <div className={c.dialogs}>

                <div className={c.dialogsItems}>
                    <ul>
                        <li>
                            <NavLink to='/massages/1' className={c.dialog}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Dymich</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/massages/2' className={c.dialog + ' ' + c.active}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Andrey</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/massages/3' className={c.dialog}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Sveta</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/massages/4' className={c.dialog}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Valera</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/massages/5' className={c.dialog}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Anna</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/massages/6' className={c.dialog}>
                                <img src="#" alt="Avatar" className={c.avatar}/>
                                <span className={c.userName}>Max</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={c.messages}>
                    <div className={c.item}>
                        <div className={c.userName}></div>
                        <div className={c.message}>Hi!</div>
                    </div>
                    <div className={c.item}>
                        <div className={c.userName}></div>
                        <div className={c.message}>Hello</div>
                    </div>
                    <div className={c.item}>
                        <div className={c.userName}></div>
                        <div className={c.message}>How are you?</div>
                    </div>
                    <div className={c.item}>
                        <div className={c.userName}></div>
                        <div className={c.message}>Nice)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;