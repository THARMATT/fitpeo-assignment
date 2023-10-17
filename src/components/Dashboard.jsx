import React from 'react'
import Dashboardstats from './Dashboardstats'
import TransactionChart from './TransactionChart'
import CustomerChart from './Customerchart'
import RecentProducts from './RecentProducts'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4 flex-wrap '>
       <Dashboardstats/>
       <div className="flex flex-row gap-6 w-full flex-wrap p-2">
       <TransactionChart/>
       <CustomerChart/>
       </div> 
      <div className="flex flex-row  w-full p-2">
        <RecentProducts/>
      </div>
    </div>
  )
}

export default Dashboard
