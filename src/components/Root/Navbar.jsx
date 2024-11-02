import { NavLink } from "react-router-dom";
import Logo from '../../assets/Frame.svg';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from "react";
const Navbar = () => {

  const [toogleBtn, setToogleBtn] = useState(false);
  return (
    <nav className='max-lg:w-full'>
      <ul className="absolute flex w-[40%] justify-between items-center left-[11rem] mt-5 text-mainColor  max-lg:w-[90%] max-lg:mx-auto  max-lg:justify-between max-lg:left-[2.5em] max-md:left-[1.5em]">
        <li className="z-[10] max-lg:w-[9500%]">
          <img src={Logo} alt="Logo" className="z-[10] max-lg:w-[90px]" />
        </li>

        <li className="max-lg:ml-0 hidden max-lg:block">
          <RxHamburgerMenu onClick={() => setToogleBtn(!toogleBtn)} className="text-mainColor w-8 h-8 " />
        </li>
        <li className="max-lg:w-full max-lg:relative">
          <ul className={`flex gap-10 max-lg:flex-col max-lg:bg-white max-lg:h-[100vh] max-lg:w-[50%] max-lg:fixed max-lg:top-0 max-lg:left-[50%] max-lg:pt-7 max-lg:pl-8 max-lg:z-[300]  max-lg:${toogleBtn ? 'flex' : 'hidden'}`}>
            <li className="max-lg:flex max-lg:justify-end max-lg:mr-5 hidden" >
              <IoMdClose onClick={() => setToogleBtn(!toogleBtn)} className="text-mainColor w-8 h-8 " />
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='#'>About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to='/shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to='/FAQ'>FAQs</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar