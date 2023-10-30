

const Navbar = () => {
  return (
    <div className="navbar animate-moveDown bg-slate-100  md:px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 ml-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className="font-[600]">Home</a></li>
        
        <li><a className="font-[600]">Services</a></li>
        <li><a href="#" className="font-[600]">About Us</a></li>
        <li><a href="#" className="font-[600]">Portfolio</a></li>
      </ul>
    </div>
    <a className="font-[700] uppercase text-[#03a4ed] max-[500px]:text-[20px]  md:text-[16px] lg:text-[32px] tracking-[4px]">Techplus<span className="text-[#dc3545] font-[700] uppercase md:text-[16px] lg:text-[32px]">nics</span></a>
  </div>
  <div className="navbar-center gap-2 hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="font-[600] md:text-[14px] lg:text-[20px]">Home</a></li>
      
      <li><a href="#" className="font-[600] md:text-[14px] lg:text-[20px]">Services</a></li>
      <li><a href="#" className="font-[600] md:text-[14px] lg:text-[20px]">About Us</a></li>
      <li><a href="#" className="font-[600] md:text-[14px] lg:text-[20px]">Portfolio</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button  className="hover:bg-[#03a4ed] transition-colors duration-700 md:text-[14px]  block max-[500px]:px-2 max-[500px]:py-1 max-[380px]:hidden px-5 py-2 rounded-[23px] bg-[#fe3f40] text-[#fff] font-[600] max-[400px]:tracking-normal tracking-[2px]">Contact Us</button>                   
  </div>
</div>
  )
}

export default Navbar