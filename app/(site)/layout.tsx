import './globals.css'

// Tools

// context
import Providers from '@/components/providers'

//Base Metadata
export const metadata = {
	metadataBase: new URL('https://www.theranchlc.com/'),
	title: 'The Ranch',
	description: 'Insert description here', // <-- todo: add description
	openGraph: {
		title: 'The Ranch',
		description: 'Insert description here', // <-- todo: add description
		images: [
			{
				url: 'https://cdn.sanity.io/images/9p1heoig/production/f41fe7e9eea080699b3181b28ae985ad991f48fe-8010x5340.jpg',
				width: 1200,
				height: 630,
				alt: 'The Ranch',
			},
		],
	},
	alternates: {
		canonical: '/',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body id='main'>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
