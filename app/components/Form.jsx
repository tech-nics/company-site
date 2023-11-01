import { useForm } from "react-hook-form"
import { sendEmail } from "./_actions"
import { toast } from "sonner"

export default function Form(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) => {
      const isdataSent = await sendEmail(data)
      if(isdataSent){
        toast.success("Sent successfuly",{
          description: "You will get a call from our side within 1hr",
        })
        return
      }

      toast.error("Something unexpected occured",{
        description:"Please try again"
      })
      
    }

    return(
        <div data-aos="fade-up" data-aos-offset="500"  data-aos-duration="3000" data-aos-delay="500" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Name <span className="text-[#FF0000] text-[20px]">*</span>{" "}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name",{required:true, pattern:/^[a-zA-Z\s]+$/})}
                />
                {errors.name && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-[#FF0000] text-[20px]">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email",{required:true, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/})}
                />
                {errors.email && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="message"
                  className="input input-bordered h-52"
                  {...register("msg",{required:true, minLength:5})}
                />
                {errors.msg && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button   type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
    )
}