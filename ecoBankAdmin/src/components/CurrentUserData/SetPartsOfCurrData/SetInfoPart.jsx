const SetInfoPart = ({email, phoneNumber, homeAdress})=>{
    return (
        
        <div className='user-info__info'>
				<div>{email}</div>
				<div>{phoneNumber}</div>
				<div>{homeAdress}</div>
			</div>
        
    );
};
export default SetInfoPart;