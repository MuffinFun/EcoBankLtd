const SetLayoutsHeader = () => {

	const columnName = {
		colOne:'ID',
		colTwo:'NAME',
		colThree:'SURNAME',
		colFour:'LASTNAME',
		colFive:'AGE',
		colSix:'SEX'
	};

	return (
		<tr className='table-header__head-line'>
			<td>{columnName.colOne}</td>
			<td>{columnName.colTwo}</td>
			<td>{columnName.colThree}</td>
			<td>{columnName.colFour}</td>
			<td>{columnName.colFive}</td>
			<td>{columnName.colSix}</td>
		</tr>
	);
};

export default SetLayoutsHeader;