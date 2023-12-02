import '../../../assets/css/components/Actions/UpdateDataAction/UpdateUserData.css';


const SubmitButton = () => {

    const test = () =>{
        console.log('true');
        
    };

    return(
        <button onClick={()=>test()} className='update-form__submit-button' type='submit'>to confirm</button>
    );
};
export default SubmitButton;