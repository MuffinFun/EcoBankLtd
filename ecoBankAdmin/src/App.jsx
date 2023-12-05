import './assets/css/App/App.css';
import TopLeftLayout from './components/layouts/TopLeftLayout/TopLeftLayout';
import TopRightLayout from './components/layouts/TopRightLayout/TopRightLayout';
import BotLeftLayout from './components/layouts/BotLeftLayout/BotLeftLayout';
import BotRightLayout from './components/layouts/BotRightLayout/BotRightLayout';
import UpdateUserData from './components/UpdateForm/UpdateDataAction/UpdateUserData';
import ConfirmWindow from './components/UpdateForm/ConfirmWindow/ConfirmWindow';

import useFetch from './hooks/useFetch';
import { useState } from 'react';

function App() {

    //DATA

    const [currentDataId, setCurrenDataId] = useState(null);
    const [currentDataInfo, setCurrentDataInfo] = useState(null);
    const [dataToUpdate, setDataToUpdate] = useState(null);

    //URL

    const [dataAbout, setDataAbout] = useState('http://localhost:5000/api/v1/user-personal');
    const [currentDataAbout, setCurrentDataAbout] = useState('http://localhost:5000/api/v1/user-personal/current-user-info');

    //CHECKING

    const [checkWhatDataAbout, setCheckWhatDataAbout] = useState(false);
    const [checkColumnsName, setCheckColumnsName] = useState(true);
    
    //UTILS
    
    const [retry, setRetry] = useState(false);
    
    const [hidden, setHidden] = useState(true);
    
    //GET DATA

    const { value } = useFetch(dataAbout, {}, [retry,dataAbout]);

    //UTILS FUNC

    const refresh = () => {
        setRetry(!retry);
    };

    const activateForm = (property) => {
        setHidden(property);
    };

    const getData = (data) => {
        setDataToUpdate(data);
    };

    const clearCurrentData = () =>{
        setCurrentDataInfo(null);
    };

    //CHECK WHAT DATA 

    const switchCheck = () =>{
        setCheckWhatDataAbout(!checkWhatDataAbout);
    };

    //SWITCH DATA

    const switchDataAbout = (propertyDataAbout) =>{
        setDataAbout(propertyDataAbout);
    };
    const switchCurrentDataAbout = (propertyCurrDataAbout) => {
        setCurrentDataAbout(propertyCurrDataAbout);
    };
    const toggleColumnsName = (property) =>{
        setCheckColumnsName(property);
    };

    return (
        <>
            <TopLeftLayout clearCurrentData={clearCurrentData} checking={switchCheck} toggleColumnsName={toggleColumnsName} switchData={switchDataAbout} switchCurrData={switchCurrentDataAbout}/>
            <TopRightLayout
                selectedUser={currentDataId}
                toRetry={refresh}
                activateForm={activateForm}
            />
            <BotLeftLayout
                values={value}
                checkColumnNames={checkColumnsName}
                checkWhatData={checkWhatDataAbout}
                setLastId={setCurrenDataId}
                getDataInfo={setCurrentDataInfo}
                dataURL={currentDataAbout}
            />
            <BotRightLayout selectedData={currentDataInfo} checkData={checkWhatDataAbout}/>         
            <UpdateUserData
                hidden={hidden}
                currentValues={value}
                selectedUser={currentDataId}
                getData={getData}
            />
            <ConfirmWindow
                dataToUpdate={dataToUpdate}
                selectId={currentDataId}
                users={value}
                refresh={refresh}
            />
        </>
    );
}

export default App;
