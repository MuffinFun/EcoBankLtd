import '../../../assets/css/components/layouts/BotRightLayout/BotRightLayout.css';
import SetLayoutCurrentData from '../../setLayoutCurrentData/SetLayoutCurrentData';

const BotRightLayout = ({selectedUser}) => {

	return (
		<div className="bot-right-container container">
			<SetLayoutCurrentData user={selectedUser}/>

			<div>some precents придумаю еще</div>
			<div>some precents придумаю еще</div>
		</div>
	);
};
export default BotRightLayout;