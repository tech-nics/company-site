
const Hero = () => {
    return (
        <>
          <div className="bg-white p-3 translate-y-16  mb-8  w-[100%]   bg-no-repeat  bg-[url('/baner-right.png'),_url('/baner-left.png')] bg-[position:right_top,_left_top]">
            <div className=" px-10 w-full min-h-[calc(100vh-4rem)] overflow-hidden  flex flex-row flex-wrap max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[40px] justify-between items-center ">
              {/* left div */}
              <div className="flex animate-moveLeft flex-col justify-start md:max-w-[48%]    items-start">
                <h6 className=" font-[500] text-[18px] mb-[15px] tracking-[2px] [word-spacing:2px]  uppercase">
                  welcome to{" "}
                  <span className="text-[#03a4ed] text-[30px] font-[700]">
                    techplus
                    <span className="text-[#dc3545] text-[30px] font-[700]">
                      nics
                    </span>
                  </span>{" "}
                </h6>
                <h2 className="font-[700] text-[50px] mb-[15px]">
                  Your <em className="text-[#03a4ed]"> Digital </em> Growth{" "}
                  <em>
                    {" "}
                    <span className="text-[#dc3545]">Partner</span>
                  </em>
                </h2>
                
              </div>
              {/* right div */}
              <div className="flex flex-col animate-moveRight justify-center items-center max-md:mb-5  w-full h-[50%] md:w-[42%] md:h-[50%]  ">
                <img
                alt="side-image"
                  className="h-full w-full object-contain "
                  src="/side-img.png"
                />
              </div>
            </div>
          </div>
        </>
      );
}

export default Hero