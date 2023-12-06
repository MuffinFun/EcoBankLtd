import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';
import UpdateFormInputs from '../UpdateFormInputs/UpdateFormInputs';
import { useEffect, useState} from 'react';

const UpdateUserData = ({ hidden, currentData , selectedId, getData, checkWhatData}) => {
    
    const [newData, setNewData] = useState(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> getData(newData),[newData]);

    if(!currentData) return;

    const hideForm = hidden ? 'hidden' : '';

    const checkString = (...arrayOfData) =>arrayOfData.map(item=>isNaN(item) ? item : null);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(checkWhatData){
            const age =  +e.target[3].value >= 18 ? +e.target[3].value : null;
            const checkedData = checkString(e.target[0].value, e.target[1].value, e.target[2].value, e.target[4].value);
            setNewData([checkedData[0], checkedData[1], checkedData[2], age, checkedData[3]]);
        }else{
            const buildings = +e.target[4].value > 0 ? +e.target[4].value : null;
            const temp = isNaN(e.target[2].value) ? null : e.target[2].value;
            const phoneNumber = temp ? '+'+ temp : null;
            const checkedData = checkString(e.target[0].value, e.target[1].value, e.target[3].value);
            setNewData([checkedData[1], phoneNumber, checkedData[0], checkedData[2], buildings]);
        }
        
    };

    const checkEnter = (e) => {
        if(e.keyCode == 13) e.preventDefault();
    };

    return (
        <form className={`update-form ${hideForm}`}
        onSubmit={(e)=>onSubmit(e)}
        onKeyDown={e=>checkEnter(e)}
        >    
            <UpdateFormInputs data={currentData} selectedId={selectedId} check={checkWhatData}/>
            <button className='update-form__submit-button' type='submit'>to confirm</button>
        </form>
    );
};

export default UpdateUserData;