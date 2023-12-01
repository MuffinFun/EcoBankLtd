import SetInfoPart from '../SetPartsOfCurrData/SetInfoPart';
import SetTransactionPart from '../SetPartsOfCurrData/SetTransactionPart';
import SetWorkPart from '../SetPartsOfCurrData/SetWorkPart';
import SetCardPart from '../SetPartsOfCurrData/SetCardPart';
import useFetch from '../../../hooks/useFetch';


const SetLayoutCurrentData = ({user}) => {

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
export default SetLayoutCurrentData;