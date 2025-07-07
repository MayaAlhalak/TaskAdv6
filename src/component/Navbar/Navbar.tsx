
import { Link, useLocation } from "react-router-dom";

interface Link  {
        name : string,
        path : string
}
interface NavbarProps {
  darkmode: boolean;
  setDarkmode: (val: boolean) => void;
  openNav: boolean;
  setopenNav: (val: boolean) => void;
}
function Navbar( {darkmode , setDarkmode ,openNav , setopenNav  }: NavbarProps) {
    const Links :Link[] = [
        {
            name : "Blog",
            path : '/'
        }, 
        {
            name : "Projects",
            path : ''
        }, 
        {
            name : "About",
            path : ''
        }, 
        {
            name : "Newsletter",
            path : '/newsletter'
        }, 
    ]
   
    const location = useLocation();
    const isopenNav= ()=>{
        setopenNav(!openNav)
    }
    const closeNav= ()=>{
        setopenNav(!openNav)
    }
    const dark = () =>{
        setDarkmode(true)
        localStorage.setItem("theme", "dark");
        
    }
    const light = () =>{
        setDarkmode(false)
        localStorage.setItem("theme" , "light")
    }
  return (
   <>
    <section className={`flex justify-between items-center px-[20px] py-[20px] md:p-5  lg:px-28 fixed top-0 w-[100%] dark:mb-0 bg-white dark:bg-[#090D1F] ${darkmode ? "dark" : ""}`}>
        <h2 className="font-display text-lg lg: font-semibold leading-[24px] text-black dark:text-white">Your Name</h2>
        <div onClick={isopenNav} className=" sm:hidden" >
            <img src="/TaskAdv6/assets/image/home/menu.svg" alt="" className="dark:invert"/>
        </div>
      {openNav && 
         <div className="fixed top-0 left-0  w-full h-screen bg-white dark:bg-[#090D1F] z-100 flex flex-col justify-center items-center">
            <div>
                <h2 className="dark:text-white mb-[54px] text-lg font-semibold text-[#1A1A1A]">Your Name</h2>
            <ul >
                {
                    Links.map((item , index) => (
                        <li className="text-center text-lg font-normal leading-[24px] dark:text-white mb-5" key={index} >
                            <Link to={item.path}
                            onClick={closeNav}
                            className={` ${location.pathname === item.path ? ' border-b border-[#090D1F] dark:border-white' : ''}`}
                            >{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="bg-[#090D1F] py-2 px-4 rounded-[29px] flex items-center justify-between gap-x-4 mb-[171px] dark:bg-white">
                <button className=" w-6 h-6 bg-[#090D1F] rounded-[50%]" onClick={light}>{!darkmode && <img src="/TaskAdv6/assets/image/home/sun.png" alt="" /> }</button>
               <button className="w-6 h-6 bg-white rounded-[50%] " onClick={dark}>{darkmode && <img src="/TaskAdv6/assets/image/home/moon.png"  alt="" />}</button>
            </div>
            <div className="flex items-center justify-center py-5">
                 <button onClick={closeNav}><img src="/TaskAdv6/assets/image/home/menu-outline.svg" alt="" className={!darkmode ? "invert brightness-200" : ""}/></button>
            </div>
            </div>
        </div>
       
        }
        <div className="hidden sm:flex  justify-between items-center gap-x-[22px]  ">
            <ul className=" sm:flex  justify-between items-center gap-x-[22px] ">
                    {
                        Links.map((item , index) => (
                            <li className=" font-normal leading-[24px] text-lg lg:text-xl color-[#1A1A1A] dark:text-white " key={index} >
                                <Link to={item.path}
                                 className={` ${location.pathname === item.path ? ' border-b border-[#090D1F] dark:border-white' : ''}`}>{item.name}
                                </Link></li>
                        ))
                    }
            </ul>
            <div className="py-2 px-4 sm:flex justify-between items-center gap-x-[16px] bg-[#090D1F] dark:bg-white rounded-3xl">
                <button className=" w-6 h-6 bg-[#090D1F] rounded-[50%]" onClick={light}>{!darkmode && <img src="/TaskAdv6/assets/image/home/sun.png" alt="" /> }</button>
                <button className="w-6 h-6 bg-white rounded-[50%] " onClick={dark}>{darkmode && <img src="/TaskAdv6/assets/image/home/moon.png"  alt="" />}</button>
            </div>
       </div>
    </section>
   </>

  )
}

export default Navbar
