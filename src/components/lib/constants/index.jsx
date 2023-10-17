import {
	HiOutlineViewGrid,
	HiOutlineCube,
	
	HiOutlineQuestionMarkCircle,
	
	
} from 'react-icons/hi'
import {ImAidKit} from 'react-icons/im'
 import {MdHealthAndSafety} from 'react-icons/md'
 import {PiCodesandboxLogoLight,PiCalculatorThin} from 'react-icons/pi'
 import {CgProfile} from 'react-icons/cg'
 import {IoMdArrowDropdown} from 'react-icons/io'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />,

     
	},
	{
		key: 'chronic-care',
		label: 'Chronic-Care',
		path: 'https://fitpeo.com/chronic-care',
		icon: <MdHealthAndSafety />,

	},
	{
		key: 'medical-kit',
		label: 'Medical-kit',
		path: 'https://fitpeo.com/medical-kit',
		icon: <ImAidKit />,

	},
	{
		key: 'cpt-codes',
		label: 'CPT-Codes',
		path: 'https://fitpeo.com/cpt-codes',
		icon: <PiCodesandboxLogoLight />,

	},
	{
		key: 'Revenue-Calculator',
		label: 'revenue-calculator',
		path: 'https://fitpeo.com/revenue-calculator',
		icon: <PiCalculatorThin />,

	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '#',
		icon: <HiOutlineQuestionMarkCircle />,

	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Profile',
		label: 'Nigam Sharma',
		path: 'https://nsktportfolio.vercel.app/',
		img:'',
		icon: <CgProfile />,
		dropicon:<IoMdArrowDropdown/>

	},
	
]