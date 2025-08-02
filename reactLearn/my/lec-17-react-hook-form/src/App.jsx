import React from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    console.log("Submitting the form: ", data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input
          className={errors.firstName ? 'input-error' : ""}
          type="text"  {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: "Min length atleast 3" },
              maxLength: 6
            })} />
        {errors.firstName && <small className='error-msg' >{errors.firstName.message}</small>}
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name: </label>
        <input
          className={errors.firstName ? 'input-error' : ""}
          type="text"
          {...register('middleName')} />
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name: </label>
        <input
          className={errors.firstName ? 'input-error' : ""}
          type="text" {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only alphabets are allowed"
            }
          })} />
        {errors.lastName && <p className='error-msg' > {errors.lastName.message} </p>}
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App