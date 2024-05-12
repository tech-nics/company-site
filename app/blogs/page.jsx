import { blogs } from "../data/blogData"

const style = {
    "height":"100vh",
    "width":"100vw",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "fontSize": "2rem",
    "fontWeight": "900"
}
export default function BlogPage(){
    return (

        <div className=" ">

            <div className='pt-16 flex justify-end items-center lg:pr-36 md:pr-28 pr-14  lg:h-40 h-40 bg-gradient-to-br from-[#ff2100] from-0% via-58% to-[#005eff] to-100%'>
                <h1 className=' lg:text-[4rem] text-3xl text-white font-bold '>Blog</h1>
            </div> 

            <div className=" lg:w-10/12 md:w-10/12 py-20 p-2 mx-auto gap-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                {
                    blogs.map( (blog, index) => (
                        <div className=" flex flex-col gap-3 border rounded-2xl" key={index}>
                            <div className=" rounded-t-2xl overflow-hidden lg:min-h-[25rem] flex items-center  bg-[#F8F8F8] ">
                                <img className=" object-cover" src={blog.img} />
                            </div>
                            <div className=" flex flex-col gap-2 p-4">
                                <h3 className=" text-lg font-bold">{blog.heading}</h3>
                                <p className=" text-gray-400 text-sm">{blog.date}</p>
                                <p>{blog.info}. . .</p>
                                <a className=' w-fit bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold px-2 py-1 rounded-lg' href={blog.link}>Read More</a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}