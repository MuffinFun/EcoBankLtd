import '../../../assets/css/components/CurrentCompanyData/Activities.css';
import ActivitiesList from '../CompanyDataLists/ActivitiesList';

const SetActivitiesPart = ({activities}) =>{


    return (
        <div className='company-info__activities'>
            {!activities ? <p>dont have activities</p>: activities.map((item, ind) => <ActivitiesList key={ind+1} item={item}/>)}
        </div>
    );
};

export default SetActivitiesPart;