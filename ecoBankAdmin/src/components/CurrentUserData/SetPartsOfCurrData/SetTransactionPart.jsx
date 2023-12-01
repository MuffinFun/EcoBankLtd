const SetTransactionPart = ({income, expensive, transfer})=>{
    return (
        <div className='user-info__transactions'>
				<div>{income}</div>
				<div>{expensive}</div>
				<div>{transfer}</div>
			</div>
    );
};
export default SetTransactionPart;