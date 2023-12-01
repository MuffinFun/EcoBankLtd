import '../../assets/css/components/ActionButton/ActionButton.css';

const UpdateButton = ({userId, toRetry}) => {
	if(!userId) return;
	const updateUser = (id) => {
		toRetry();
		console.log('update      ' + id);
	};
	return(
		<button className="action-button__update action-button" onClick={() => updateUser(userId)}><p>update</p>
		</button>
	);
};

export default UpdateButton;