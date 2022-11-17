import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import classes from './Body.module.css';

const Body = () => {
	return (
		<div className={classes.body}>
			<div className={classes.info}>
				ava+desc
			</div>
			<MyPosts />
			<div className={classes.new_post}>
				Post 1
			</div>
			<div className={classes.new_post}>
				Post 2
			</div>
			<div className={classes.new_post}>
				Post 3
			</div>
		</div>
	)
}

export default Body;