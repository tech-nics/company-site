"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Service",
            href: "/service"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Blog",
            href: "/blogs"
        },
    ]

    // for navbar moment
    const [scrolling, setScrolling] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);
    const [showDropDown, setShowDropDown] = useState(false)

    // for dropdown menu
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
        } else {
        document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDropdownOpen]);

    useEffect(() => {
        
        // For checking  scrolling  on window scroll event.
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > scrollTop) {
                setScrolling(false);
            } else {
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        // if( scrolling ||  ) setShowDropDown(false)
        if( scrolling || showDropDown ) setShowDropDown(false)
        window.addEventListener("scroll", onScroll);
        console.log(" scrolled down", scrolling, scrollTop)
        return () => window.removeEventListener("scroll", onScroll);

    }, [scrollTop]);

  return (
    // <div className="navbar fixed  z-[9999] animate-moveDown bg-slate-100  md:px-5">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost md:hidden">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //       </label>
    //       <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 ml-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //         <li><Link href="/" className="font-[600]">Home</Link></li>
    //         <li><Link href="/about" className="font-[600]">About Us</Link></li>
    //         <li><Link href="/service" className="font-[600]">Services</Link></li>
    //         <li><Link href="/blogs" className="font-[600]">Blog</Link></li>
    //       </ul>  
    //     </div>
    //     <Link href="/" scroll={true} className="font-[700] uppercase text-[#03a4ed] max-[500px]:text-[20px]  md:text-[16px] lg:text-[32px] tracking-[4px]">Techplus<span className="text-[#dc3545] font-[700] uppercase md:text-[16px] lg:text-[32px]">nics</span></Link>
    //   </div>
    //   <div className="navbar-center gap-2 hidden md:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li><Link href="/" className="font-[600] md:text-[14px] lg:text-[20px]">Home</Link></li>
    //       <li><Link href="/about" className="font-[600] md:text-[14px] lg:text-[20px]">About Us</Link></li>
    //       <li><Link href="/service" className="font-[600] md:text-[14px] lg:text-[20px]">Services</Link></li>
    //       <li><Link href="/blogs" className="font-[600] md:text-[14px] lg:text-[20px]">Blog</Link></li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //   <a href="#contact-us"  className="hover:bg-[#03a4ed] transition-colors duration-700 md:text-[14px]  block max-[500px]:px-2 max-[500px]:py-1 max-[438px]:hidden px-5 py-2 rounded-[23px] bg-[#fe3f40] text-[#fff] font-[600] max-[400px]:tracking-normal tracking-[2px]">Contact Us</a>                   
    //   </div>
    // </div>

    <>
        <div className={`z-[999] flex items-center fixed top-0 left-0 min-h-[4rem] right-0  bg-black   duration-300 
        ${scrolling ? "" : " -translate-y-[100%]"}  ${scrollTop <= 2 ? "backdrop-blur-none bg-white" : "backdrop-blur-md bg-opacity-20"}
        
    `}>
        <div className="flex justify-between items-center p-2 w-[90%] mx-auto">
            {/* Logo */}
            {/* max-[500px]:text-[20px]  md:text-[16px] lg:text-[32px] */}
            <Link href="/" scroll={true} className=" uppercase text-[#03a4ed]  tracking-[4px] text-[20px] lg:text-[32px] font-bold">Techplus<span className="text-[#dc3545] font-[700] uppercase text-[20px] lg:text-[32px]">nics</span></Link>
            
            {/* Center */}
            <div className="lg:flex gap-4 hidden ">
                <Link className=" p-2 px-4 font-bold border  bg-white transition-all duration-500 rounded-lg  hover:text-blue-500" href="/">Home</Link>
                <Link className=" p-2 px-4 font-bold border  bg-white transition-all duration-500 rounded-lg  hover:text-blue-500" href="/about">About Us</Link>
                <Link className=" p-2 px-4 font-bold border bg-white  transition-all duration-500 rounded-lg hover:text-blue-500" href="/service">Service</Link>
                <Link className=" p-2 px-4 font-bold border  bg-white transition-all duration-500 rounded-lg  hover:text-blue-500" href="/blogs">Blog</Link>
            </div>

            <Link href="/#contact-us" className=" hidden lg:block bg-blue-400 hover:bg-red-400 transition-colors duration-500 cursor-pointer p-2 px-4 rounded-2xl font-bold text-white">
                Contact Us
            </Link>

            <div  className=" lg:hidden bg-white bg-opacity-30 p-2 rounded-lg">
                {
                    isDropdownOpen ?
                    <RxCross2 className=" cursor-pointer" onClick={handleDropdownToggle}  size={25}/> :
                    <GiHamburgerMenu className=" cursor-pointer font-bold" onClick={handleDropdownToggle}  size={25}/> 
                    
                }
            </div>
        </div>
    </div>
    <div ref={dropdownRef} className={`${isDropdownOpen ? " fixed": " hidden"} z-[1000] overflow-hidden transition-all duration-500 flex flex-col items-center justify-center inset-0  h-screen bg-black text-white w-screen  `}>
        <RxCross2 className=" cursor-pointer absolute right-14 top-10" onClick={handleDropdownToggle}  size={25}/>
        <div className=" flex flex-col gap-5 text-3xl h-fit">
            {/* <Link onClick={handleDropdownToggle} className=" font-semibold hover:bg-blue-200 hover:rounded-md p-1"  href="/">Home</Link>
            <Link onClick={handleDropdownToggle} className=" font-semibold hover:bg-blue-200 hover:rounded-md p-1 "  href="/service">Service</Link>
            <Link onClick={handleDropdownToggle} className=" font-semibold hover:bg-blue-200 hover:rounded-md p-1"  href="/about">About Us</Link>
            <Link onClick={handleDropdownToggle} className=" font-semibold hover:bg-blue-200 rounded-md p-1"  href="/blogs">Blog</Link> */}
            {
                links.map( ( link, index) => (
                    <Link key={index} onClick={handleDropdownToggle} className={`font-semibold text-center rounded-md p-1 `}  href={link.href}>{link.name}</Link>
                ) )
            }
        </div>
    </div>
    </>
      );
}

export default Navbar