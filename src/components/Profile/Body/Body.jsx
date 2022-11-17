import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Body.module.css';
import Info from './Info/Info';
import Post from './Post/Post';

const Body = () => {
	return (
		<div className={classes.body}>
			<Info />
			<MyPosts />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default Body;