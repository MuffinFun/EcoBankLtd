import '../../../assets/css/components/layouts/TopRightLayout/TopRightLayout.css';
import UpdateButton from '../../ActionButton/UpdateButton';
import DeleteButton from '../../ActionButton/DeleteButton';

const TopRightLayout = ({selectedUser, toRetry, activateForm}) => {
	return (
		<div className="top-right-container container"> 
			<UpdateButton userId={selectedUser} activateForm={activateForm}/>
			<DeleteButton userId={selectedUser} toRetry={toRetry}/>
		</div>
	);
};
export default TopRightLayout;