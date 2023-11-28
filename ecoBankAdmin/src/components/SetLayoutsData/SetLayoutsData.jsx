import useFetch from '../../hooks/useFetch';
const SetLayoutsData = ({onSelectGetId, value, onSelectUser}) => {

	const {value: userInfo } = useFetch('http://localhost:5000/api/v1/user-personal/current-user-info', {}, []);


	const getData = ()=>{
		onSelectGetId(value.id_accounts);
		const info = userInfo.find(e => e.id_accounts == value.id_accounts);
		onSelectUser(info);
	};

	return (
		<tr onClick={getData} className='table-body__body-line'>
			<td>{value.id_accounts}</td>
			<td>{value.username}</td>
			<td>{value.usersurname}</td>
			<td>{value.userlastname}</td>
			<td>{value.userage}</td>
			<td>{value.usersex}</td>
		</tr>
	);
};

export default SetLayoutsData;