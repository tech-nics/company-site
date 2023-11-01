import Form from "./Form";
import Image from "next/image";

const ContactUs = () => {
    // data-aos-offset="500"
  return (
    <>
      <div id="contact-us" className="py-20 hero min-h-screen  bg-fit bg-[url('https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/contact-bg.png')]">
        <div className="hero-content flex-col lg:flex-row">
          {/*  */}
          <div data-aos="fade-right"  data-aos-duration="1000"  className="text-center lg:text-left">
            <h1 className="text-2xl text-white font-bold capitalize">
            Contact Tech Plus Nics now and let's embark on a transformative digital journey for your business's success. 
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
                &nbsp;<span className="inline-block">8668679847</span>
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
