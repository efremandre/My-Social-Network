import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

	return (
		<div className={classes.post}>
			<div className={classes.post_row}>
				<div className={classes.photo}>
					<img src={props.urlPhoto} alt="Users" />
				</div>

				<div className={classes.text}>
					<h4>{props.userName}</h4>
					<p>{props.message}</p>
				</div>
			</div>
			<div className={classes.button}>
				<span class={classes.like}>{props.like}</span>
				<span class={classes.dislike}>{props.dislike}</span>
			</div>
		</div>
	)
}

export default Post;