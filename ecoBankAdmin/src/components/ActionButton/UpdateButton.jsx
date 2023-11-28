const UpdateButton = ({userId}) => {
	if(!userId) return;
	const updateUser = (id) => {

		console.log('update      ' + id);
	};
	return(
		<button onClick={() => updateUser(userId)}><p>update</p>
		</button>
	);
};

export default UpdateButton;