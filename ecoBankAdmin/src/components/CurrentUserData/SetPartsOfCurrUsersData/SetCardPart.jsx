import '../../../assets/css/components/CurrentUserData/SetCardPart.css';
import UserCardList from '../UserCardList/UserCardList';

const SetCardPart = ({cardInfo})=>{

    return (
		<div className='user-info__card cards'>
			{cardInfo.map((e, i)=> <UserCardList key={i}  name={e.cardtypename} date={e.expireson} pin={e.pincode} cvv={e.cvv}/>)}

		</div>
        
    );
};
export default SetCardPart;