import '../../../assets/css/components/Actions/ConfirmWindow/ConfirmWindow.css';
import ConfirmChanges from '../../ActionButton/ConfirmChanges';
import SelectedData from './SelectedData';
import { useEffect, useState } from 'react';


const ConfirmWindow = ({dataToUpdate, dataToDelete, selectId, refresh, action, hidden, checkData, activateConfirm})=>{
    const [dataToAction, setDataToAction] = useState([]);
    useEffect(()=>{
        if(action == 'delete'){
            const data = dataToDelete ? Object.values(dataToDelete).slice(1) : [null];
            setDataToAction(data);
        }else if(action == 'update'){
            const selectedData = dataToUpdate ? Object.values(dataToUpdate) : [null];
            setDataToAction(selectedData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dataToDelete, dataToUpdate]);

        
    const close = ()=>{
        activateConfirm();
    };

    return (
        <div className={`confirm ${hidden ? 'hidden' : ''}`}>
            <div className="confirm__text-block">
                <h2><strong>want to {action} data?</strong></h2>
                <p>Data to {action}</p>
                {dataToAction.every((e)=>e==null) ? <span>Anything to {action}</span> : <SelectedData data={dataToAction}/>}
        </div>
            <div className="confirm__button-block">
                <ConfirmChanges selectedId={selectId} data={dataToAction} action={action} refresh={refresh} checkData={checkData}/>
                <button onClick={()=>close()}>NO</button>
            </div>
        </div>
    );
};

export default ConfirmWindow;