import { Outlet } from "react-router-dom"
import Navbar from "./components/Root/Navbar"
import Footer from "./components/Root/Footer"

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
