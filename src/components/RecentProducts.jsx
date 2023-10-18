import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineSearch } from 'react-icons/hi'
function RecentProducts() {

    const popularProducts = [
		{
		  id: '1',
		  product_name: 'Digital Thermometer',
		  product_thumbnail: 'https://source.unsplash.com/100x100?thermometer',
		  product_price: '$19.99',
		  product_stock: 50
		},
		{
		  id: '2',
		  product_name: 'First Aid Kit',
		  product_thumbnail: 'https://source.unsplash.com/100x100?firstaidkit',
		  product_price: '$29.99',
		  product_stock: 25
		},
		{
		  id: '3',
		  product_name: 'Blood Pressure Monitor',
		  product_thumbnail: 'https://source.unsplash.com/100x100?bloodpressuremonitor',
		  product_price: '$39.99',
		  product_stock: 30
		},
		{
		  id: '4',
		  product_name: 'Hand Sanitizer',
		  product_thumbnail: 'https://source.unsplash.com/100x100?handsanitizer',
		  product_price: '$9.99',
		  product_stock: 100
		},
		{
		  id: '5',
		  product_name: 'Face Mask',
		  product_thumbnail: 'https://source.unsplash.com/100x100?facemask',
		  product_price: '$5.99',
		  product_stock: 200
		},
		{
		  id: '6',
		  product_name: 'Vitamins and Supplements',
		  product_thumbnail: 'https://source.unsplash.com/100x100?vitamins',
		  product_price: '$24.99',
		  product_stock: 40
		},
		{
		  id: '7',
		  product_name: 'Pain Relievers',
		  product_thumbnail: 'https://source.unsplash.com/100x100?painrelievers',
		  product_price: '$12.99',
		  product_stock: 75
		},
		{
		  id: '8',
		  product_name: 'Throat Lozenges',
		  product_thumbnail: 'https://source.unsplash.com/100x100?lozenges',
		  product_price: '$7.99',
		  product_stock: 60
		},
		{
		  id: '9',
		  product_name: 'Medical Face Shield',
		  product_thumbnail: 'https://source.unsplash.com/100x100?faceshield',
		  product_price: '$14.99',
		  product_stock: 35
		},
		{
		  id: '10',
		  product_name: 'Hand Wash Soap',
		  product_thumbnail: 'https://source.unsplash.com/100x100?handwash',
		  product_price: '$6.99',
		  product_stock: 80
		},
		{
		  id: '11',
		  product_name: 'Digital Blood Glucose Monitor',
		  product_thumbnail: 'https://source.unsplash.com/100x100?bloodglucose',
		  product_price: '$49.99',
		  product_stock: 20
		},
		{
		  id: '12',
		  product_name: 'Infrared Forehead Thermometer',
		  product_thumbnail: 'https://source.unsplash.com/100x100?infraredthermometer',
		  product_price: '$34.99',
		  product_stock: 15
		}
	  ];
	  
	 
	  
      
  return (
   <div className="bg-white px-4 pt-3 xs:p-1   rounded-sm border border-gray-200 flex-1 ">

<div className=" h-6 flex justify-between items-center ">
<strong  className='xs:text-[8px]'>Product in Demand</strong>
<div className='relative flex items-center '>
<HiOutlineSearch className='text-gray-400 absolute text-l m-2 xs:text-[8px] '/>
    <input type="text" placeholder='Search...' className='text-sm outline-none active:outline-none h-6 w-[7rem] border-gray-300 border  rounded-md px-6  ' />
</div>
   </div>
			<div className="mt-4 flex flex-col gap-3 sm:gap-1">
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
