import React from 'react';
import classes from './Body.module.css';
import Info from './Info/Info';
import Wall from './Wall/Wall';

const Body = (props) => {

	return (
		<div className={classes.body}>
			<Info />
			<Wall dataPost2 = {props.dataPost} />
		</div>
	)
}

export default Body;