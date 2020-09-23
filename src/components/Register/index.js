import React, {useState} from 'react';
//import registerService from 'services/register'
import { useForm } from 'react-hook-form';
import  Button  from 'components/Button';
import {useMutation} from "@apollo/client"

import { REGISTER_USER } from 'services';
 
export default function Register() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  //const [registered , setRegistered] = useState(false);
  //const [isSubmitting,setIsSubmitting] = useState(false)
  const [registerUser] = useMutation(REGISTER_USER)

  const onSubmit = values => {
    console.log(values);
    //setIsSubmitting(true)
    //registerService(values)
    //  .then(() =>  {
    //    setRegistered(true)
    //    setIsSubmitting(false)
    //  })
    registerUser({variables : {...values}})
  };

  //const validateUserName = async (value) => {
  //  
  //}
//
  //const validateEmail = async (value) => {
//
  //}

  //if(registered){
  //  return <h4>Congratulation <span role = 'img' aria-label = 'check icon'>✅</span>! You've been successfully registered!</h4>
  //}
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className = 'Form' >
        <label>
        Username:
        <input 
          className={errors.username ? 'error' : ''} 
          name="username" 
          ref={register({ required: true , /*validate : validateUserName*/})} 
          type = "text"
          placeholder='Put here the username'  /> {/* register an input */}
      </label>


      {/* errors will return when field validation fails  */}
      {errors.username && <span className = 'form-error' >{'Username is Required.'}</span>}

      <label>
        Email:
        <input 
          className={errors.username ? 'error' : ''} 
          name="email" 
          ref={register({ required: true , /*validate : validateEmail */})} 
          type = "email"
          placeholder='Put here the Email'  /> {/* register an input */}
      </label>


      {/* errors will return when field validation fails  */}
      {errors.email && <span className = 'form-error' >{'Email is Required.'}</span>}

      <label>
        Password:
        <input 
          className={errors.password ? 'error' : ''} 
          name="password" 
          ref={register({ required: true , minLength: 3})} 
          type = 'password'
          placeholder='Put here the password' />{/* register an input */}
      </label>


      {/* errors will return when field validation fails  */}
      {errors.password && errors.password.type === "required" && <span className = 'form-error' >{'Password is Required.'}</span>}
      {errors.password && errors.password.type === "minLength" && <span className = 'form-error' >{'Password must be greather than 3 characters.'}</span>}
      
      <Button  >Register</Button>
    </form>
  );
}