import React from 'react';
import c from './Messages.module.css';

const Messages = () => {
    return (
        <div className='wrapper-component'>
            <h2 className={c.title}>Messages</h2>
            <div className={c.dialogs}>

                <div className={c.dialogsItems}>
                    <ul>
                        <li className={c.dialog}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Dymich</span>
                        </li>
                        <li className={c.dialog + ' ' + c.active}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Andrey</span>
                        </li>
                        <li className={c.dialog}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Sveta</span>
                        </li>
                        <li className={c.dialog}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Valera</span>
                        </li>
                        <li className={c.dialog}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Anna</span>
                        </li>
                        <li className={c.dialog}>
                            <img src="#" alt="Avatar" className={c.avatar}/>
                            <span className={c.userName}>Max</span>
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