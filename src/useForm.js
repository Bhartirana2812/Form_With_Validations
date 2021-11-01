import { useCallback, useEffect,useState } from "react";
import validate from "./validateForm";

//custom hook 

const useForm=(callback,validate)=>{
    const[values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        password2:""
    });
    const[errors,setErrors]=useState({})
    const[issubmitting,setIsSubmitting]=useState(false);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

    };
    useEffect(()=>{
        if(Object.keys(errors).length===0&& issubmitting){
            callback();
        }
    },[errors]);
    return {handleChange,values,handleSubmit,errors};
};
export default useForm;