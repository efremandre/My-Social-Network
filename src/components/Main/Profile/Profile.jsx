import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';

const Profile = () => {

	const postData = [
		{id: 1, name: 'Alicia Vagner', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', message: 'Hello! My first great post!', likes: 1, dislikes: 0,},
		{id: 2, name: 'Tom E', avatar: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', message: 'Fuck You!', likes: 1, dislikes: 10,},
		{id: 3, name: 'Dima', avatar: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg', message: 'Hmm... Interesting', likes: 3, dislikes: 0,},
		{id: 4, name: 'Julia Kotik', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png', message: 'Hi! )))', likes: 10, dislikes: 0,},
	]

	return (
		<div>
			<Header />
			<Body dataPost = {postData}/>
		</div>
	)
}

export default Profile;