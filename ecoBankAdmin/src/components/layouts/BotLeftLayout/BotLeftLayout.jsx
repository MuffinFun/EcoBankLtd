import '../../../assets/css/components/layouts/BotLeftLayout/BotLeftLayout.css';
import '../../../assets/css/components/Table/Table.css';
import SetLayoutsData from '../../TableData/SetLayoutsData/SetLayoutsData';
import SetLayoutsHeader from '../../TableData/SetLayoutsData/SetLayoutHeader';

const BotLeftLayout = ({ values, setLastId, getDataInfo, checkColumnNames, dataURL, checkWhatData}) => {

	return (
		<div className="bot-left-container container">

		<table >

			<thead >
				<SetLayoutsHeader check={checkColumnNames}/>
			</thead>
			
			<tbody>
				{values?.length > 0 ? values.map((e,i) => <SetLayoutsData checkWhatData={checkWhatData} currentDataURL={dataURL} onSelectGetId={setLastId} onSelectData={getDataInfo} key={i + 1} value={e} id={i}/>):<></>}
			</tbody>
		</table>
		</div>
	);
};
export default BotLeftLayout;