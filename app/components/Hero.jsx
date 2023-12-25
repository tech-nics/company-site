
const Hero = () => {
    return (
        //   <div className="bg-white p-3 translate-y-16  mb-8  w-[100%]   bg-no-repeat  bg-[url('/baner-right.png'),_url('/baner-left.png')] bg-[position:right_top,_left_top]">
        //     <div className=" px-10 w-full min-h-[calc(100vh-4rem)] overflow-hidden  flex flex-row flex-wrap max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[40px] justify-between items-center ">
        //       {/* left div */}
        //       <div className="flex lg:animate-moveLeft flex-col justify-start md:max-w-[48%]    items-start">
        //         <h6 className=" font-[500] text-[18px] mb-[15px] tracking-[2px] [word-spacing:2px]  uppercase">
        //           welcome to{" "}
        //           <span className="text-[#03a4ed] text-[30px] font-[700]">
        //             techplus
        //             <span className="text-[#dc3545] text-[30px] font-[700]">
        //               nics
        //             </span>
        //           </span>{" "}
        //         </h6>
        //         <h2 className="font-[700] text-[50px] mb-[15px]">
        //           Your <em className="text-[#03a4ed]"> Digital </em> Growth{" "}
        //           <em>
        //             {" "}
        //             <span className="text-[#dc3545]">Partner</span>
        //           </em>
        //         </h2>
                
        //       </div>
        //       {/* right div */}
        //       <div className="flex flex-col relative lg:animate-moveRight group justify-center items-center max-md:mb-5  w-full h-[50%] md:w-[42%] md:h-[50%]  ">
        //         {/* <img
        //         alt="side-image"
        //           className="h-full w-full object-contain "
        //           src="/side-img.png"
        //         /> */}
                   
        //                 <img alt="lapotopHeroBackGround" className=" hidden lg:block group-hover:translate-x-[5rem] group-hover:translate-y-[-5rem] group-hover:opacity-100 opacity-0  transition-all duration-700 absolute  z-[100]" src="/heroBackground.svg" /> 
        //                 <img alt="lapotopHeroForeGround" className="hidden lg:block group-hover:translate-x-[-8rem] group-hover:translate-y-[5rem] group-hover:scale-75 backdrop-blur-sm  transition-all duration-700 absolute  z-[100]" src="/heroForeground.svg" /> 
                    
        //                 <img alt="mobil-tabletHero" src="/heroBackground.svg" className=" block lg:hidden w-full" />
        //       </div>
        //     </div>
        //   </div>

        <div className=" mt-16 bg-[url('../public/home-hero.png')] bg-no-repeat bg-cover lg:bg-center md:bg-center w-screen h-full min-h-[calc(100vh-64px)]">
            <div className=" w-10/12 mx-auto">
                <div className=" lg:w-[40%] md:w-[40%] flex flex-col lg:gap-10 md:gap-10 gap-10 lg:py-20 md:py-20 py-10">
                    <h6 className=" text-blue-500 font-bold tracking-wider" >Digital Brilliance</h6> 
                    <h1 className=" lg:text-[3rem] md:text-[3rem] text-3xl font-black leading-[1.5]"> Your Vision, Empowering Your Digital Success.</h1>
                    <p className=" text-gray-6 00">At Tech Plusnics, we believe in the transformative power of digital innovation, guiding businesses through the ever-evolving landscape where creativity meets technology</p>
                    <a className=" bg-gray-800 text-white w-fit p-2 px-3 rounded-lg" href="/#pricing">Find yours</a>
                </div>
            </div>
        </div>

      );
}

export default Hero