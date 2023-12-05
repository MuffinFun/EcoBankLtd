import UsersDataComponent from '../../BotRightData/UsersDataComponent';
import CompanyDataComponent from '../../BotRightData/CompanyDataCOmponent';

const BotRightLayout = ({selectedData, checkData}) => {

	return (
		<>
			{checkData ? <UsersDataComponent usersData={selectedData}/>:<CompanyDataComponent companyData={selectedData}/>}
		</>
	);
};
export default BotRightLayout;