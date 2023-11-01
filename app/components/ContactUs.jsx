import Form from "./Form";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="py-20 hero min-h-screen  bg-fit bg-[url('https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/contact-bg.png')]">
        <div className="hero-content flex-col lg:flex-row">
          <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="3000"  className="text-center lg:text-left">
            <h1 className="text-4xl text-white font-bold capitalize">
              Feel free to send us your websites or bussiness needs
            </h1>
            <div className="py-6 text-2xl flex flex-col items-center gap-4 md:flex-row lg:justify-start md:justify-center  md:items-center md:gap-[20px] font-[600] text-white">
              <span>For any enquiry, Call Us:</span>
              <div>
                <Image
                  className="inline-block"
                  width="40"
                  height="40"
                  src="/phone.png"
                  alt="phone"
                />{" "}
                &nbsp;<span className="inline-block">7586969746</span>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
