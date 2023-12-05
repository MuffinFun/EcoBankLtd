import '../../../assets/css/components/CurrentCompanyData/Benefits.css';
import BenefitsList from '../CompanyDataLists/BenefitsList';


const SetBenefitsPart = ({benefits}) =>{

    return (
        <div className='company-info__benefits'>
            {!benefits ? <p>dont have benefits</p>: benefits.map((item,ind)=><BenefitsList key={ind+1} item={item}/>)}
		</div>
    );
};

export default SetBenefitsPart;