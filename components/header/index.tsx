'use client'

import Link from 'next/link'
import { NavigationType } from '@/types/documents/navigation-type'
import { GlobalType } from '@/types/documents/global-type'
import { LocationType } from '@/types/documents/location-type'
import LocationMenuSelect from '@/components/select-location/index'

interface HeaderProps {
	navigation: NavigationType[]
	locations?: LocationType[]
	global: GlobalType[]
}

const Header: React.FC<HeaderProps> = ({ navigation, global, locations }) => {
	return (
		<header className='flex items-center justify-between p-4'>
			<Link href={'/'}>
				<h1 className='text-3xl font-bold'>
					{global[0]?.title || 'Default Header'}
				</h1>
			</Link>
			<ul className='flex space-x-4'>
				{locations && <LocationMenuSelect locations={locations} />}
				{navigation[0]?.navItems.map(item => (
					<li key={item.title} className='hover:text-red-500'>
						<Link href={`/${item.page.slug.current}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</header>
	)
}

export default Header
