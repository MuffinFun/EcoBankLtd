import SetActivitiesPart from '../SetPartsOfCurrCompanyData/SetActivitiesPart';
import SetBenefitsPart from '../SetPartsOfCurrCompanyData/SetBenefitsPart';
import SetPartnersPart from '../SetPartsOfCurrCompanyData/SetPartnersPart';
import SetOffersPart from '../SetPartsOfCurrCompanyData/SetOffersPart';

import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';

const SetLayoutCurrentCompanyData = ({company}) => {

	const [activities, setActivities] = useState(null);
	const [benefits, setBenefits] = useState(null);
	const [partners, setPartners] = useState(null);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(()=>{
		const getActivities = company.map(item=>item['activitiesname']);
		const getBenefits = company.map(item=>item['benefitsname']);
		const getPartners = company.map(item=>item['parnername']);
		setActivities(getActivities);
		setBenefits(getBenefits);
		setPartners(getPartners);
	},[company]);

	const {loading, value: offers} = useFetch(`http://localhost:5000/api/v1/companies/current-company-info/${company[0].id_commcompany}`,{},[company.id_commcompany]);

	return (
		<>
			<SetActivitiesPart activities={activities}/>
			<SetBenefitsPart benefits={benefits}/>
			<SetPartnersPart partners={partners}/>
			{loading ? <p>waiting...</p> : <SetOffersPart offers={offers}/>}	
		</>
	);
};
export default SetLayoutCurrentCompanyData;