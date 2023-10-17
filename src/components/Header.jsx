import React from 'react'
import { HiOutlineSearch} from 'react-icons/hi'

export default function Header() {
  return (
   <div className=" h-10 flex justify-between px-4 items-center ">
<strong >Hey Nigam 👋,</strong>
<div className='relative flex items-center '>
<HiOutlineSearch className='text-gray-400 absolute text-l m-2'/>
    <input type="text" placeholder='Search...' className='text-sm outline-none active:outline-none h-8 w-[10rem] border-gray-300 border  rounded-md px-6  ' />
</div>
   </div>
  )
}
