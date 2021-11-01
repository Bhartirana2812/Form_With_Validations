import React from "react";
import './Form.css';

const FormSuccess=()=>{
    return(
        <div className='form-content-right'>
            <div className='form-success'>
                <h2>We have recieved your request</h2>
            </div>
            <img src='images/img-1.png' alt='success image' className='form-img-2'/>

        </div>
    );
};
export default FormSuccess;