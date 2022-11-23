import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Main/Profile/Profile';
import Messages from './components/Main/Messages/Messages';
import News from './components/Main/News/News';
import Music from './components/Main/Music/Music';
import Setting from './components/Main/Setting/Setting';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<div className='grid'>
					<Header />
					<Sidebar />
					<div className="content">
						<Routes>
							<Route path='/profile/' element={<Profile />} />
							<Route path='/messages/*' element={<Messages />} />
							<Route path='/news/' element={<News />} />
							<Route path='/music/' element={<Music />} />
							<Route path='/setting/' element={<Setting />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
