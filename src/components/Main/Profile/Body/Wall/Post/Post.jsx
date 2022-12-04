import React from 'react';
import classes from './Post.module.css';
import Photo from "./Photo/Photo";

const Post = (props) => {
	return (
		<div className={classes.post} id={props.id}>
			<div className={classes.post_row}>
				<Photo avatar={props.avatar}/>
				<div className={classes.text}>
					<h4>{props.name}</h4>
					<p>{props.message}</p>
				</div>
			</div>
			<div className={classes.button}>
				<span className={classes.like}>{props.likes}</span>
				<span className={classes.dislike}>{props.dislikes}</span>
			</div>
		</div>
	)
}

export default Post;