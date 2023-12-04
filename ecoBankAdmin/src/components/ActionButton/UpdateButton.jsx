import { useState } from 'react';
import '../../assets/css/components/ActionButton/ActionButton.css';

const UpdateButton = ({userId, activateForm}) => {
	const [isEditing, setIsEditing] = useState(true);
	const [push, setPush] = useState(false);
	if(!userId) return;
	const updateUser = () => {
		//toRetry();
		activateForm(push);
		setIsEditing(!isEditing);
		setPush(!push);
	};
	return(
		<button className="action-button__update action-button" onClick={() => updateUser(userId)}>
			<p>{isEditing ? 'Edit main info':'Close edit form'}</p>
		</button>
	);
};

export default UpdateButton;