// Tools
import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'

// Queries
import { getPage } from '@/sanity/queries/page-query'
import { getGlobal } from '@/sanity/queries/global-query'
import { getNavigation } from '@/sanity/queries/navigation-query'

// Components
import { urlFor } from '@/components/sanity-image/url'
import HomePage from '@/components/pages/home-page'
import { metadata as defaultMetadata } from '@/app/(site)/layout'

export const generateMetadata = async (): Promise<Metadata> => {
	const global = await client.fetch(getGlobal)

	// Check if seo exists
	if (global[0]?.seo) {
		const seoImage = global[0].seo.shareGraphic.asset.url
		const result = {
			title: global[0].seo.metaTitle || defaultMetadata.title,
			description: global[0].seo.metaDesc || defaultMetadata.description,
			image: urlFor(seoImage).width(800).height(600).url(),
		}

		return {
			metadataBase: defaultMetadata.metadataBase,
			title: result.title,
			description: result.description,
			openGraph: {
				title: result.title,
				description: result.description,
				images: [
					{
						url: result.image,
						width: 1200,
						height: 630,
						alt: result.title,
					},
				],
			},
		}
	}

	// Fallback to default metadata if no SEO data exists
	return defaultMetadata
}

export default async function Home() {
	const global = await client.fetch(getGlobal)
	const navigation = await client.fetch(getNavigation)

	return <HomePage global={global} navigation={navigation} />
}
