import React from 'react';
import classes from './Wall.module.css';
import Post from "./Post/Post";
import FormWall from "./FormWall/FormWall";

const Wall = () => {

	const postData = [
		{id: 1, name: 'Alicia Vagner', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', message: 'Hello! My first great post!', likes: 1, dislikes: 0,},
		{id: 2, name: 'Tom E', avatar: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', message: 'Fuck You!', likes: 1, dislikes: 10,},
		{id: 3, name: 'Dima', avatar: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg', message: 'Hmm... Interesting', likes: 3, dislikes: 0,},
		{id: 4, name: 'Julia Kotik', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png', message: 'Hi! )))', likes: 10, dislikes: 0,},
	]

	return (
		<div className={classes.wall}>
			<h2 className={classes.title}>Wall</h2>
			<FormWall />
			<Post id={postData[0].id} name={postData[0].name} avatar={postData[0].avatar} message={postData[0].message} likes={postData[0].likes} dislikes={postData[0].dislikes} />
			<Post id={postData[1].id} name={postData[1].name} avatar={postData[1].avatar} message={postData[1].message} likes={postData[1].likes} dislikes={postData[1].dislikes} />
			<Post id={postData[2].id} name={postData[2].name} avatar={postData[2].avatar} message={postData[2].message} likes={postData[2].likes} dislikes={postData[2].dislikes} />
			<Post id={postData[3].id} name={postData[3].name} avatar={postData[3].avatar} message={postData[3].message} likes={postData[3].likes} dislikes={postData[3].dislikes} />
		</div >
	)
}

export default Wall;