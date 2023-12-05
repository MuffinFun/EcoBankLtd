import '../../../assets/css/components/CurrentCompanyData/Partners.css';
import PartnersList from '../CompanyDataLists/PartnersList';

const SetPartnersPart = ({partners}) =>{

    return (
        <div className='company-info__partners'>
            {!partners ? <p>dont have benefits</p>: partners.map((item,ind)=><PartnersList key={ind+1} item={item}/>)}
		</div>
    );
};

export default SetPartnersPart;