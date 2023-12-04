import './assets/css/App/App.css';
import TopLeftLayout from './components/layouts/TopLeftLayout/TopLeftLayout';
import TopRightLayout from './components/layouts/TopRightLayout/TopRightLayout';
import BotLeftLayout from './components/layouts/BotLeftLayout/BotLeftLayout';
import BotRightLayout from './components/layouts/BotRightLayout/BotRightLayout';
import UpdateUserData from './components/UpdateForm/UpdateDataAction/UpdateUserData';
import ConfirmWindow from './components/UpdateForm/ConfirmWindow/ConfirmWindow';

import useFetch from './hooks/useFetch';
import { useState } from 'react';

function App() {

	const [currentUserId, setCurrentUserId] = useState(null);
	const [currentUserInfo, setCurrentUserInfo] = useState(null);
	const [dataToUpdate, setDataToUpdate] = useState(null);

	const [retry, setRetry] = useState(false);

	const [hidden, setHidden] = useState(true);
	
	const {value: users} = useFetch('http://localhost:5000/api/v1/user-personal', {}, [retry]);

	const refresh = () =>{
		setRetry(!retry);
	};

	const activateForm = (property) => {
		setHidden(property);
	};

	const getData = (data)=> {
		setDataToUpdate(data);
	};

	return (
	<>
		<TopLeftLayout />
		<TopRightLayout selectedUser={currentUserId} toRetry={refresh} activateForm={activateForm}/>
		<BotLeftLayout  items={users} setLastId={setCurrentUserId} getUserInfo={setCurrentUserInfo}/>
		<BotRightLayout selectedUser={currentUserInfo}/>
		<UpdateUserData  hidden={hidden} currentValues={users} selectedUser={currentUserId} refresh={refresh} getData={getData}/>
		<ConfirmWindow dataToUpdate={dataToUpdate} selectId={currentUserId} users={users} refresh={refresh}/>
	</>
	);
}

export default App;
