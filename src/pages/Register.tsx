import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {

    type IForm = {
        name: string,
        email: String,
        password: String,
    }
    
    const {handleSubmit, register, formState: { errors },} = useForm<IForm>()

    const onsubmit = (data: IForm) =>{
        console.log(data)
    }
    
    return (
      <div
        style={{ backgroundImage: 'url(/assets/login_bg.png)', borderRadius: '8px' }}
        className="bg-center bg-cover h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black/50 bg-opa rounded-lg"></div>
        {/* #517CE2  #933372 */}
        <div className="relative bg-linear-to-bl from-[#933372] to-[#6A97FF] bg-opacity-40 backdrop-blur-lg p-8 rounded-lg shadow-lg md:w-1/2 w-11/12 max-w-md">
          <div className="text-white">
            <h2 className="text-xl font-semibold text-center border-b-2 w-fit mx-auto pb-2 px-4">
              Create a new account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onsubmit)} className="fieldset space-y-4 mt-6">

            <div className="space-y-1.5">
              <label className="fieldset-label font-medium text-white">Name</label>
              <input {...register('name', {required: 'Name is required***'})}
               aria-invalid={errors.name ? "true" : "false"}
                type="text"
                className="input w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black opacity-60 text-white"
                placeholder="Name"
              />
              <p className="text-white ml-3 flex justify-start">{errors.name?.message}</p>
            </div>

            <div className="space-y-1.5">
              <label className="fieldset-label font-medium text-white">Email</label>
              <input {...register('email', {required: 'Email is required***'})}
               aria-invalid={errors.email ? "true" : "false"}
                type="email"
                className="input w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black opacity-60 text-white"
                placeholder="Email"
              />
              <p className="text-white ml-3 flex justify-start">{errors.email?.message}</p>
            </div>

            <div className="space-y-1.5">
              <label className="fieldset-label font-medium text-white">Password</label>
              <input {...register('password', {required: 'Password is required***'})}
               aria-invalid={errors.password ? "true" : "false"}
                type="password"
                className="input w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black opacity-60 text-white"
                placeholder="Password"
              />
              <p className="text-white ml-3 flex justify-start">{errors.password?.message}</p>
            </div>
            
            <button className="btn btn-neutral mt-4 w-full py-2 rounded-md">
              Register
            </button>

            <p className="text-white flex justify-start font-normal text-[16px]">Already have and account? <Link to='/login' className="underline ml-1">login</Link></p>
          </form>
        </div>
      </div>
    );
  }
  