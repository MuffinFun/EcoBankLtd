import '../../../assets/css/components/layouts/TopRightLayout/TopRightLayout.css';
import UpdateButton from '../../ActionButton/UpdateButton';
import DeleteButton from '../../ActionButton/DeleteButton';

const TopRightLayout = ({selectedId, setAction, activateConfirm, activateForm, data}) => {
	return (
		<div className="top-right-container container"> 
			<UpdateButton setAction={setAction} selectedId={selectedId} activate={activateForm} activateConfirm={activateConfirm}/>
			<DeleteButton setAction={setAction} selectedId={selectedId} activate={activateConfirm} data={data}/>
		</div>
	);
};
export default TopRightLayout;