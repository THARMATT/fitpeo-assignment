import React from 'react'
import { HiOutlineSearch} from 'react-icons/hi'

export default function Header() {
  return (
   <div className=" h-10 flex justify-between px-4 items-center  ">
<strong className='sm:text-sm xs:text-[12px]' >Hey Nigam 👋,</strong>
<div className='relative flex items-center  '>
<HiOutlineSearch className='text-gray-400   xs:hidden absolute text-md xs:text-sm m-2'/>
    <input type="text" placeholder='Search...' className='text-sm outline-none active:outline-none h-8 w-[10rem] xs:w-[5rem] border-gray-300 border  xs:hidden xs:text-[8px] rounded-md px-6  sm:w-[6rem]' />
</div>
   </div>
  )
}
