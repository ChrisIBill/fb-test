'use client'

import { client } from '@/sanity/lib/client'
import { getFeaturedItem } from '@/sanity/queries/featured-item-query'
import { useEffect, useState } from 'react'

import { MenuType } from '@/types/documents/menu-type'
import SanityImage from '@/components/sanity-image'

const FeaturedItem: React.FC<{}> = () => {
	const [featuredItem, setFeaturedItem] = useState<MenuType | null>(null)

	useEffect(() => {
		client
			.fetch(getFeaturedItem)
			.then(data => setFeaturedItem(data.featuredItem))
	}, [])

	//TODO: Return something if theres no featured item
	if (!featuredItem) return null

	//TODO: Better y margins for repositioning on diff screen sizes
	return (
		<section className='my-16 flex h-full grow flex-col items-center justify-center'>
			<h1 className=''>Make sure to try our {featuredItem.title}</h1>
			<SanityImage
				source={featuredItem.image}
				alt={featuredItem.image.alt}
				width={400}
				height={400}
				//TODO:
				componentIndex={0}
				role='none'
				sizes={`(min-width: 1024px) 1024px, 100vw`}
			/>
		</section>
	)
}

export default FeaturedItem
