'use client'

import LocationContextProvider from '@/context/location'

export default function Providers({ children }: { children: React.ReactNode }) {
	return <LocationContextProvider>{children}</LocationContextProvider>
}
