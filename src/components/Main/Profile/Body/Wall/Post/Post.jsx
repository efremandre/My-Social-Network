import React from 'react';
import classes from './Post.module.css';
import Photo from "./Photo/Photo";
import PostItem from "./PostItem/PostItem";
import Button from "./Button/Button";

const Post = (props) => {
	return (
		<div className={classes.post} id={props.id}>
			<div className={classes.post_row}>
				<Photo avatar={props.avatar}/>
				<PostItem name={props.name} message={props.message} />
			</div>
			<Button likes={props.likes} dislikes={props.dislikes} />
		</div>
	)
}

export default Post;