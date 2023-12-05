import '../../../assets/css/components/layouts/TopLeftLayout/TopLeftLayout.css';
import ToggleDataButton from '../../ActionButton/ToggleDataButton';

const TopLeftLayout = ({switchData,switchCurrData, toggleColumnsName, checking, clearCurrentData}) => {

	return (
		<div className="top-left-container container">
			<ToggleDataButton clearData={clearCurrentData} checking={checking} switchData={switchData} switchCurrData={switchCurrData} toggleColumnsName={toggleColumnsName}/>
		</div>
	);
};
export default TopLeftLayout;