import React from 'react';
import classNames from 'classnames';
import { IoFitnessSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from './lib/constants';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-violet-900 hover:no-underline active:bg-neutral-600 rounded-sm text-base sm:bg-none md:bg-none';

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div id="sidebar" className='bg-indigo-950 sm:h-screen md:h-screen sm:w-20  xs:h-full xs:w-16 md:w-20 h-screen w-60 p-3 text-white flex flex-col'>

      <div className="flex items-center gap-2 px-1 py-3 sm:mt-2 md:mt-2">
        <IoFitnessSharp className='text-red-400 text-4xl' />
        <span className='text-neutal-100 text-lg font-serif cursor-pointer sm:hidden md:hidden'>Fitpeo</span>
      </div>

      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))
        }
      </div>

      <div className='flex flex-col gap-1 border-t'>

        {
          DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
            <SidebarLink key={item.key} item={item} />
          ))
        }

      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-violet-900 text-white ' : 'text-indigo-200', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
     <span className='sm:hidden md:hidden sm:items-center md:items-center'> {item.label} </span>{item.dropicon}
    </Link>
  );
}
