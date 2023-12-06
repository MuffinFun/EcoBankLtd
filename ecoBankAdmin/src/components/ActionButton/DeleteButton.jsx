import '../../assets/css/components/ActionButton/ActionButton.css';

const DeleteButton = ({setAction, activate}) => {
	const prepareToDelete = ()=>{
		setAction('delete');
		activate();
	};

	return(
		<button className="action-button__delete action-button" onClick={() => prepareToDelete()}><p>delete</p>
		</button>
	);
};

export default DeleteButton;