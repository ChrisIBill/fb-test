'use client'
//import { LocationType } from '@/types/documents/location-type'
import { LocationContext, LocationContextType } from '@/context/location'
import { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import HandleLocation from '@/helpers/handle-location'

interface ILocationSelect extends Array<any> {} // update to LocationType

const LocationMenuSelect = ({ locations }: { locations: ILocationSelect }) => {
	const [cookies, setCookie] = useCookies(['nearestLocation'])

	/* === LOCATION LOGIC === */

	const { locationContext, updateLocationContext } = useContext(
		LocationContext,
	) as LocationContextType

	const handleUpdateLocationContext = (location: any) => {
		HandleLocation(location, updateLocationContext, setCookie)
	} // change to LocationType

	useEffect(() => {}, [locationContext])

	/* === END LOCATION LOGIC === */

	return <div>Test</div>
}

export default LocationMenuSelect
