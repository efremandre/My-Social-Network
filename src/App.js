import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from "./components/Main/Profile/Profile";
import Messages from "./components/Main/Messages/Messages";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Setting from "./components/Main/Setting/Setting";

const App = (props) => {
	return (
			<div className='wrapper'>
				<div className='grid'>
					<Header />
					<Sidebar />
					<div className="content">
						<Routes>
							<Route path='/profile/' element={<Profile posts={props.state.profilePage} addPost={props.addPost} />} />
							<Route path='/messages/*' element={<Messages dialogs={props.state.messagesPage} messages={props.state.messagesPage} />} />
							<Route path='/news/' element={<News />} />
							<Route path='/music/' element={<Music />} />
							<Route path='/setting/' element={<Setting />} />
						</Routes>
					</div>
				</div>
			</div>
	);
}

export default App;
