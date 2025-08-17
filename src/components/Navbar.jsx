import React from 'react'
import Headroom from 'react-headroom'
import Logo from '../assets/images/logo.svg' 
import { FaMagnifyingGlass } from "react-icons/fa6";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <Headroom>
        <nav className="flex justify-around items-center bg-[#FFFFFF] h-24 py-4">
          <img src={Logo} alt="" className="w-32 h-32" />
          <div className="flex items-center justify-between bg-[#f4f4f4] border border-[#909FBE] rounded-md w-80 ">
            <input
              type="search"
              placeholder="Search for anything..."
              name=""
              id=""
              className="h-10 bg-[#f4f4f4] rounded-md focus:outline-none p-2"
            />
            <div className="bg-[#39cdcc] w-9 items-end h-10 rounded-r-md">
              <FaMagnifyingGlass className="text-2xl text-white items-baseline top-9 pl-2 absolute cursor-pointer" />
            </div>
          </div>
          <div className=' '>
            <button onClick={() => setIsMobile(!isMobile)} className="text-2xl">
              {isMobile ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </Headroom>
    </div>
  );
}

export default Navbar