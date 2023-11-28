const SetLayoutsHeader = () => {

	const testStorage = {
		colOne:'ID',
		colTwo:'NAME',
		colThree:'SURNAME',
		colFour:'LASTNAME',
		colFive:'AGE',
		colSix:'SEX'
	};

	return (
		<tr className='table-header__head-line'>
			<td>{testStorage.colOne}</td>
			<td>{testStorage.colTwo}</td>
			<td>{testStorage.colThree}</td>
			<td>{testStorage.colFour}</td>
			<td>{testStorage.colFive}</td>
			<td>{testStorage.colSix}</td>
		</tr>
	);
};

export default SetLayoutsHeader;