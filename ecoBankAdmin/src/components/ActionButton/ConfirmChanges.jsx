import { deleteData } from '../../utils/deleteData';
import { updateData } from '../../utils/updateData';

const ConfirmChanges = ({selectedId, data, refresh, action, checkData}) => {
    
    
    const putUpdates = async (e)=>{
        e.preventDefault();
        if(action == 'delete'){
            const status = await deleteData(selectedId, checkData);
            status == 200 ? refresh() : 'wait';
        }else if(action == 'update'){
            const status = await updateData(checkData, selectedId, data);
            status == 200 ? refresh() : 'wait';
        }
    };


    return (
        <button onClick={(e)=>putUpdates(e)}>YES</button>
    );
};

export default ConfirmChanges;