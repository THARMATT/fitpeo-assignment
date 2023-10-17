import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineSearch } from 'react-icons/hi'
function RecentProducts() {

    const popularProducts= [
        {
          id: '2',
          product_name: 'Blood Pressure Monitor',
          product_thumbnail: 'https://source.unsplash.com/100x100?bloodpressure',
          product_price: '$39.99',
          product_stock: 102
        },
        {
          id: '3',
          product_name: 'First Aid Kit',
          product_thumbnail: 'https://source.unsplash.com/100x100?firstaid',
          product_price: '$29.99',
          product_stock: 8
        },
       
      ];
      
  return (
   <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">

<div className=" h-6 flex justify-between items-center ">
<strong >Product Sell</strong>
<div className='relative flex items-center '>
<HiOutlineSearch className='text-gray-400 absolute text-l m-2'/>
    <input type="text" placeholder='Search...' className='text-sm outline-none active:outline-none h-6 w-[7rem] border-gray-300 border  rounded-md px-6  ' />
</div>
   </div>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to='#'
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
   </div>
  )
}

export default RecentProducts
