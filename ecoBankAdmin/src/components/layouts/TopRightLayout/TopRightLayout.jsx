import '../../../assets/css/components/layouts/BotLeftLayout/BotLeftLayout.css';
import UpdateButton from '../../ActionButton/UpdateButton';
import DeleteButton from '../../ActionButton/DeleteButton';

const TopRightLayout = ({selectedUser}) => {
	return (
		<div className="top-right-container container"> 
			<UpdateButton userId={selectedUser}/>
			<DeleteButton userId={selectedUser}/>
		</div>
	);
};
export default TopRightLayout;