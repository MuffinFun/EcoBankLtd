
const SetLayoutCurrentData = ({user}) => {

	if(!user) return;

	return (
		<>
			<div className='user-info__info'>
				<div>{user.useremail}</div>
				<div>{user.userphonenumber}</div>
				<div>{user.userhomeadress}</div>
			</div>
			<div className='user-info__transactions'>
				<div>{user.totalincome}</div>
				<div>{user.totalexpinsive}</div>
				<div>{user.totaltransfer}</div>
			</div>
		</>
	);
};
export default SetLayoutCurrentData;