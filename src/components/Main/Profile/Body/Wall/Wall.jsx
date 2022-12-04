import React from 'react';
import classes from './Wall.module.css';
import Post from "./Post/Post";
import FormWall from "./FormWall/FormWall";
import Title from "./Title/Title";

const Wall = (props) => {
	const Posts = props.dataPostForBody.map((p, index) => <Post key={index} id={p.id} name={p.name} avatar={p.avatar} message={p.message} likes={p.likes} dislikes={p.dislikes}/> );
	return (
		<div className={classes.wall}>
			<Title />
			<FormWall />
			{Posts}
		</div >
	)
}

export default Wall;