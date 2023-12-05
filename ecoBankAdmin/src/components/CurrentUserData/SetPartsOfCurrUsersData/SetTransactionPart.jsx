const SetTransactionPart = ({income, expensive, transfer})=>{
    return (
        <div className='user-info__transactions'>
				<div><span>Income: </span>{income}</div>
				<div><span>Expensive: </span>{expensive}</div>
				<div><span>Transfer: </span>{transfer}</div>
			</div>
    );
};
export default SetTransactionPart;