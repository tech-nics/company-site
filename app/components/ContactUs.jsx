
const ContactUs = () => {
  return (
    <>
      <div className="animate-moveUp py-20 hero min-h-screen  bg-fit bg-[url('https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/contact-bg.png')]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white font-bold capitalize">
              Feel free to send us your websites or bussiness needs
            </h1>
            <div className="py-6 text-2xl flex flex-col items-center gap-4 md:flex-row lg:justify-start md:justify-center  md:items-center md:gap-[20px] font-[600] text-white">
              <span>For any enquiry, Call Us:</span>
              <div>
                <img
                  className="inline-block"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/flat-round/64/000000/phone.png"
                  alt="phone"
                />{" "}
                &nbsp;<span className="inline-block">7586969746</span>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                  required
                />
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
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="message"
                  className="input input-bordered h-52"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
