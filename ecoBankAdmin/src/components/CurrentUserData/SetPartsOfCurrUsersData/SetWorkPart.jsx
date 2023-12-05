const SetWorkPart = ({workPlace, workIncome, creditConfirm})=>{
    return (
        <div className='user-info__work'>
				<div>{workPlace}</div>
				<div>{workIncome}</div>
				<div>{creditConfirm ? 'Good to give credit' : 'worst person'}</div>
			</div>
    );
};
export default SetWorkPart;