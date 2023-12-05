import SetInfoPart from '../SetPartsOfCurrUsersData/SetInfoPart';
import SetTransactionPart from '../SetPartsOfCurrUsersData/SetTransactionPart';
import SetWorkPart from '../SetPartsOfCurrUsersData/SetWorkPart';
import SetCardPart from '../SetPartsOfCurrUsersData/SetCardPart';
import useFetch from '../../../hooks/useFetch';


const SetLayoutCurrentUserData = ({user}) => {

	const {loading, value} = useFetch(`http://localhost:5000/api/v1/user-cards/${user.id_accounts}`,{},[user.id_accounts]);
	return (
		<>
			<SetInfoPart email={user.useremail} phoneNumber={user.userphonenumber} homeAdress={user.userhomeadress}/>
			<SetTransactionPart income={user.totalincome} expensive={user.totalexpinsive} transfer={user.totaltransfer}/>
			<SetWorkPart workPlace={user.workplace} workIncome={user.workincome} creditConfirm={user.creditcanconfirmed}/>
			{loading ? 'waiting' : <SetCardPart cardInfo={value}/>}
		</>
	);
};
export default SetLayoutCurrentUserData;