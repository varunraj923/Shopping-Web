import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Body = () => {

    return (
      
     <>
    <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer/>
     
   
     </>
    )
  }
  
  export default Body