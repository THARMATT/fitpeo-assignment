import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

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
    product_name: 'Blood Pressure Monitor',
    product_thumbnail: 'https://source.unsplash.com/100x100?bloodpressure',
    product_price: '$39.99',
    product_stock: 30
  },
  {
    id: '3',
    product_name: 'First Aid Kit',
    product_thumbnail: 'https://source.unsplash.com/100x100?firstaid',
    product_price: '$29.99',
    product_stock: 40
  },
  {
    id: '4',
    product_name: 'Wheelchair',
    product_thumbnail: 'https://source.unsplash.com/100x100?wheelchair',
    product_price: '$199.99',
    product_stock: 15
  },
  {
    id: '5',
    product_name: 'Face Masks (Pack of 50)',
    product_thumbnail: 'https://source.unsplash.com/100x100?facemasks',
    product_price: '$29.99',
    product_stock: 100
  },
  {
    id: '6',
    product_name: 'Hand Sanitizer (16 oz)',
    product_thumbnail: 'https://source.unsplash.com/100x100?handsanitizer',
    product_price: '$9.99',
    product_stock: 80
  },
  {
    id: '7',
    product_name: 'Digital Pulse Oximeter',
    product_thumbnail: 'https://source.unsplash.com/100x100?pulseoximeter',
    product_price: '$24.99',
    product_stock: 25
  },
  {
    id: '8',
    product_name: 'Vitamins and Supplements Bundle',
    product_thumbnail: 'https://source.unsplash.com/100x100?vitamins',
    product_price: '$49.99',
    product_stock: 60
  },
  {
    id: '9',
    product_name: 'Orthopedic Knee Brace',
    product_thumbnail: 'https://source.unsplash.com/100x100?kneebrace',
    product_price: '$34.99',
    product_stock: 20
  },
  {
    id: '10',
    product_name: 'Medical Face Shield (Pack of 10)',
    product_thumbnail: 'https://source.unsplash.com/100x100?faceshield',
    product_price: '$14.99',
    product_stock: 50
  }
];


function Product() {
	return (
		<div className="w-full bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
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

export default Product