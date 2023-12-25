import { useForm } from "react-hook-form"
import { sendEmail } from "./_actions"
import { toast } from "sonner"

export default function Form(){
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) => {

        const toastId = toast.loading("Sending message...")
      const isdataSent = await sendEmail(data)
      if(isdataSent){
        toast.dismiss(toastId)
        toast.success("Sent successfuly",{
          description: "You will get a call from our side within 1hr",
        })
        reset({ name: "", email: "", msg: ""})
        return
      }

      toast.dismiss(toastId)
      toast.error("Something unexpected occured",{
        description:"Please try again"
      })

      reset({ name: "", email: "", msg: ""})
      
    }
    // 
    // data-aos-offset="500"
    return(
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className=" flex flex-col gap-2 lg:gap-5 p-[6px] md:p-4  lg:p-6" onSubmit={handleSubmit(onSubmit)}>
            
              <div className=" flex flex-col gap-1">
                <label className="">
                  <span className="">
                    Name <span className="text-[#FF0000] text-[20px]">*</span>{" "}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter You Name"
                  className=" border p-2 rounded-md focus:outline-none"
                  {...register("name",{required:true, pattern:/^[a-zA-Z\s]+$/})}
                />
                {errors.name && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className=" flex flex-col gap-1">
                <label className="">
                  <span className="">
                    Email <span className="text-[#FF0000] text-[20px]">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email Id"
                  className=" border p-2 rounded-md focus:outline-none"
                  {...register("email",{required:true, pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/})}
                />
                {errors.email && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className=" flex flex-col gap-1">
                <label>Message <span className="text-[#FF0000] text-[20px]">*</span>{" "}</label>
                <textarea
                  type="text"
                  placeholder="Enter Your message"
                  className=" border p-2 rounded-md focus:outline-none"
                  {...register("msg",{required:true, minLength:5})}
                />
                {errors.msg && <span className="text-[#FF0000]">This field is required</span>}
              </div>
              <div className=" bg-blue-600 text-white hover:bg-blue-400 transition-all duration-300 self-end w-fit py-1 px-2 rounded-md">
                <button   type="submit" className="">Send</button>
              </div>
            </form>
        </div>
    )
}