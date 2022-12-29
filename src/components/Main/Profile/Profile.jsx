import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

const Profile = (props) => {
	return (
		<div>
			<Header />
			<Body posts = {props.posts}
				  newPostText={props.posts.newPostText}
				  dispatch={props.dispatch}/>
		</div>
	)
}

export default Profile;