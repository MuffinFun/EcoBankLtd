

const DeleteButton = ({userId}) => {
	if(!userId) return;

    const deleteUser = (id) => {
        console.log('delete     ' + id);
    };

	return(
		<button onClick={() => deleteUser(userId)}><p>delete</p>
		</button>
	);
};

export default DeleteButton;