'use client'

// Tools

// Types
import { GlobalType } from '@/types/documents/global-type'
import { NavigationType } from '@/types/documents/navigation-type'

// Components
import Header from '@/components/header'
import { LocationType } from '@/types/documents/location-type'
import SanityImage from '../sanity-image'

interface PageProps {
	global: GlobalType[]
	navigation: NavigationType[]
	locations: LocationType[]
}

const LocationsPage: React.FC<PageProps> = ({
	global,
	navigation,
	locations,
}) => {
	return (
		<>
			<Header navigation={navigation} global={global} />
			<main className='flex min-h-[calc(100vh-328px)] w-full flex-col items-center justify-center'>
				<h1 className='text-7xl font-bold'>Locations</h1>
				{locations.map((location, index) => (
					<div key={index} className='flex w-full items-center'>
						<div className='w-1/3'>
							<SanityImage
								source={location.image}
								alt={location.image.alt}
								width={200}
								height={200}
								componentIndex={1}
								role='none'
								sizes={`(min-width: 1024px) 1024px, 100vw`}
							/>
						</div>
						<div className='w-2/3 pl-4'>
							<h3 className='font-bold'>{location.title}</h3>
							<p>{location.description}</p>
						</div>
					</div>
				))}
			</main>
		</>
	)
}

export default LocationsPage
