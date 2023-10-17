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
  },
  {
    id: '13',
    product_name: 'Toothbrush and Toothpaste Set',
    product_thumbnail: 'https://source.unsplash.com/100x100?toothbrush',
    product_price: '$8.99',
    product_stock: 70
  },
  {
    id: '14',
    product_name: 'Shampoo and Conditioner Combo',
    product_thumbnail: 'https://source.unsplash.com/100x100?shampoo',
    product_price: '$14.99',
    product_stock: 45
  },
  {
    id: '15',
    product_name: 'Disposable Gloves (100 Pack)',
    product_thumbnail: 'https://source.unsplash.com/100x100?disposablegloves',
    product_price: '$12.99',
    product_stock: 55
  },
  {
    id: '16',
    product_name: 'Cotton Swabs',
    product_thumbnail: 'https://source.unsplash.com/100x100?cottonswabs',
    product_price: '$3.99',
    product_stock: 150
  },
  {
    id: '17',
    product_name: 'Sunscreen Lotion (SPF 30)',
    product_thumbnail: 'https://source.unsplash.com/100x100?sunscreen',
    product_price: '$10.99',
    product_stock: 65
  },
  {
    id: '18',
    product_name: 'Multi-Vitamin Gummies',
    product_thumbnail: 'https://source.unsplash.com/100x100?vitamingummies',
    product_price: '$19.99',
    product_stock: 40
  },
  {
    id: '19',
    product_name: 'Hand Cream',
    product_thumbnail: 'https://source.unsplash.com/100x100?handcream',
    product_price: '$6.99',
    product_stock: 90
  },
  {
    id: '20',
    product_name: 'Disposable Face Shields (10 Pack)',
    product_thumbnail: 'https://source.unsplash.com/100x100?disposablefaceshields',
    product_price: '$24.99',
    product_stock: 30
  },
  {
    id: '21',
    product_name: 'Digital Body Weight Scale',
    product_thumbnail: 'https://source.unsplash.com/100x100?bodyscale',
    product_price: '$29.99',
    product_stock: 25
  },
  {
    id: '22',
    product_name: 'Protein Powder',
    product_thumbnail: 'https://source.unsplash.com/100x100?proteinpowder',
    product_price: '$19.99',
    product_stock: 60
  },
  {
    id: '23',
    product_name: 'Dental Floss',
    product_thumbnail: 'https://source.unsplash.com/100x100?dentalfloss',
    product_price: '$2.99',
    product_stock: 120
  },
  {
    id: '24',
    product_name: 'Eye Drops',
    product_thumbnail: 'https://source.unsplash.com/100x100?eyedrops',
    product_price: '$4.99',
    product_stock: 70
  },
  {
    id: '25',
    product_name: 'Knee Brace',
    product_thumbnail: 'https://source.unsplash.com/100x100?kneebrace',
    product_price: '$17.99',
    product_stock: 35
  },
  {
    id: '26',
    product_name: 'Multivitamins for Seniors',
    product_thumbnail: 'https://source.unsplash.com/100x100?seniorsvitamins',
    product_price: '$29.99',
    product_stock: 30
  },
  {
    id: '27',
    product_name: 'Nasal Spray',
    product_thumbnail: 'https://source.unsplash.com/100x100?nasalspray',
    product_price: '$6.99',
    product_stock: 50
  },
  {
    id: '28',
    product_name: 'Hair Dryer',
    product_thumbnail: 'https://source.unsplash.com/100x100?hairdryer',
    product_price: '$24.99',
    product_stock: 40
  },
  {
    id: '29',
    product_name: 'Lip Balm',
    product_thumbnail: 'https://source.unsplash.com/100x100?lipbalm',
    product_price: '$3.99',
    product_stock: 80
  },
  {
    id: '30',
    product_name: 'Foot Massager',
    product_thumbnail: 'https://source.unsplash.com/100x100?footmassager',
    product_price: '$49.99',
    product_stock: 20
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