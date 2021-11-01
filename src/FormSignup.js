import React from 'react'
import useForm  from './useForm'
import validate from './validateForm';
import './Form.css';

const FormSignup=({submitForm})=>{
    const{handleChange,values,handleSubmit,errors}=useForm(submitForm,validate);

    return(
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit} noValidate>
                <h1>Get Started With Us! Fill Details Here...</h1>
                <div className='form-inputs'>
                 <label htmlFor='username' className='form-label'>Username: </label>
                     <input type='text' className='form-input' id='username'
                      value={values.username} onChange={handleChange}
                      placeholder='Enter your username' name='username'></input>
                      {errors.username&&<p>{errors.username}</p>}
                
                </div>
                <div className='form-inputs'>
                 <label htmlFor='email' className='form-label'> Email:</label>
                     <input type='email' id='email' className='form-input'
                       value={values.email} onChange={handleChange}
                      placeholder='Enter your email' name='email'></input>
                      {errors.email&&<p>{errors.email}</p>}
                 
                </div>
                <div className='form-inputs'>
                 <label htmlFor='password' className='form-label'>  Password: </label>
                     <input type='password' className='form-input' id='password'
                       value={values.password} onChange={handleChange}
                      placeholder='Enter your password' name='password'></input>
                       {errors.password&&<p>{errors.password}</p>}
                
                </div>
                <div className='form-inputs'>
                 <label htmlFor='password2' className='form-label'>Confirm Password </label>
                     <input type='password' className='form-input' id='password2'
                       value={values.password2} onChange={handleChange}
                      placeholder='Enter your password again' name='password2'></input>
                       {errors.password2 &&<p>{errors.password2}</p>}
                
                
                </div>
                <button className='form-input-btn' type='submit'>Sign Up</button>
                <span className='form-input-login'>Already have an account? Login <a href='#'>here</a></span>
            </form>
            
        </div>
    );

};


export default FormSignup