import { LocationContext, LocationContextType } from '@/context/location'
import { useContext } from 'react'
import SanityImage from '../sanity-image'

const SelectedLocation = () => {
	const { locationContext } = useContext(LocationContext) as LocationContextType

	if (!locationContext.image) return null
	return (
		<section className='mt-16 flex w-3/4 grow flex-col items-center justify-center'>
			<h2>{locationContext.title}</h2>
			<SanityImage
				source={locationContext.image}
				alt={locationContext.image.alt}
				width={400}
				height={400}
				componentIndex={0}
				role='none'
				sizes={`(min-width: 1024px) 1024px, 100vw`}
			/>
			<p className='mx-auto line-clamp-6 max-w-[400px] grow-0 justify-center text-wrap text-center'>
				{locationContext.description}
			</p>
		</section>
	)
}

export default SelectedLocation

//<div className='flex w-full flex-col items-center justify-center gap-x-4 sm:flex-row'>
