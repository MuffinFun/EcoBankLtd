import { useState } from 'react';
import '../../assets/css/components/ActionButton/ActionButton.css';

const UpdateButton = ({selectedId, activate, activateConfirm, setAction}) => {
	const [isEditing, setIsEditing] = useState(true);
	if(!selectedId) return;
	const prepareToUpdate = () => {
		setAction('update');
		activate();
		activateConfirm();
		setIsEditing(!isEditing);
	};
	return(
		<button className="action-button__update action-button" onClick={() => prepareToUpdate(selectedId)}>
			<p>{isEditing ? 'Edit main info':'Close edit form'}</p>
		</button>
	);
};

export default UpdateButton;