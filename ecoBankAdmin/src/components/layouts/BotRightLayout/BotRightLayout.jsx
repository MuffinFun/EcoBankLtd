import '../../../assets/css/components/layouts/BotRightLayout/BotRightLayout.css';
import SetLayoutCurrentData from '../../CurrentUserData/setLayoutCurrentData/SetLayoutCurrentData';

const BotRightLayout = ({selectedUser}) => {


	return (
		<div className="bot-right-container container">
			{!selectedUser ? <p>choose user</p> : <SetLayoutCurrentData user={selectedUser}/>}
		</div>
	);
};
export default BotRightLayout;