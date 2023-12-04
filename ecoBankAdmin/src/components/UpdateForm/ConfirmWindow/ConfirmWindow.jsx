import '../../../assets/css/components/Actions/ConfirmWindow/ConfirmWindow.css';
import DataToUpdate from './DataToUpdate';
import ConfirmChanges from '../../ActionButton/ConfirmChanges';


const ConfirmWindow = ({dataToUpdate, selectId, users, refresh})=>{
    if(!dataToUpdate) return; 
    const selectedData = Object.values(dataToUpdate);

    const test=()=>{
        const str = 'aaaa';
        console.log(Number.isInteger(str));
    };


    return (
        <div className='confirm'>
            <div className="confirm__text-block">
                <h2><strong>want to chage data?</strong></h2>
                <p>Updated Data</p>
                {selectedData.every((e)=>e==null) ? <span>Anything to update</span> : <DataToUpdate data={selectedData}/>}
        </div>
            <div className="confirm__button-block">
                <ConfirmChanges selectedId={selectId} newData={selectedData} users={users} refresh={refresh}/>
                <button onClick={()=>test()}>NO</button>
            </div>
        </div>
    );
};

export default ConfirmWindow;