import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Body = () => {

    return (
      
     <>
    <Navbar></Navbar>
     <Outlet></Outlet>
     
   
     </>
    )
  }
  
  export default Body