import { useState } from 'react';
import '../../assets/css/components/ActionButton/ActionButton.css';

const UpdateButton = ({userId, activateForm}) => {
	const [buttonTittle, setButtonTittle] = useState('Edit User');
	const [push, setPush] = useState(false);
	if(!userId) return;
	const updateUser = () => {
		//toRetry();
		activateForm(push);
		setButtonTittle('Edit User');
		setPush(!push);
	};
	return(
		<button className="action-button__update action-button" onClick={() => updateUser(userId)}>
			<p>{buttonTittle}</p>
		</button>
	);
};

export default UpdateButton;