import '../../assets/css/components/layouts/BotRightLayout/BotRightLayout.css';
import SetLayoutCurrentCompanyData from '../CurrentCompanyData/SetLayoutCurrentCompanyData/SetLayoutCurrentCompanyData';

const CompanyDataComponent = ({companyData}) => {


	return (
		<div className="bot-right-container container">
			{!companyData ? <p>choose company</p> : <SetLayoutCurrentCompanyData company={companyData}/>}
		</div>
	);
};
export default CompanyDataComponent;