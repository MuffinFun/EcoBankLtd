import { useEffect, useState } from 'react';
import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';

const UpdateFormInputs = ({data, selectedId, check})=>{

    const [startDataValues, setStartDataValues] = useState(null);

    useEffect(()=>{
        const objectData = data.find(item => item.id_accounts == selectedId || item.id_commcompany == selectedId);
        const values = Object.values(objectData).slice(1);
        setStartDataValues(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedId, check]);

    if(!startDataValues) return;

    return(
        <div className='update-form__input-container'>
                <input className='update-form__input' type="text" placeholder={startDataValues[0]}/>
                <input className='update-form__input' type="text" placeholder={startDataValues[1]}/>
                <input className='update-form__input' type="text" placeholder={startDataValues[2]}/>
                <input className='update-form__input' type="text" placeholder={startDataValues[3]}/>
                <input className='update-form__input' type="text" placeholder={startDataValues[4]}/>
        </div>
    );
};

export default UpdateFormInputs;