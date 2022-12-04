import React from 'react';
import classes from './PostItem.module.css';

const PostItem = (props) => {
	return (
		<div className={classes.text}>
			<h4>{props.name}</h4>
			<p>{props.message}</p>
		</div>
	)
}

export default PostItem;