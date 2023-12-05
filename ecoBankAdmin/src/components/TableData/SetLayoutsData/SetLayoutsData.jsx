import '../../../assets/css/animations/hoverTR.css';
import useFetch from '../../../hooks/useFetch';

const SetLayoutsData = ({onSelectGetId, value, onSelectData,id,currentDataURL, checkWhatData}) => {
	
	const {value: currentData} = useFetch(currentDataURL, {}, []);

	const getData = (e)=>{
		e.preventDefault();
		onSelectGetId(value.id_accounts || value.id_commcompany);
		
		if(checkWhatData){
			const info = currentData.find(e => e.id_accounts == value.id_accounts);
			onSelectData(info);
		}else{
			const info = currentData.filter(e => e.id_commcompany == value.id_commcompany);
			onSelectData(info);
		}
	};

	return (
		<tr onClick={e=>getData(e)}>
			<td>{id+1}</td>
			<td>{value.id_accounts || value.id_commcompany}</td>
			<td>{value.username || value.companyname}</td>
			<td>{value.usersurname || value.companyphonenumber}</td>
			<td>{value.userlastname || value.companyemail}</td>
			<td>{value.userage || value.companyadress}</td>
			<td>{value.usersex || value.countofbuildings}</td>
		</tr>
	);
};

export default SetLayoutsData;