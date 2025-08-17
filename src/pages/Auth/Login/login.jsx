import React, { useEffect, useState } from 'react'
import Forgetpassword from '../../Forget-password/Forget-password'
import Logo from '../../../assets/images/logo.svg'
import SvgLogo from '../../../assets/images/login-illus.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const login = () => {
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
     

    async function handleSubmit(e) {
        e.preventDefault();
        setError(""); // Reset error message
        setLoading(true);

        if (!email || !password) {
            setError("Email and Password are required");
            setLoading(false);
            return;
        }
        
        console.log("Logging in with:", { email, password });
       

        
            
            setTimeout(() => {
                setLoading(false)
                 // On successful login, navigate to another page
        navigate('/Dashboard', {state: { email }}); 
            },5000)

    }
   
  return (
    
        <div className='flex my-6 justify-around sma:flex-col mda:flex-col items-center'>
            <div className='lg:bg-[#f6f6f6] lg:basis-[50%] bg-blend-multiply px-10 py-10 h-full'>
                <img src={Logo} alt="logo" className='w-60 h-40 sma:w-40 bg-blend-multiply' />
                <img src={SvgLogo} alt="Svg Illustration" className='bg-blend-multiply sma:hidden w-full h-full'/>
            </div>
            <div className=' bg-[#ffffff] mx-4'>
                <h1 className='text-4xl font-Manrope mb-3  text-[#213F7D]'>Welcome!</h1>
                <p className='text-[#4F4F4F] text-base font-Manrope'>Please enter your details.</p>
                {error && <p className='text-red-500'>{error}</p>}
                <form className='mt-14' onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='border-2 rounded-md font-Roboto border-slate-200 h-12 block lg:w-[450px] w-[90%] px-3 mb-10 focus:outline-none ' />
                    <div className='mb-7 flex justify-between border-2 border-slate-200 lg:w-[450px] w-[90%] rounded-md items-center'>
                    <input  value={password} id='password'
                    type={visible ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Password' required className=' h-12 font-Roboto lg:w-[420px] w-full px-3 focus:outline-none ' />
                    <p className='pr-4 font-Manrope text-xs cursor-pointer text-[#39cdcc] font-semibold' onClick={() => setVisible(!visible)}>
                        {visible ? 'SHOW' : 'HIDE'}
                    </p>
                    
                    </div>
                    <NavLink to='/Forgetpassword' className='text-[#39cdcc] py-10 text-sm font-Manrope font-semibold'>FORGOT PASSWORD?</NavLink>
                    <button disabled={loading} className=' lg:w-[380px] w-[345px] font-Manrope tracking-wide text-sm font-medium hover:bg-opacity-75 mt-5 flex justify-center items-center h-10 bg-[#39cdcc] text-white rounded-md' >{loading ? "Loading...": "LOGIN"}</button>
                </form>
            </div>
        </div>

  )
}

export default login