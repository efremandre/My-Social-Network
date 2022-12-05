import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

const Profile = (props) => {
	return (
		<div>
			<Header />
			<Body posts = {props.posts}/>
		</div>
	)
}

export default Profile;