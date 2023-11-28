import './assets/css/App/App.css';
import TopLeftLayout from './components/layouts/TopLeftLayout/TopLeftLayout';
import TopRightLayout from './components/layouts/TopRightLayout/TopRightLayout';
import BotLeftLayout from './components/layouts/BotLeftLayout/BotLeftLayout';
import BotRightLayout from './components/layouts/BotRightLayout/BotRightLayout';

import useFetch from './hooks/useFetch';
import { useState } from 'react';

function App() {

	const [currentUsertId, setCerrentUserId] = useState(null);
	const [currentUserInfo, setCurrentUserInfo] = useState(null);
	const {value: users} = useFetch('http://localhost:5000/api/v1/user-personal', {}, [currentUsertId]);

	return (
		<>
			<TopLeftLayout/>
			<TopRightLayout selectedUser={currentUsertId}/>
			<BotLeftLayout  items={users} setLastId={setCerrentUserId} getUserInfo={setCurrentUserInfo}/>
			<BotRightLayout selectedUser={currentUserInfo}/>
		</>
	);
}

export default App;
