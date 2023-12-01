import '../../assets/css/components/ActionButton/ActionButton.css';

const DeleteButton = ({userId,toRetry}) => {
	if(!userId) return;

	const deleteUser = async () => {
		try {
			const response = await fetch(`http://localhost:5000/api/v1/user-personal/delete-current-user/${userId}`,{
				method: 'delete'
			}); 
			if(response.ok){
				const deleteMessage = await response.json();
				console.log(deleteMessage);
				toRetry();
			}else{
				throw new Error(`User with id=${userId} not found`,404);	
			}
		} catch (error) {
			console.log(error.message);
		}
    };
	return(
		<button className="action-button__delete action-button" onClick={() => deleteUser()}><p>delete</p>
		</button>
	);
};

export default DeleteButton;