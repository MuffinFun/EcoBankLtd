import { useEffect, useState } from 'react';
import SetLayoutHeaderCell from './SetLayOutHeaderCell';

const SetLayoutsHeader = ({check}) => {

	const [currentNamesOfColumn,setCurrentNames] = useState(['1','2','3','4','5','6']);
	
	useEffect(()=>{
		const currentNames = check ? ['DB_ID','NAME','SURNAME','LASTNAME','AGE','SEX'] : ['DB-ID','NAME','PHONENUMBER','EMAIL','ADRESS','BUILDINGS'];
		setCurrentNames(currentNames);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[check]);


	return (
		<tr className='table-header__head-line'>
			<th className='header__cell'>ID</th>
			{currentNamesOfColumn.map((item, ind)=><SetLayoutHeaderCell key={ind+1} item={item}/>)}
		</tr>
	);
};

export default SetLayoutsHeader;