import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.post}>
			<div className={classes.post_row}>
				<div className={classes.photo}>
					<img src={props.avatar} alt="Users" />
				</div>

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