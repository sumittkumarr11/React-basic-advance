import './App.css'
import { useForm } from "react-hook-form"
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    } = useForm();

      function onSubmit(data){
       console.log("submitting the form" , data);
   }
  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> First Name:</label>
          <input 
          className={errors.firstName ? "input -error" : "" }
          {...register('firstName',
           {
             required: true,
             minLength:{value:3,message:"min length atleast 3"},
             maxLength:{value:6,message:"max length atmost 6"}})} />
             {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        </div>
       <br/>
        <div>
          <label> Middle Name:</label>
          <input {...register('middleName')}/>
        </div>
        <br/>
        <div>
          <label> Last Name: </label>
          <input {...register('lastName')}/>
        </div>
         <br/> 
         <input  type='submit'/>
      </form>
    
  )
}

export default App
