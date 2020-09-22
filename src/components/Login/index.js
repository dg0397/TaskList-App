import React, {useState} from 'react';
//import registerService from 'services/register'
import { useForm } from 'react-hook-form';
import  Button  from 'components/Button';
 
export default function Register() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  //const [registered , setRegistered] = useState(false);
  //const [isSubmitting,setIsSubmitting] = useState(false)

  const onSubmit = values => {
    console.log(values);
    //setIsSubmitting(true)
    //registerService(values)
    //  .then(() =>  {
    //    setRegistered(true)
    //    setIsSubmitting(false)
    //  })
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className = 'Form' >
      <label>
        Email:
        <input 
          className={errors.username ? 'error' : ''} 
          name="email" 
          ref={register({ required: true })} 
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
      
      <Button>Register</Button>
    </form>
  );
}