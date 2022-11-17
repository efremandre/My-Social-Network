import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.header}>
			</div>
			<div className={classes.body}>
				<div className={classes.info}>
					ava+desc
				</div>
				<div className={classes.post}>
					My Post
				</div>
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
		</div>
	)
}

export default Profile;