'use client'

import { createContext, useState} from 'react'

export type LocationContextType = {
	locationContext: ILocationContext
	updateLocationContext: (value: any) => void
}

export interface ILocationContext {
	_id: string
	title: string
	description?: string
}

export const LocationContext = createContext<LocationContextType | null>(null)

const LocationContextProvider = ({ children }: any) => {
	const [locationContext, setLocationContext] = useState<ILocationContext>({
		_id: '0',
		title: 'Choose Location',
		description: ''
	})

	const updateLocationContext = (state: ILocationContext): void => {
		setLocationContext(state)
	}

	const contextValue: LocationContextType = {
		locationContext,
		updateLocationContext,
	}

	return (
		<LocationContext.Provider value={contextValue}>
			{children}
		</LocationContext.Provider>
	)
}

export default LocationContextProvider
