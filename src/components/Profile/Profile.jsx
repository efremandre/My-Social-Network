import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.profile}>
			<Header />
			<Body />
		</div>
	)
}

export default Profile;