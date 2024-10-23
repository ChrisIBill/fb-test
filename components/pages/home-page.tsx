'use client'

// Tools

// Types
import { GlobalType } from '@/types/documents/global-type'
import { NavigationType } from '@/types/documents/navigation-type'

// Components
import Header from '@/components/header'
import FeaturedItem from '@/components/featured-item'
import { LocationType } from '@/types/documents/location-type'
import SelectedLocation from '@/components/select-location/selected-location'

interface PageProps {
	global: GlobalType[]
	locations: LocationType[]
	navigation: NavigationType[]
}

const HomePage: React.FC<PageProps> = ({ global, navigation, locations }) => {
	return (
		<>
			<Header navigation={navigation} global={global} locations={locations} />
			<main className='flex min-h-[calc(100vh-328px)] w-full flex-col items-center justify-center'>
				<h1 className='text-7xl font-bold'>Welcome</h1>
				<div className='flex w-full flex-col items-center justify-center md:flex-row md:items-start'>
					<FeaturedItem />
					<SelectedLocation />
				</div>
			</main>
		</>
	)
}

export default HomePage
