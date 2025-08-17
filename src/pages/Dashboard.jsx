import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Headroom from 'react-headroom'
import Logo from '../assets/images/logo.svg' 
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import {FaTimes, FaBars, FaArrowLeft} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import Avatar from '../assets/images/avatar.svg'
import { sidebarData } from '../utils/utils';
import Usersummary from '../components/usersummary';
import Apipagination from '../components/Apipagination';

const Dashboard = () => {
    const location = useLocation();
    const email = location.state?.email || "Guest"; // Fallback to "Guest"
      const [isMobile, setIsMobile] = useState(false);
  return (
    <div className='bg-[#F6F6F6] h-screen'>
        <div>
              <Headroom>
                <nav className='flex w-full justify-around items-center bg-[#FFFFFF] h-24 py-4'>
                  <img src={Logo} alt="" className='w-32 h-32'/>
                  <div className='flex items-center justify-between sma:hidden mda:hidden bg-[#f4f4f4] border border-[#909FBE] rounded-md w-96 '>
                  <input type="search" placeholder='Search for anything...' name="" id="" className='h-10 w-full bg-[#f4f4f4] rounded-md focus:outline-none p-2' />
                  <div className='bg-[#39cdcc] w-9 items-end h-10 rounded-r-md'>
                  <FaMagnifyingGlass className='text-2xl text-white items-baseline top-9 pl-2 absolute cursor-pointer' />
                  </div>
                  </div>
                  <div className='flex items-center sma:hidden mda:hidden gap-6'>
                  <a href="" className='underline  font-Manrope hover:no-underline text-sm text-[#657AA4] font-medium'>DOCS</a>
                  <FaBell className='text-2xl sma:hidden mda:hidden'/>
                  <img src={Avatar} className='rounded-full' alt="" />
                  <div className='flex items-center gap-2 cursor-pointer'>
                  <p className='font-Roboto text-xs'>{email}</p>
                  <IoIosArrowDown className='text-2xl cursor-pointer'/>
                  </div>
                  </div>
                  <div className='lg:hidden mdaa:hidden'>
                  <div className='relative'>
                    <button onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
                    {/* Mobile menu */}
          <div
            className={`fixed -top-9 left-0 mt-14  h-[100vh] overflow-y-scroll w-[60%] bg-gray-50 shadow-md transform transition-transform duration-300 ease-in-out
                        ${
                            isMobile
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }`}
          >
            <ul className="flex flex-col w-full space-y-4 p-8">
              <img src={Logo} alt="" />
              {
                    sidebarData.map((x) => (
                        <div>
                        <div key={x.id} className='flex items-center gap-4 pt-4'>
                            {x.img && <img src={x.img} alt={x.title} className='w-6 h-6' />}
                            <span className='text-sm font-Manrope text-[#213F7D]'>{x.title}</span>
                        </div>
                        <h3>
                            {x.heading && <span className='text-xs font-Manrope text-[#657AA4]'>{x.heading}</span>}
                        </h3>
                        <NavLink to='/Dashboard' className=''>
                            {x.titles && x.titles.map((subItem) => (
                                <div key={subItem.id} className='hover:bg-[#F6F6F6]  cursor-pointer flex gap-4 py-2'>
                                    {subItem.img && <img src={subItem.img} alt={subItem.title} className='w-6 h-6' />}
                                    <span className='text-sm font-Manrope text-[#213F7D]'>{subItem.title}</span>
                                </div>
                            ))}
                        </NavLink>
                        </div>
                        
                    ))
                }
              <li>
                <NavLink
                  to="/"
                  className={
                    " text-sm font-Manrope flex items-center gap-1 text-[#213F7D] "
                  }
                  onClick={() => setIsMobile(false)}
                >
                  <FaArrowLeft/> LOG OUT
                </NavLink>
              </li>
            </ul>
          </div>
                  </div>
                  </div>
                </nav>
              </Headroom>
            </div>
        <div>
            <div className='flex justify-between  bg-white px-10 sma:px-1 mda:px-1 py-4'>
              <div className='lg:w-1/4 sma:hidden mda:hidden sticky bg-[#FFFFFF] h-screen overflow-y-scroll'>
                {
                    sidebarData.map((x) => (
                        <div>
                        <div key={x.id} className='flex items-center gap-4 pt-4'>
                            {x.img && <img src={x.img} alt={x.title} className='w-6 h-6' />}
                            <span className='text-sm font-Manrope text-[#213F7D]'>{x.title}</span>
                        </div>
                        <h3>
                            {x.heading && <span className='text-xs font-Manrope text-[#657AA4]'>{x.heading}</span>}
                        </h3>
                        <div className=''>
                            {x.titles && x.titles.map((subItem) => (
                                <div key={subItem.id} className='hover:bg-[#F6F6F6]  cursor-pointer flex gap-4 py-2'>
                                    {subItem.img && <img src={subItem.img} alt={subItem.title} className='w-6 h-6' />}
                                    <span className='text-sm font-Manrope text-[#213F7D]'>{subItem.title}</span>
                                </div>
                            ))}
                        </div>
                        
                        </div>
                        
                    ))
                }
                              <li>
                <NavLink
                  to="/"
                  className={
                    " text-sm font-Manrope flex items-center gap-1 text-[#213F7D] "
                  }
                  onClick={() => setIsMobile(false)}
                >
                  <FaArrowLeft/> LOG OUT
                </NavLink>
              </li>
              </div>
            <div className='lg:w-3/4 bg-[#F6F6F6]  '>
            <h1 className='text-4xl sma:text-xl mda:text-xl overflow-hidden font-Manrope mb-3 text-[#213F7D] lg:px-10 sma:px-5 mda:px-5 pt-10'>Welcome, {email}!</h1>
            <p className='text-[#4F4F4F] text-base font-Manrope px-10'>Here is your dashboard.</p>
            {/* Add more dashboard content here */}
            <Usersummary />
            <Apipagination />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard