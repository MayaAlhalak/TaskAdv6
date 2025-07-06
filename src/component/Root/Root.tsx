import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";



function Root() {
  const [darkmode, setDarkmode] = useState(false);
    const [openNav , setopenNav]= useState<boolean>(false)
  // save the mode when moving between pages
  useEffect(() => {
    const valuetheme = localStorage.getItem("theme");
    if(valuetheme === "dark"){
      setDarkmode(true)
    }
    else{
       setDarkmode(false)
    }
  },[])
  return (
    <>
      <Navbar 
       darkmode={darkmode} 
       setDarkmode={setDarkmode}
       setopenNav ={setopenNav}
       openNav = {openNav}
       />
      <Outlet context={{ darkmode , openNav }} />
      <Footer darkmode={darkmode} />
   </>
  )
}

export default Root
