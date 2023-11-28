import '../../../assets/css/components/layouts/BotLeftLayout/BotLeftLayout.css';
import SetLayoutsData from '../../SetLayoutsData/SetLayoutsData';
import SetLayoutsHeader from '../../SetLayoutsData/SetLayoutHeader';


const BotLeftLayout = ({ items,setLastId, getUserInfo}) => {

	
	return (
		<table className="bot-left-container container">

			<thead className='table-header'>
				<SetLayoutsHeader/>
			</thead>
			
			<tbody className='table-body'>
				{items?.length > 0 ?items.map(e =><SetLayoutsData onSelectGetId={setLastId} onSelectUser={getUserInfo} key={e.id_accounts} value={e}/>):<></>}
			</tbody>

			<tfoot className='table-footer'>
				<tr>
					<td>konec</td>
				</tr>
			</tfoot>
		</table>
	);
};
export default BotLeftLayout;