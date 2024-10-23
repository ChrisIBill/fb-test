'use client'
import { LocationType } from '@/types/documents/location-type'
import { LocationContext, LocationContextType } from '@/context/location'
import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import HandleLocation from '@/helpers/handle-location'

interface ILocationSelect extends Array<LocationType> {} // update to LocationType

const LocationMenuSelect = ({ locations }: { locations: ILocationSelect }) => {
	const [cookies, setCookie] = useCookies(['nearestLocation'])

	/* === LOCATION LOGIC === */

	const { locationContext, updateLocationContext } = useContext(
		LocationContext,
	) as LocationContextType

	const handleUpdateLocationContext = (location: LocationType) => {
		HandleLocation(location, updateLocationContext, setCookie)
	} // change to LocationType

	useEffect(() => {
		handleUpdateLocationContext(cookies.nearestLocation)
	}, [])

	/* === END LOCATION LOGIC === */

	return (
		<div className=''>
			<select
				name='location'
				id='location'
				value={locationContext?.title}
				onChange={e => {
					const location = locations.find(
						location => location.title === e.target.value,
					)
					if (!location) return
					handleUpdateLocationContext(location)
				}}
			>
				<option value=''>Location</option>
				{locations.map((location, index) => (
					<option key={index} value={location.title}>
						{location.title}
					</option>
				))}
			</select>
		</div>
	)
}

export default LocationMenuSelect
