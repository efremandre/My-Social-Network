import React from 'react';
import classes from './Wall.module.css';
import Post from "./Post/Post";
import FormWall from "./FormWall/FormWall";

const Wall = () => {
	return (
		<div className={classes.wall}>
			<h2 className={classes.title}>Wall</h2>
			<FormWall />
			<Post message='Hello! How aer you?' urlPhoto='https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg' userName='Alicia Vagner' like='5' dislike='0' />
			<Post message='Fuck You!' urlPhoto='https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg' userName='Tom E' like='0' dislike='6' />
			<Post message='Hmm... Interesting' urlPhoto='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' userName='Dima' like='2' dislike='0' />
			<Post message='Hi! )))' urlPhoto='https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png' userName='Julia Kotik' like='10' dislike='0' />
		</div >
	)
}

export default Wall;