import { services1, services2 } from "../data/service"

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

        <div className=" pt-16">

            <div className='flex justify-end items-center lg:pr-36 md:pr-28 pr-14  lg:h-40 h-28 bg-gradient-to-br from-[#ff2100] from-0% via-58% to-[#005eff] to-100%'>
                <h1 className=' lg:text-[4rem] text-3xl text-white font-bold '>Service</h1>
            </div>  

            {/* Section 1 */}
            <div>
                <div className=" w-10/12 mx-auto flex justify-center gap-10">
                    {/* Left image */}
                    <div>
                        <img src="/profile-aditya.png"/>
                    </div>
                    {/* Rigth image */}
                    <div>
                        <p>Connections</p>
                        <h2>One pice is real</h2>
                        <p>description - kefjv ek;fjvn  epjfvnopejofv  joef vjpef vefv ef nvjoef vefv efev jdf vjo efojv e fvef</p>
                    </div>

                </div>
            </div>

            {/* Section 2 */}   
            <div className="bg-gradient-to-br from-[#1c143a] from-50% to-blue-500 text-white">
                <div className=" w-10/12 mx-auto ">
                    {/* Upper section */}
                    <div>
                        <p>why choose</p>
                        <h2>Heading </h2>
                        <p>loren ipsum jen  edco cd ce  wdwd wvefv </p>
                        <button>Explore btn</button>
                    </div>

                    {/* Lower section */}
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {
                            services1.map( (service, index) => (
                                <div key={ index}>
                                    <img src={service.image} alt={`service${index}`} />
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Section 3 Secrvices */}
            <div>
                <div>
                    <p>sample desc</p>
                    <h2>Heading</h2>
                    <p>description</p>
                    <div className=" grid grid-cols-2 lg:grid-cols-3 place-content-center place-items-center">
                        {
                            services2.map( (service, index) => (
                                <div key={index}>
                                    <div>
                                        Icon
                                    </div>
                                    <h5>{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Section 4 Contact us */}
            <div className="  bg-gradient-to-br from-[#1c143a] from-50% to-blue-500 text-white">
                <div className=" flex w-10/12 mx-auto">
                    {/* Left side */}
                    <div>
                        <p>kjnwdcn</p>
                        <h5>Heading</h5>
                        <p>Para kjd n jwd c kj e dckj jcn </p>
                        <button>Down load button</button>
                    </div>
                    {/* Rigth Side Image */}
                    <div>
                        <img src="/profile-aditya.png" alt="service-contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}