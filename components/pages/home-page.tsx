'use client'

// Tools

// Types
import { GlobalType } from '@/types/documents/global-type'
import { NavigationType } from '@/types/documents/navigation-type'

// Components
import Header from '@/components/header'
import FeaturedItem from '@/components/featured-item'
import { LocationType } from '@/types/documents/location-type'

interface PageProps {
	global: GlobalType[]
	navigation: NavigationType[]
}

const HomePage: React.FC<PageProps> = ({ global, navigation }) => {
const HomePage: React.FC<PageProps> = ({ global, navigation, locations }) => {
	return (
		<>
			<Header navigation={navigation} global={global} locations={locations} />
			<main className='flex min-h-[calc(100vh-328px)] w-full flex-col items-center justify-center'>
				<h1 className='text-7xl font-bold'>Welcome</h1>
				<FeaturedItem />
			</main>
		</>
	)
}

export default HomePage
