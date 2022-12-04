import React from 'react';
import classes from './Photo.module.css';

const Photo = (props) => {
	return (
		<div className={classes.photo}>
			<img src={props.avatars} alt="Users" />
		</div>
	)
}

export default Photo;