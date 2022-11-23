import React from 'react';
import classes from './Body.module.css';
import Info from './Info/Info';
import Wall from './Wall/Wall';

const Body = () => {
	return (
		<div className={classes.body}>
			<Info />
			<Wall />
		</div>
	)
}

export default Body;