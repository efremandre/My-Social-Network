import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	return (
			<div className={classes.button}>
				<span className={classes.like}>{props.likes}</span>
				<span className={classes.dislike}>{props.dislikes}</span>
			</div>
	)
}

export default Button;