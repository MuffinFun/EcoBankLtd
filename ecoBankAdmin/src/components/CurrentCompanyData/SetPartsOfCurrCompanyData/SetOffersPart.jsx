import '../../../assets/css/components/CurrentCompanyData/Offers.css';

import OffersList from '../CompanyDataLists/OffersList';


const SetOffersPart = ({offers}) =>{
    return (
        <div className='company-info__offers'>
				{offers.map((item, ind)=><OffersList key={ind} name={item.offername} coast={item.offercoast} confirmed={item.offerconfirmed}/>)}
		</div>
    );
};

export default SetOffersPart;