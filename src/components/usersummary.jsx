import React from 'react'
import { userData } from '../utils/utils'
const Usersummary = () => {
  return (
    <div>
        <div className='grid grid-flow-col overflow-x-scroll tracking-tighter leading-none sma:grid-rows-2 mda:grid-rows-2 m-0 gap-4 sma:gap-2 justify-between px-10 sma:px-5 mda:px-5 py-4'>
            {
                userData.map((x) => (
                

                    <div key={x.id} className='w-[180px] sma:w-[170px] mda:w-[170px] rounded h-[180px] mda:h-[150px] sma:h-[150px] px-4 py-4 shadow-md bg-[#ffffff]'>
                        <img src={x.img} alt="" />
                        <h3 className='text-sm my-4 font font-Manrope font-light'>{x.name}</h3>
                        <h1 className='text-xl text-[#213F7D] mt-3 font-semibold font-Oswald'>{x.total}</h1>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Usersummary