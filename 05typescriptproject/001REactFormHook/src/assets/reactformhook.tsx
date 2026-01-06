import { useForm, type SubmitHandler } from "react-hook-form"
type formType={
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
}
const ReactFormhook=()=>{
const{register,handleSubmit,formState:{errors}}=useForm<formType>();
const onSubmit:SubmitHandler<formType>=(data)=>console.log(data);
    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
                <label htmlFor="firstName">firstname</label>
                <input type="text" id="firstName" {...register("firstName",{required:'name is required'})} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
                <label htmlFor="lastName">lastName</label>
                <input type="text" id="lastName" {...register("lastName",{required:'Lastname is required'})} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>  
        <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" {...register("email",
                    {
                        required:'email is required',
                        pattern: {
                            value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        }
                    })} />
                {errors.email && <p>{errors.email.message}</p>}
        </div>
          <div>
                <label htmlFor="city">city</label>
                <input type="city" id="city" {...register("city",{required:'city is required'})} />
                {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div>
                <label htmlFor="state">state</label>
                <input type="state" id="state" {...register("state",{required:'state is required'})} />
                {errors.state && <p>{errors.state.message}</p>}
        </div>
        <div>
                <label htmlFor="zip">zip</label>
                <input type="number" id="state" {...register("zip",{required:'zip is required'})} />
                {errors.zip && <p>{errors.zip.message}</p>}
        </div>
        
        
        <button type="submit">submit</button>
       </form>
    </>
}
export default ReactFormhook