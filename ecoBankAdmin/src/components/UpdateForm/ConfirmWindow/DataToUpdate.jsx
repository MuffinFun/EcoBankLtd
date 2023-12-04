import SelectedDataItem from './SelectedDataitem';

const DataToUpdate = ({data}) =>{
    
    if(!data) return;

    return (
        <div className='text-block__selected-data'>
            {data.map((item, index)=><SelectedDataItem key={index} item={item}/>)}
        </div>
    );
};

export default DataToUpdate;
