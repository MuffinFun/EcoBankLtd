import '../../assets/css/components/layouts/BotRightLayout/BotRightLayout.css';
import SetLayoutCurrentUserData from '../CurrentUserData/setLayoutCurrentUserData/SetLayoutCurrentUserData';

const UsersDataComponent = ({usersData}) => {

	return (
		<div className="bot-right-container container">
			{!usersData ? <p>choose user</p> : <SetLayoutCurrentUserData user={usersData}/>}
		</div>
	);
};
export default UsersDataComponent;